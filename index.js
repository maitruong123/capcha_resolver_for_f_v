const express = require("express");
const app = express();
const Joi = require('joi');
const axios = require("axios");
const url = require("url");
const fs = require('fs');
const querystring = require("querystring");

const payloadSchema = Joi.object({
  'url': Joi.string().required()
});

app.use(express.json());

app.get('/', (_req, res) => {
  const response = {
    message: "Server working!"
  };
  res.status(200).json(response);
});

app.post("e9c7ff37-0300-4981-b0a4-53de495598e1", async (req, res) => {
  try {
    const { error } = payloadSchema.validate(req.body);
    if (error) {
      const response = { message: "invalid params" };
      return res.status(200).json(response);
    }

    const decodedUrl = Buffer.from(req.body.url, "base64").toString('utf-8');
    const parsedUrl = url.parse(decodedUrl);
    const hash = parsedUrl.hash ? parsedUrl.hash.substring(1) : '';
    const queryParams = querystring.parse(decodeURIComponent(hash));
    const tgWebAppData = querystring.parse(decodeURIComponent(queryParams.tgWebAppData));
    const userData = JSON.parse(tgWebAppData.user);

    const initData = {
      user: tgWebAppData.user || undefined,
      chat_instance: queryParams.chat_instance || undefined,
      chat_type: queryParams.chat_type || undefined,
      auth_date: queryParams.auth_date || undefined,
      hash: queryParams.hash || undefined,
      start_param: queryParams.start_param || undefined
    };

    const requestData = {
      gameId: 1,
      initData,
      externalId: userData.id || undefined,
      firstName: userData.first_name || undefined,
      language: userData.language_code || undefined,
      lastName: userData.last_name || undefined,
      username: userData.username || undefined,
      refId: ''
    };

    const loginResponse = await axios.post("https://tgames.bcsocial.net/panel/users/login", JSON.stringify(requestData));



    const setCookieHeader = loginResponse.headers["set-cookie"];
    const cookies = parseCookies(setCookieHeader);

    if (loginResponse.data.code !== 0) {
      if (loginResponse.data.message === "Code 22. Please try again later") {
        const response = { message: "Code 22. Please try again later" };
        return res.status(200).json(response);
      }
      const response = { message: "login failed" };
      return res.status(200).json(response);
    }

    const verifyCapchaData = { code: 1000 };
    const verifyCapchaHeaders = {
                Cookie: `ci_session=${cookies.ci_session}`
            };

    const verifyCapchaResponse = await axios.post("https://tgames.bcsocial.net/panel/users/verifyCapcha", JSON.stringify(verifyCapchaData), { headers: verifyCapchaHeaders });
    if (verifyCapchaResponse.data.code === 1) {
      const capchaString = verifyCapchaResponse.data?.data?.capcha;
      if (!capchaString) {
        const response = { message: "Can't get capcha" };
        return res.status(200).json(response);
      }

      const capchaSolution = eval(capchaString.replace('=', '').trim());
      if (!capchaSolution) {
        const response = { message: "capcha resolve failed" };
        return res.status(200).json(response);
      }

      const solveCapchaData = { code: String(capchaSolution) };
      const solveCapchaResponse = await axios.post("https://tgames.bcsocial.net/panel/users/verifyCapcha", JSON.stringify(solveCapchaData), { headers: verifyCapchaHeaders });

      if (solveCapchaResponse.data.code !== 0) {
        const response = { message: "SOLUTION FAIL" };
        return res.status(200).json(response);
      }
    }

    const claimResponse = await axios.post("https://tgames.bcsocial.net/panel/games/claim", {}, { headers: verifyCapchaHeaders });

    if (claimResponse.data.code !== 0) {
      if (claimResponse.data.message === "incorrect time") {
        const response = { message: "incorrect time" };
        return res.status(200).json(response);
      }
      if (claimResponse.data.message === "Code 22. Please try again later") {
        const response = { message: 'Code 22. Please try again later' };
        return res.status(200).json(response);
      }
      if (claimResponse.data.message === "wallet is empty") {
        const response = { message: "wallet is empty" };
        return res.status(200).json(response);
      }
      const response = { message: "Can't claim" };
      return res.status(200).json(response);
    }

    const amount = claimResponse?.data?.data?.amount;
    const nextClaimTime = claimResponse?.data?.data?.nextClaimTime;
    
    const response = {
      message: 'OK',
      amount,
      nextClaimTime
    };
    console.log("Claimed:"+ amount);
    res.status(200).json(response);
  } catch (error) {
    const response = {
      message: "SERVER ERROR",
      detail: error.message
    };
    res.status(500).json(response);
    console.error(error.message);
  }
});

app.post("c922ec0f-f253-4dcd-8f2c-6f65bd058b2b", async (req, res) => {
  try {
    const { error } = payloadSchema.validate(req.body);
    if (error) {
      const response = { message: "invalid params" };
      return res.status(200).json(response);
    }

    const decodedUrl = Buffer.from(req.body.url, 'base64').toString('utf-8');
    const parsedUrl = url.parse(decodedUrl);
    const hash = parsedUrl.hash ? parsedUrl.hash.substring(1) : '';
    const queryParams = querystring.parse(decodeURIComponent(hash));
    const tgWebAppData = querystring.parse(decodeURIComponent(queryParams.tgWebAppData));
    const userData = JSON.parse(tgWebAppData.user);

    const initData = {
      user: tgWebAppData.user || undefined,
      chat_instance: queryParams.chat_instance || undefined,
      chat_type: queryParams.chat_type || undefined,
      auth_date: queryParams.auth_date || undefined,
      hash: queryParams.hash || undefined,
      start_param: queryParams.start_param || undefined
    };

    const requestData = {
      gameId: 2,
      initData,
      externalId: userData.id || undefined,
      firstName: userData.first_name || undefined,
      language: userData.language_code || undefined,
      lastName: userData.last_name || undefined,
      username: userData.username || undefined,
      refId: ''
    };

    const loginResponse = await axios.post("https://tgames-vivaftn.bcsocial.net/panel/users/login", JSON.stringify(requestData));

    if (loginResponse.data.code !== 0) {
      if (loginResponse.data.message === "Code 22. Please try again later") {
        const response = { message: "Code 22. Please try again later" };
        return res.status(200).json(response);
      }
      const response = { message: "Login failed" };
      return res.status(200).json(response);
    }

    const setCookieHeader = loginResponse.headers["set-cookie"];
    const cookies = parseCookies(setCookieHeader);

    const verifyCapchaData = { code: 0 };
    const verifyCapchaHeaders = {
                Cookie: `ci_session=${cookies.ci_session}`
            };    
    const verifyCapchaResponse = await axios.post("https://tgames-vivaftn.bcsocial.net/panel/users/verifyCapcha", JSON.stringify(verifyCapchaData), { headers: verifyCapchaHeaders });

    if (verifyCapchaResponse.data.code === 1) {
      const capchaString = verifyCapchaResponse.data?.data?.capcha;
      if (!capchaString) {
        const response = { message: "Can't get capcha" };
        return res.status(200).json(response);
      }

      const capchaSolution = eval(capchaString.replace('=', '').trim());
      if (!capchaSolution) {
        const response = { message: "Can't resolve capcha" };
        return res.status(200).json(response);
      }

      const solveCapchaData = { code: String(capchaSolution) };
      const solveCapchaResponse = await axios.post("https://tgames-vivaftn.bcsocial.net/panel/users/verifyCapcha", JSON.stringify(solveCapchaData), { headers: verifyCapchaHeaders });

      if (solveCapchaResponse.data.code !== 0) {
        const response = { message: "capcha resolve failed" };
        return res.status(200).json(response);
      }
    }

    const claimResponse = await axios.post("https://tgames-vivaftn.bcsocial.net/panel/games/claim", {}, { headers: verifyCapchaHeaders });

    if (claimResponse.data.code !== 0) {
      if (claimResponse.data.message === "incorrect time") {
        const response = { message: "incorrect time" };
        return res.status(200).json(response);
      }
      if (claimResponse.data.message === "Code 22. Please try again later") {
        const response = { message: 'Code 22. Please try again later' };
        return res.status(200).json(response);
      }
      if (claimResponse.data.message === "wallet is empty") {
        const response = { message: "wallet is empty" };
        return res.status(200).json(response);
      }
      const response = { message: "CLAIM ERROR" };
      return res.status(200).json(response);
    }

    const amount = claimResponse?.data?.data?.amount;
    const nextClaimTime = claimResponse?.data?.data?.nextClaimTime;
    
    const response = {
      message: 'OK',
      amount,
      nextClaimTime
    };
    console.log("Claimed:"+ amount);
    res.status(200).json(response);
  } catch (error) {
    const response = {
      message: "SERVER ERROR",
      detail: error.message
    };
    res.status(500).json(response);
    console.error(error.message);
  }
});

function parseCookies(setCookieHeader) {
  const list = {};
  setCookieHeader && setCookieHeader.forEach(cookie => {
    const parts = cookie.split(';');
    parts.forEach(part => {
      const [name, value] = part.split('=');
      list[name.trim()] = (value || '').trim();
    });
  });
  return list;
}

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

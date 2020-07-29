const express = require("express");
const app = require("./app");

app.listen(process.env.PORT || 3000, () =>
  console.log(
    `Example app listening at http://localhost:${process.env.PORT || 3000}`
  )
);

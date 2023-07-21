import dateFormat, { masks } from "dateformat";

const now = Date.now();
console.log("now:", dateFormat(now, "yyyy-mm-dd HH:MM:ss"));
const before = new Date(now - 1000);
console.log("before:", dateFormat(before, "yyyy-mm-dd HH:MM:ss"));
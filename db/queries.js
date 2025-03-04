const { ppid } = require("process");
const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function searchUser(username) {
    console.log("username " + username)
    const { rows } = await pool.query("SELECT username FROM usernames WHERE username = $1",
    [username])
    const rowResult = rows[0]
    return rowResult;
}

module.exports = {
  getAllUsernames,
  insertUsername,
  searchUser
};

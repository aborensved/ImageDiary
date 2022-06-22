import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase('imgDiary.db');

export const initDB = () => {
  return new Promise((resolve, reject) => {
    db.transaction((transaction) => {
      transaction.executeSql(
        `CREATE TABLE IF NOT EXISTS imgdiaries (
          id INTEGER PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          body TEXT NOT NULL,
          imgdata TEXT
        )`,
        [],
        (tx, res) => resolve(res),
        (tx, err) => reject(err)
      )
    })
  })
}

export const getDiariesInfo = () => {
  return new Promise((resolve, reject) => {
    db.transaction((transaction) => {
      transaction.executeSql(
        `pragma table_info('imgdiaries')`,
        [],
        (tx, res) => resolve(res),
        (tx, err) => reject(err)
      )
    })
  })
}

export const insert = (imgDiary) => {
  return new Promise((resolve, reject) => {
    db.transaction((transaction) => {
      transaction.executeSql(
        `INSERT INTO imgdiaries (title, body, imgdata)
        VALUES (?, ?, ?)`, [imgDiary.title, imgDiary.body, imgDiary.imgdata],
        (tx, res) => resolve(res),
        (tx, err) => reject(err)
      )
    })
  })
}

export const findAll = () => {
  return new Promise ((resolve, reject) => {
    db.transaction((transaction) => {
      transaction.executeSql(
        `SELECT * FROM imgdiaries`, [],
        (tx, res) => resolve(
          res.rows._array
          .map(imgDiary => new Todo(todo.id, todo.title, todo.completed === 1))
        ),
        (tx, err) => reject(err)
      )
    })
  })
}
import * as SQLite from 'expo-sqlite';
import ImgDiary from '../models/ImgDiary';


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

export const insert = (imgdiary) => {
  return new Promise((resolve, reject) => {
    db.transaction((transaction) => {
      transaction.executeSql(
        `INSERT INTO imgdiaries (title, body, imgdata)
        VALUES (?, ?, ?)`, [imgdiary.title, imgdiary.body, imgdiary.imgdata],
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
          .map(imgdiary => new ImgDiary(imgdiary.id, imgdiary.title, imgdiary.body, imgdiary.imgdata))
        ),
        (tx, err) => reject(err)
      )
    })
  })
}

export const deleteByID = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((transaction) => {
        transaction.executeSql(
            `DELETE FROM imgdiaries WHERE id = ?`, [id],
            (tx, res) => resolve(res),
            (tx, err) => reject(err)
        )
    })
  })
}

export const findLatestPost = () => {
  return new Promise((resolve, reject) => {
    db.transaction((transaction) => {
        transaction.executeSql(
            `SELECT * FROM imgdiaries WHERE id = (SELECT MAX(id) FROM imgdiaries)`, [],
            (tx, res) => resolve(
              res.rows._array
              .map(imgdiary => new ImgDiary(imgdiary.id, imgdiary.title, imgdiary.body, imgdiary.imgdata)
              )),
            (tx, err) => reject(err)
        )
    })
  })
}
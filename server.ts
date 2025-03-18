import express, { Express, Request, Response } from 'express';
import app from './src/app'

app.get('/', (_: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

const port = 3000;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
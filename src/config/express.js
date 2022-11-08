import expressObject from 'express'
import Router from 'express-promise-router'

export const [express, app] = [expressObject, expressObject()]
export const router = Router()

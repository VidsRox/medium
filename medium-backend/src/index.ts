import { Hono } from 'hono'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'
import { cors } from 'hono/cors'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
}>()

app.use('/*', cors())

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter)





export default app

//postgresql://medium%20db_owner:CMb73EGlOiIj@ep-proud-brook-a1aua2rc.ap-southeast-1.aws.neon.tech/medium%20db?sslmode=require

//DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiOTc2NjRmMTMtZmQ1NS00YWQxLWIyNzMtNmNiOTI3OGQzYmI0IiwidGVuYW50X2lkIjoiMDkyOGU2Mjk3ZDkxYzU2Njc3MTY0Y2U2ZmIxNDFmYjk0NjRkNGNiNTZjNzhlYWE3ZjZmNDY3ZDVmMDRlYjRhZCIsImludGVybmFsX3NlY3JldCI6ImYxNmIwN2FjLTE1NGYtNGU4MS04ZTE1LTZlMDY0NmU2ZGMyNyJ9.Pny2MDHEYgacghgH2gKiFKep4ob239c5S3cZne9rkfU"
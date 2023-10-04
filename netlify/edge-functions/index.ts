import { handle } from 'https://deno.land/x/hono@v3.7.2/adapter/netlify/mod.ts'
import { Hono } from 'https://deno.land/x/hono@v3.7.2/mod.ts'

const app = new Hono()

app.get('/',(c)=>{
  return c.html(`<h1 style='color:red;'>klpalace</h1>`)
})

app.get('/country', (c) => {
  return c.text('Hello Hono!')
})


export default handle(app)

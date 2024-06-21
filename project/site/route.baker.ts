export const layout = "layout.baker.html" // optional, but if used in any view, it is needed for correct builds

export const variables = {
  "dev": {
    title: "baker-template DEV"
  },
  "prod": {
    title: "baker-template PROD"
  }
}

export const routes = {
  "/": "index.html",
}

export const explore = [ "help/" ]
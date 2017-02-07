import tornado.ioloop
import tornado.web
import requests
from smartypants import smartypants
from readability import Document

STYLE = """
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="http://guidoism.github.io/bookfetish/equity-a.css">
<link rel="stylesheet" href="http://guidoism.github.io/bookfetish/webbook.css">
"""

class MainHandler(tornado.web.RequestHandler):
    def get(self):
      urls = self.get_query_arguments('url')
      if urls and len(urls) == 1:
        url = urls[0]
        doc = Document(requests.get(url).text)
        self.write(smartypants(doc.summary()))
        self.write(STYLE)
      else:
        self.write("Please provide ?url=[your-url]")

def make_app():
    return tornado.web.Application([
        (r"/", MainHandler),
    ])

if __name__ == "__main__":
    app = make_app()
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()

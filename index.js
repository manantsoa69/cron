import requests
import time

def check_website_status():
    urls = [
        'https://response-qqh1.onrender.com/',
        'https://serverchat-v3qr.onrender.com/'
    ]

    while True:
        for url in urls:
            try:
                response = requests.get(url)

                if response.status_code == 200:
                    print(f'{url} is active and accessible.')
                else:
                    print(f'{url} returned status code {response.status_code}. It may not be active.')
            except Exception as error:
                print('Error:', str(error))
                print(f'{url} is not active or there was an error.')

        # Sleep for 14 minutes (14 * 60 seconds)
        time.sleep(14 * 60)

if __name__ == "__main__":
    check_website_status()

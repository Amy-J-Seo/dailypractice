from urllib.request import urlopen
from bs4 import BeautifulSoup

html = urlopen('https://www.nhis.or.kr/nhis/policy/retrieveAssistingDevicesProductList.do')
# html = urlopen('https://www.naver.com')

bsObject = BeautifulSoup(html, 'html.parser')

print(bsObject)
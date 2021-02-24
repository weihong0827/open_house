import requests
from lxml.etree import HTML
response = requests.get('https://webgradients.com/')
html = HTML(response.content)
color = html.xpath('.//button[@class="gradient__copy_button js-copy-css js-reach-goal"]/@data-full-screen-gradient')

result = []
for item in color:
    result.append(item.strip(';').split(':')[1].strip())

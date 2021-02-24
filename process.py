import pandas as pd
import json
import requests
from lxml.etree import HTML

#getting transition colors
response = requests.get('https://webgradients.com/')
html = HTML(response.content)
color = html.xpath('.//button[@class="gradient__copy_button js-copy-css js-reach-goal"]/@data-full-screen-gradient')

result = []
for item in color:
    result.append(item.strip(';').split(':')[1].strip())


info = pd.read_excel ('Fifth Row Directory Page Index(1-55).xls')
info.fillna('',inplace=True)
print(info)
fifthrow = {}
art = []
sports = []
specialist = []
for i in range(len(info.index)):
    dic = {}
    dic['club_name'] = info.loc[i][6]
    dic['President\'s Name'] = info.loc[i][7]
    tele = 'https://t.me/' + info.loc[i][8].replace('@','')
    print(tele)
    dic['President\'s Telegram Handle'] = tele
    dic['email'] = info.loc[i][10]
    dic['Club Description'] = info.loc[i][11]
    dic['schedule'] = info.loc[i][12]
    if info.loc[i][13]:
        ig = 'https://instagram.com/'+info.loc[i][13].replace('@','').strip()
    else:
        ig = ''
    print(ig)
    dic['ig'] = ig

    dic['facebook'] = info.loc[i][14]
    dic['color'] = result[i]
    dic['Other'] = info.loc[i][15]
    if info.loc[i][9] == 'Specialists':
        specialist.append(dic)
    elif info.loc[i][9] == 'Sports':
        sports.append(dic)
    else:
        art.append(dic)
print(len(dic),len(specialist),len(sports),len(art))
print(type(json.dumps(dic)))
f = open('./src/details/specialist.json','w')
f.write(json.dumps(specialist,indent=4))
f.close()
f = open('./src/details/sports.json','w')
f.write(json.dumps(sports,indent=4))
f.close()
f = open('./src/details/art.json','w')
f.write(json.dumps(art,indent=4))
f.close()
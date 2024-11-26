import json

import requests
from bs4 import BeautifulSoup

# 爬取目標網址
url = "https://www.sushiexpress.com.tw/sushi-express/Menu"
response = requests.get(url)
soup = BeautifulSoup(response.content, "html.parser")

# 定義分類及其對應的 section ID
categories = {
    "握壽司": "section_Nigiri",
    "軍艦壽司": "section_Gunkan",
    "生魚片": "section_Sashimi",
    "卷類": "section_Makimono",
    "小菜": "section_Appetizer",
    "飲品/甜點": "section_Drinks＆Desserts",
    "嚴選商品": "section_SpecialSelection",
    "外帶餐盒": "Special Selection",
}

menu_items = []

# 遍歷每個分類並提取數據
for category_name, section_id in categories.items():
    section = soup.select_one(f"#{section_id}")
    if section:
        for item in section.select("div.grid-item"):  # 每個菜品包裹在 div.grid-item 中
            img_url = (
                f'https://www.sushiexpress.com.tw{item.select_one("img")["src"]}'
                if item.select_one("img")
                else None
            )
            name = (
                item.select_one("p.product_name").contents[0].strip()
                if item.select_one("p.product_name")
                else None
            )
            name_en = (
                item.select_one("span.product_name_en").text.strip()
                if item.select_one("span.product_name_en")
                else None
            )
            price = (
                item.select_one("span.product_name_jp").text.strip()
                if item.select_one("span.product_name_jp")
                else None
            )

            # 添加分類信息
            menu_items.append(
                {
                    "category": category_name,
                    "image": img_url,
                    "name": name,
                    "name_en": name_en,
                    "price": price,
                }
            )

# 將數據保存為 JSON
output_file = "../static/data/menu.json"
with open(output_file, "w", encoding="utf-8") as f:
    json.dump(menu_items, f, ensure_ascii=False, indent=4)

print(f"菜單已成功匯出至 {output_file}")

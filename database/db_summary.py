import sqlite3

conn = sqlite3.connect("database.db")
c = conn.cursor()

for i in c.execute("SELECT * FROM companies;"):
    print(i)

conn.close()
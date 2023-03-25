import cssmin
import sys

path = "../dist/styles/"

def minify(file):
    output = cssmin.cssmin(open(path + file).read())
    # print(output)
    with open(path + file[0:file.index(".")]+".min.css", "w") as f:
        # print("./static/" + file[0:file.index(".")]+".min.css", "w")
        f.write(output)

minify(sys.argv[1])
print(path + sys.argv[1][0:sys.argv[1].index(".")]+".min.css" + " produced")


from PIL import Image

def make_transparent(img_path, out_path):
    img = Image.open(img_path).convert("RGBA")
    datas = img.getdata()
    
    new_data = []
    for item in datas:
        # Calculate grayscale intensity
        r, g, b, a = item
        intensity = max(r, g, b)
        
        # If the pixel is very dark, make it transparent
        if intensity < 20:
            new_data.append((r, g, b, 0))
        elif intensity < 100:
            # Smoothly transition alpha
            alpha = int((intensity - 20) / 80 * 255)
            new_data.append((r, g, b, alpha))
        else:
            new_data.append((r, g, b, 255))
            
    img.putdata(new_data)
    img.save(out_path, "PNG")

make_transparent("/Users/enes/Projects/Portfolio_Neu/public/logo-new.png", "/Users/enes/Projects/Portfolio_Neu/public/logo-transparent.png")

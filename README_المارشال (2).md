# المارشال — Bezrah Product Reference

> **الهدف:** ملف مرجعي لأسماء المنتجات والتصنيفات وربط كل صورة داخل `frontend/public/images/products/` بالاسم الصحيح، مع أسعار **Bezrah Price List — May 2026 — USA** الظاهرة في الصور المرفقة.
>
> **مهم:** الأسعار التالية هي أسعار FOB بالدولار الأمريكي حسب نوع العبوة/الوزن. لا تستخدم سعرًا واحدًا عشوائيًا لكل صورة إذا كان المنتج له أكثر من مقاس أو عبوة. لا يتم تعديل قاعدة بيانات PostgreSQL اعتمادًا على هذا الملف قبل المراجعة.

---

## 1. مصدر الصور

المسار الأساسي:

```text
frontend/public/images/products/
```

نمط الصور:

```text
product-1 ... product-44
```

---

## 2. تصنيفات المنتجات

- `Fresh / Pickled Olives`
- `Fresh / Pickled Peppers`
- `Frozen IQF`
- `Unverified / Needs Manual Confirmation`

---

## 3. ربط الصور بالأسماء الصحيحة

### A) صور الزيتون — Olives

| Image | Correct Product Name | Category |
|---|---|---|
| `product-5` | Whole Green Olives — **visual match needs confirmation** | Fresh / Pickled Olives |
| `product-15` | Whole Black Olives — **visual match needs confirmation** | Fresh / Pickled Olives |
| `product-17` | Whole Black Olives | Fresh / Pickled Olives |
| `product-20` | Whole Green Olives | Fresh / Pickled Olives |
| `product-29` | Sliced Green Olives | Fresh / Pickled Olives |
| `product-30` | Whole Green Olives | Fresh / Pickled Olives |
| `product-35` | Pitted Black Olives | Fresh / Pickled Olives |
| `product-43` | Sliced Black Olives | Fresh / Pickled Olives |

### B) صور الفلفل — Peppers

| Image | Correct Product Name | Category |
|---|---|---|
| `product-6` | Green Jalapeño — **visual match needs confirmation** | Fresh / Pickled Peppers |
| `product-8` | Green Jalapeño / Pepper — **confirm exact type** | Fresh / Pickled Peppers |
| `product-10` | Green Jalapeño / Pepper — **confirm exact type** | Fresh / Pickled Peppers |
| `product-23` | Sliced Lombardi Pepper | Fresh / Pickled Peppers |
| `product-26` | Banana Pepper | Fresh / Pickled Peppers |
| `product-27` | Sliced Green Jalapeño | Fresh / Pickled Peppers |
| `product-28` | Red Jalapeño | Fresh / Pickled Peppers |
| `product-32` | Sweet Kardola Pepper | Fresh / Pickled Peppers |
| `product-33` | Sweet Cherry Pepper | Fresh / Pickled Peppers |
| `product-36` | Green Pepper — **confirm exact type** | Fresh / Pickled Peppers |
| `product-40` | Pepperoncini Pepper | Fresh / Pickled Peppers |

### C) صور الخضروات والفاكهة المجمدة — Frozen IQF

| Image | Correct Product Name | Category |
|---|---|---|
| `product-2` | Molokhia — **visual match needs confirmation** | Frozen IQF |
| `product-3` | Spinach | Frozen IQF |
| `product-7` | Cauliflower | Frozen IQF |
| `product-9` | Peach | Frozen IQF |
| `product-11` | Sweet Corn — **visual match needs confirmation** | Frozen IQF |
| `product-12` | Mango | Frozen IQF |
| `product-13` | Broccoli | Frozen IQF |
| `product-14` | Sweet Corn | Frozen IQF |
| `product-16` | Strawberry | Frozen IQF |
| `product-18` | Mango | Frozen IQF |
| `product-19` | Green Beans | Frozen IQF |
| `product-21` | Spinach | Frozen IQF |
| `product-22` | Cauliflower | Frozen IQF |
| `product-24` | Brussels Sprouts — **not shown as a named item in the supplied screenshots** | Unverified |
| `product-25` | Bell Peppers | Frozen IQF |
| `product-31` | Sweet Corn | Frozen IQF |
| `product-34` | Okra | Frozen IQF |
| `product-37` | Peas | Frozen IQF |
| `product-38` | Peach | Frozen IQF |
| `product-39` | Artichokes | Frozen IQF |
| `product-41` | Strawberry | Frozen IQF |
| `product-42` | Broccoli | Frozen IQF |
| `product-44` | Molokhia | Frozen IQF |

### D) صور تحتاج مراجعة يدوية

| Image | Reason |
|---|---|
| `product-1` | شكل الصورة يشبه قرن بازلاء/فلفل، ولا يمكن تأكيد الاسم من السعر وحده |
| `product-4` | صورة تشبه باذنجان، والاسم غير ظاهر ضمن صفحات السعر المرفقة |
| `product-5` | صورة زيتونة مفردة؛ يجب التأكد هل هي Whole Green Olives |
| `product-6` | يجب التأكد هل هي Green Jalapeño أم نوع فلفل آخر |
| `product-8` | يجب التأكد من نوع الفلفل |
| `product-10` | يجب التأكد من نوع الفلفل |
| `product-15` | صورة زيتونة مفردة؛ يجب التأكد هل هي Whole Black Olives |
| `product-24` | الصورة تبدو Brussels Sprouts، لكنها غير ظاهرة باسم صريح في صفحات السعر المرفقة |
| `product-36` | يجب التأكد من النوع النهائي قبل إدخاله في قاعدة البيانات |

> **قاعدة مهمة:** لا يتم تحويل العناصر التي عليها `needs confirmation` إلى بيانات نهائية في قاعدة البيانات قبل مراجعة الصورة الأصلية أو ملف الأسعار الكامل.

---

# 4. الأسعار المرجعية — Fresh / Pickled Olives

> جميع الأسعار بالدولار الأمريكي. الأعمدة الأساسية: `Items/Carton`, `Cartons/Container 20ft`, `Packaging`, `Price FOB/Carton`.

## 4.1 Whole Green Olives

| Items/Carton | Cartons/20ft | Packaging | Price FOB/Carton |
|---:|---:|---|---:|
| 6 | 1007 | Tins A10 | $29.41 |
| 3 | 1500 | Tins A12 | $21.11 |
| 12 | 5000 | Cans 400g | $10.87 |
| 12 | 5400 | Cans 280g | $6.91 |
| 12 | 2000 | Jars 720g | $16.63 |
| 12 | 3200 | Jars 450g | $14.07 |
| 12 | 3600 | Jars 370g | $10.23 |
| 24 | 3200 | Jars 200g | $12.79 |

## 4.2 Pitted Green Olives

| Items/Carton | Cartons/20ft | Packaging | Price FOB/Carton |
|---:|---:|---|---:|
| 6 | 1007 | Tins A10 | $30.06 |
| 3 | 1500 | Tins A12 | $21.11 |
| 12 | 5000 | Cans 400g | $10.87 |
| 12 | 5400 | Cans 280g | $6.91 |
| 12 | 2000 | Jars 720g | $16.63 |
| 12 | 3200 | Jars 450g | $14.07 |
| 12 | 3600 | Jars 370g | $8.80 |
| 24 | 3200 | Jars 200g | $11.00 |

## 4.3 Sliced Green Olives

| Items/Carton | Cartons/20ft | Packaging | Price FOB/Carton |
|---:|---:|---|---:|
| 6 | 1007 | Tins A10 | $30.06 |
| 3 | 1500 | Tins A12 | $21.11 |
| 12 | 5000 | Cans 400g | $10.87 |
| 12 | 5400 | Cans 280g | $6.91 |
| 12 | 2000 | Jars 720g | $16.63 |
| 12 | 3200 | Jars 450g | $14.07 |
| 12 | 3600 | Jars 370g | $8.00 |
| 24 | 3200 | Jars 200g | $10.00 |

## 4.4 Whole Black Olives

| Items/Carton | Cartons/20ft | Packaging | Price FOB/Carton |
|---:|---:|---|---:|
| 6 | 1007 | Tins A10 | $29.41 |
| 3 | 1500 | Tins A12 | $21.11 |
| 12 | 5000 | Cans 400g | $10.87 |
| 12 | 5400 | Cans 280g | $6.91 |
| 12 | 2000 | Jars 720g | $16.63 |
| 12 | 3200 | Jars 450g | $14.07 |
| 12 | 3600 | Jars 370g | $10.23 |
| 24 | 3200 | Jars 200g | $11.63 |

## 4.5 Pitted Black Olives

| Items/Carton | Cartons/20ft | Packaging | Price FOB/Carton |
|---:|---:|---|---:|
| 6 | 1007 | Tins A10 | $25.85 |
| 3 | 1500 | Tins A12 | $18.15 |
| 12 | 5000 | Cans 400g | $9.35 |
| 12 | 5400 | Cans 280g | $5.94 |
| 12 | 2000 | Jars 720g | $14.30 |
| 12 | 3200 | Jars 450g | $12.10 |
| 12 | 3600 | Jars 370g | $10.23 |
| 24 | 3200 | Jars 200g | $12.79 |

## 4.6 Sliced Black Olives

| Items/Carton | Cartons/20ft | Packaging | Price FOB/Carton |
|---:|---:|---|---:|
| 6 | 1007 | Tins A10 | $25.85 |
| 3 | 1500 | Tins A12 | $18.15 |
| 12 | 5000 | Cans 400g | $9.35 |
| 12 | 5400 | Cans 280g | $5.94 |
| 12 | 2000 | Jars 720g | $14.30 |
| 12 | 3200 | Jars 450g | $11.00 |
| 12 | 3600 | Jars 370g | $8.00 |
| 24 | 3200 | Jars 200g | $10.00 |

---

# 5. الأسعار المرجعية — Fresh / Pickled Peppers

## 5.1 Green Jalapeño

| Items/Carton | Cartons/20ft | Packaging | Price FOB/Carton |
|---:|---:|---|---:|
| 12 | 2000 | Jars 720g | $13.11 |
| 12 | 3200 | Jars 480g | $10.16 |
| 12 | 3600 | Jars 370g | $6.71 |
| 6 | 855 | PET Plastic | $11.52 |
| 4 | 1070 | PET Plastic | $10.87 |

## 5.2 Red Jalapeño

| Items/Carton | Cartons/20ft | Packaging | Price FOB/Carton |
|---:|---:|---|---:|
| 6 | 1007 | Tins A10 | $16.63 |
| 12 | 2000 | Jars 720g | $15.03 |
| 12 | 3200 | Jars 480g | $12.79 |
| 12 | 3600 | Jars 370g | $7.56 |
| 4 | 1070 | PET Plastic | $11.63 |

## 5.3 Banana Pepper

| Items/Carton | Cartons/20ft | Packaging | Price FOB/Carton |
|---:|---:|---|---:|
| 6 | 1007 | Tins A10 | $13.66 |
| 12 | 2000 | Jars 720g | $12.21 |
| 12 | 3200 | Jars 480g | $9.53 |
| 12 | 3600 | Jars 370g | $6.05 |
| 4 | 1070 | PET Plastic | $9.63 |

## 5.4 Pepperoncini Pepper

| Items/Carton | Cartons/20ft | Packaging | Price FOB/Carton |
|---:|---:|---|---:|
| 6 | 1007 | Tins A10 | $12.93 |
| 12 | 2000 | Jars 720g | $11.55 |
| 12 | 3200 | Jars 480g | $9.02 |
| 12 | 3600 | Jars 370g | $7.04 |
| 4 | 1070 | PET Plastic | $11.19 |

## 5.5 Sweet Cherry Pepper

| Items/Carton | Cartons/20ft | Packaging | Price FOB/Carton |
|---:|---:|---|---:|
| 6 | 1007 | Tins A10 | $31.46 |
| 3 | 1500 | Tins A12 | $25.71 |
| 12 | 3600 | Jars 370g | $14.07 |

## 5.6 Sweet Kardola Pepper

| Items/Carton | Cartons/20ft | Packaging | Price FOB/Carton |
|---:|---:|---|---:|
| 6 | 1007 | Tins A10 | $31.46 |
| 3 | 1500 | Tins A12 | $25.71 |
| 12 | 3600 | Jars 370g | $14.07 |

## 5.7 Sliced Lombardi Pepper

| Items/Carton | Cartons/20ft | Packaging | Price FOB/Carton |
|---:|---:|---|---:|
| 3 | 1500 | Tins A12 | $18.61 |

---

# 6. الأسعار المرجعية — Frozen IQF

> جميع المنتجات المجمدة في عبوة `Carton bulk` بوزن `10 kg`، ما لم يذكر خلاف ذلك. السعر هو `Price FOB / Carton`.

| Image / Product | Cartons/40ft | Packaging | Weight | Price |
|---|---:|---|---|---:|
| Molokhia | 2500 | Carton bulk | 10 kg | $1023.25 |
| Spinach | 2500 | Carton bulk | 10 kg | On request |
| Artichokes | 2500 | Carton bulk | 10 kg | $1087.21 |
| Sweet Corn | 2500 | Carton bulk | 10 kg | $1790.70 |
| Okra | 2500 | Carton bulk | 10 kg | $1279.07 |
| Peas | 2500 | Carton bulk | 10 kg | On request |
| Cauliflower | 1800 | Carton bulk | 10 kg | $1087.21 |
| Broccoli | 1800 | Carton bulk | 10 kg | $1215.12 |
| Green Beans | 2500 | Carton bulk | 10 kg | $1151.16 |
| Mango | 2500 | Carton bulk | 10 kg | $1918.61 |
| Strawberry | 2500 | Carton bulk | 10 kg | $1279.07 |
| Bell Peppers | 2500 | Carton bulk | 10 kg | On request |
| Peach | 2500 | Carton bulk | 10 kg | On request |

---

# 7. قواعد تنفيذ مهمة للـ Agent

## لا تفعل

- لا تحذف أي صورة من `frontend/public/images/products/`.
- لا تغيّر أو تحذف أي جدول أو سجل في PostgreSQL.
- لا تعمل migration أو seed أو update على قاعدة البيانات بدون موافقة صريحة.
- لا تستخدم أسماء مثل `Product 1` أو `Vegetable Product` بدل الاسم الحقيقي.
- لا تضع سعرًا افتراضيًا إذا كانت القيمة في المرجع `On request`.
- لا تخلط بين `Price FOB / Carton` و`Price FOB / Piece`.
- لا تربط صورة بمنتج مختلف لمجرد أن اللون متشابه.

## افعل

1. اقرأ جميع الملفات الموجودة في:
   ```text
   frontend/public/images/products/
   ```
2. أنشئ mapping واضحًا:
   ```json
   {
     "image": "product-17",
     "name": "Whole Black Olives",
     "category": "Fresh / Pickled Olives",
     "price_source": "Bezrah Price List May 2026",
     "verification_status": "verified_from_visual_reference"
   }
   ```
3. استخدم الصور الفعلية من المجلد، ولا تنشئ صورًا وهمية.
4. افصل المنتجات المجمدة `Frozen IQF` عن الزيتون والفلفل.
5. إذا كان للمنتج أكثر من عبوة، خزّن الأسعار كـ variants بدل استبدالها بسعر واحد.
6. أي عنصر غير مؤكد يجب أن يكون:
   ```text
   verification_status: needs_manual_confirmation
   ```
7. اعرض المنتجات في الواجهة من مصدر بيانات واحد واضح، مع الحفاظ على منطق المشروع الحالي.
8. قبل أي تعديل، خذ نسخة احتياطية من الملفات التي سيتم تعديلها.
9. بعد التنفيذ، اختبر:
   - اسم المنتج
   - الصورة المرتبطة
   - التصنيف
   - السعر
   - العبوة
   - عرض المنتج على Desktop وMobile
   - عدم وجود أخطاء في Console أو Network

---

# 8. ملاحظات الدقة

- هذا الملف مبني على صور قائمة الأسعار وصورة مجلد المنتجات المرفقة في المحادثة.
- بعض الصور الصغيرة القديمة لا يمكن تأكيد اسمها بنسبة 100% من الصورة وحدها؛ لذلك تم تعليمها بوضوح بدل اختلاق بيانات.
- يجب اعتبار قائمة الأسعار الأصلية الكاملة هي المرجع النهائي عند توفر الملف الأصلي القابل للقراءة.
- لا يتم اعتبار هذا الملف تصريحًا لتعديل PostgreSQL؛ هو **مرجع للقراءة والمراجعة والمطابقة فقط**.

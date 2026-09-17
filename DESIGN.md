# Design System

เอกสารนี้เป็น source of truth เป้าหมายคือให้ทุกหน้าดู **ชัดเจน เป็นมืออาชีพ ทันสมัย และพร้อมต่อยอด** โดยไม่กลายเป็น UI ที่เย็นหรือเป็น template สำเร็จรูปเกินไป

## 1. Design direction

### บุคลิก

- **Business-first** — สื่อสารผลลัพธ์ทางธุรกิจก่อนศัพท์เทคนิค
- **Precise** — โครงสร้างเป็นระเบียบ เส้นและระยะไม่ฟุ่มเฟือย
- **Approachable** — ใช้พื้นสีอ่อน มุมโค้ง และภาษาไทยที่เป็นธรรมชาติ
- **Future-ready** — ใช้สีน้ำเงินเป็น accent สำหรับ AI/data เท่านั้น ไม่ใช้ครอบทั้งหน้า

### ภาษาภาพ

- พื้นหน้าหลักเป็น blue-gray อ่อน มี white surface วางซ้อนเป็น section card
- สีดำ/ink เป็น primary action และหัวเรื่อง เพื่อสร้างลำดับสายตาที่ชัด
- สีฟ้าใช้เน้นข้อมูล เทคโนโลยี AI ลิงก์ หรือสถานะ ไม่ใช้แทน CTA หลัก
- ใช้ border บางและ shadow นุ่ม หลีกเลี่ยง glassmorphism หนักหรือ gradient สีจัด
- รูปไอคอนเป็น outline SVG จาก Lucide ขนาดและ stroke สม่ำเสมอ ห้ามใช้ emoji เป็นไอคอน UI

## 2. Design tokens

ค่าที่ใช้งานจริงประกาศไว้ใน `src/app/globals.css` และ expose ผ่าน Tailwind theme เช่น `bg-background`, `text-muted-foreground`, `bg-surface-subtle`, `shadow-soft`

### Color roles

| Token               | ค่าอ้างอิง | หน้าที่                               | ห้ามใช้                                |
| ------------------- | ---------: | ------------------------------------- | -------------------------------------- |
| `background`        |  `#F4F7F9` | พื้น canvas ของหน้า                   | เป็นพื้น card ที่ต้องแยกชั้น           |
| `foreground`        |  `#151719` | หัวเรื่อง ข้อความสำคัญ primary CTA    | ข้อความรองทั้งหน้า                     |
| `card` / `popover`  |  `#FFFFFF` | section, card, menu, dialog           | สร้าง section ซ้อนหลายชั้นโดยไม่จำเป็น |
| `primary`           |  `#191B1D` | CTA หลักและ control ที่ต้องเด่นที่สุด | ใช้กับหลายปุ่มใน viewport เดียวกัน     |
| `secondary`         |  `#EDF2F5` | action รอง, tag, icon well            | action หลัก                            |
| `muted`             |  `#EEF2F4` | พื้นข้อมูลรองและ hover                | ข้อความ                                |
| `muted-foreground`  |  `#66717D` | body รอง, metadata, helper text       | heading หรือข้อความสำคัญ               |
| `accent`            |  `#EAF2FF` | AI/data highlight, selected state     | section ใหญ่หรือ CTA หลัก              |
| `accent-foreground` |  `#2459A9` | icon/link บน accent                   | body copy ยาว                          |
| `border`            |  `#DCE3E8` | ขอบ card, input, divider              | ทำเส้นหนากว่า 1px โดยไม่มีเหตุผล       |
| `ring`              |  `#4D7FD1` | keyboard focus                        | decoration                             |
| `success`           |  `#168A4A` | แนวโน้มบวกและ success state           | ข้อความทั่วไป                          |
| `warning`           |  `#B25E09` | warning ที่แก้ไขได้                   | destructive state                      |
| `destructive`       |  `#C43D3D` | ลบ/ความผิดพลาดร้ายแรง                 | CTA ทางธุรกิจ                          |

กฎ contrast: body text ต้องผ่าน WCAG AA อย่างน้อย 4.5:1 และ UI/large text อย่างน้อย 3:1 อย่าวาง `muted-foreground` บนพื้นสีเข้ม

### Typography

ฟอนต์หลักคือ **Noto Sans Thai** ผ่าน `next/font` เพื่อให้ไทย/อังกฤษมีน้ำหนักและ baseline ใกล้กัน

| Role    | Mobile | Desktop |  Weight | Line height | ใช้กับ                                  |
| ------- | -----: | ------: | ------: | ----------: | --------------------------------------- |
| Display |   40px |    64px |     700 |        1.08 | Hero headline เท่านั้น                  |
| H1      |   36px |    52px |     700 |        1.12 | หัวหน้าหลักของหน้า                      |
| H2      |   30px |    40px |     700 |         1.2 | หัว section                             |
| H3      |   22px |    26px |     600 |         1.3 | หัว card/กลุ่มข้อมูล                    |
| Lead    |   18px |    20px |     400 |        1.65 | คำอธิบาย hero                           |
| Body    |   16px |    16px |     400 |        1.65 | เนื้อหาหลัก                             |
| Small   |   14px |    14px | 400–500 |         1.5 | metadata/helper                         |
| Label   |   12px |    12px |     600 |         1.4 | eyebrow, badge; letter spacing `0.14em` |

- ความยาวบรรทัด body ที่อ่านต่อเนื่องไม่เกิน `65ch`; lead ไม่เกิน `58ch`
- ภาษาไทยไม่ใช้ tracking ติดลบมากกว่า `-0.02em`; label ภาษาอังกฤษใช้ uppercase ได้ แต่ภาษาไทยไม่บังคับ uppercase
- Heading ใช้ประโยคสั้น 1–3 บรรทัดและขึ้นต้นด้วยผลลัพธ์ที่ลูกค้าจะได้

### Spacing

ใช้ระบบฐาน 4px และเลือกจากชุดนี้เท่านั้น

| Token |  ค่า | การใช้งาน                                 |
| ----- | ---: | ----------------------------------------- |
| `1`   |  4px | ระยะภายใน icon/รายละเอียดจิ๋ว             |
| `2`   |  8px | icon กับ label, กลุ่มที่สัมพันธ์กันมาก    |
| `3`   | 12px | ระหว่าง title กับ supporting text         |
| `4`   | 16px | padding card ขนาดเล็ก, ช่องว่าง mobile    |
| `5`   | 20px | padding control/card มาตรฐาน              |
| `6`   | 24px | ระหว่างกลุ่มเนื้อหา, card mobile          |
| `8`   | 32px | card desktop, ระหว่าง heading กับ content |
| `10`  | 40px | ช่องว่างภายใน section ขนาดกลาง            |
| `12`  | 48px | section padding mobile                    |
| `16`  | 64px | section padding desktop                   |
| `20`  | 80px | ช่องว่างระหว่าง major sections            |
| `24`  | 96px | hero vertical padding desktop             |

กฎการเลือก: เริ่มจากความสัมพันธ์ของข้อมูล ไม่ใช่พื้นที่ว่างที่เหลืออยู่ ข้อมูลกลุ่มเดียวกันใช้ 8–16px, คนละกลุ่มใน component ใช้ 20–32px, คนละ section ใช้ 64–96px

### Layout

- Content container: `max-width: 1360px`, gutter `16px` mobile, `24px` tablet, `32px` desktop
- หน้า desktop ใช้ 12-column grid, gap `24px`; tablet 8 columns; mobile 4 columns
- Section surface ใช้ radius `24px`, padding `24px` mobile / `40–56px` desktop
- Hero desktop แบ่ง text/media ราว `5:7`; mobile เรียง text ก่อน media
- Breakpoints ที่ต้องตรวจอย่างน้อย: `375`, `768`, `1024`, `1440` px
- ห้ามเกิด horizontal scroll; media ทุกชิ้นต้องมีพื้นที่สำรองเพื่อลด layout shift

### Radius

| Token  |    ค่า | ใช้กับ                      |
| ------ | -----: | --------------------------- |
| `sm`   |    8px | badge, compact item         |
| `md`   |   10px | input, dropdown item        |
| `lg`   |   12px | control, small card         |
| `xl`   |   16px | card ทั่วไป                 |
| `2xl`  |   20px | feature card                |
| `3xl`  |   24px | section surface             |
| `full` | 9999px | CTA pill, avatar, icon well |

อย่าผสม radius เกิน 3 ระดับใน section เดียว

### Elevation

- `shadow-xs`: ยก control/menu item เล็กน้อย
- `shadow-soft`: card ที่ต้องแยกจาก canvas โดยไม่ดูเป็นกล่องลอย
- `shadow-float`: dropdown, popover และ floating insight card เท่านั้น
- Card ปกติใช้ border อย่างเดียวก่อนใช้ shadow; ห้ามใช้ shadow ดำเข้มหรือหลายชั้นกับทุก card

### Motion

- Fast `150ms`: hover, color, opacity
- Base `220ms`: button/card transform, menu item
- Slow `320ms`: popover/section reveal
- Easing มาตรฐาน `cubic-bezier(0.22, 1, 0.36, 1)`
- Animate เฉพาะ `transform` และ `opacity` เมื่อทำได้
- `prefers-reduced-motion: reduce` ต้องตัด animation/transition ที่ไม่จำเป็น

## 3. Component rules

### Button

- `default`: primary action สีดำ หนึ่งปุ่มต่อ section/viewport เช่น “คุยโปรเจกต์กับเรา”
- `outline`: secondary action เช่น “ดูโซลูชัน”; ต้องไม่เด่นเท่า primary
- `secondary`: utility action บนพื้นสว่าง
- `ghost`: navigation หรือ tertiary action
- `destructive`: การกระทำที่ลบ/ย้อนคืนไม่ได้เท่านั้น
- `link`: ลิงก์ในข้อความ ไม่ใช้แทน CTA หลัก
- `size="lg"` + `shape="pill"`: hero/final CTA
- ปุ่ม touch หลักสูงอย่างน้อย 44px; icon-only ต้องมี `aria-label`
- CTA copy ใช้คำกริยา + เป้าหมาย เช่น “เริ่มต้นโปรเจกต์”, “ดูโซลูชัน” หลีกเลี่ยง “คลิกที่นี่” หรือ “ตกลง”
- กลุ่ม CTA เรียง primary ก่อน secondary; mobile ให้เต็มความกว้างได้ แต่ desktop ไม่ควรยืดโดยไม่จำเป็น

### Card

- `variant="default"`: card เนื้อหาทั่วไป มี border
- `variant="subtle"`: feature/step ที่ต้องรวมกับพื้น section
- `variant="elevated"`: card สำคัญหรือ floating insight; จำกัดจำนวน
- `variant="inverse"`: CTA band หรือข้อความบนพื้น ink
- `size="sm"`: item สั้น, `default`: card ปกติ, `lg`: feature/section card
- ใช้ compound API (`CardHeader`, `CardTitle`, `CardContent`, `CardFooter`) เพื่อรักษาระยะอัตโนมัติ
- ทั้ง card clickable ได้เฉพาะเมื่อมีปลายทางเดียว และต้องมี hover/focus ที่เห็นชัด

### Navigation

- Header desktop สูงราว 72px; menu link มี hit area อย่างน้อย 44px
- แสดงเมนูหลักไม่เกิน 5–6 รายการ; “เข้าสู่ระบบ” เป็น outline/ghost และ CTA ติดต่อเป็น default
- Active page แสดงด้วยสี foreground และเส้น underline/indicator ไม่ใช้แค่สีอย่างเดียว
- Mobile เปลี่ยนเป็น menu trigger; ไม่บีบรายการ desktop ให้ล้นหรือเล็กกว่า 16px
- Dropdown ใช้ `shadow-float`, radius `16px`, padding 8px และข้อความอธิบายสั้น

### Separator

- ใช้แยกกลุ่มข้อมูลภายใน surface ไม่ใช้แทน whitespace
- ค่า default ใช้ `border`; `variant="strong"` ใช้เฉพาะ footer/major boundary; `variant="inverse"` ใช้บนพื้นเข้ม

### Icon well

- ใช้วงกลมหรือ rounded square ขนาด 40–48px บน `secondary`/`accent`
- ไอคอนทั่วไป 20–24px, stroke 1.75–2px
- AI/data ใช้ accent blue; business/process ใช้ foreground

## 4. Landing page composition

1. **Header** — brand, 4–6 navigation items, sign-in, primary contact CTA
2. **Hero** — eyebrow, outcome-led H1, lead, primary + secondary CTA, 3 proof points, product visual
3. **Process** — 3–4 ขั้นตอนจากโจทย์ธุรกิจสู่การต่อยอด AI
4. **Industry solutions** — grid ที่สแกนง่าย 2 columns mobile / 3–6 desktop
5. **Differentiators** — อธิบายว่า custom solution ต่างจากระบบสำเร็จรูปอย่างไร
6. **Final CTA** — inverse surface, ข้อความเดียว เป้าหมายเดียว ปุ่มเดียว
7. **Footer** — navigation, contact, legal; ไม่แย่งความเด่นจาก final CTA

Primary CTA ควรอยู่ใน header, hero และ final CTA โดยใช้ข้อความเดียวกันหรือเจตนาเดียวกันตลอดหน้า หลีกเลี่ยง CTA หลักหลายแบบ เช่น “สมัคร”, “ทดลอง”, “ติดต่อ”, “เริ่มฟรี” พร้อมกัน หาก funnel จริงมีเพียงการคุยโปรเจกต์

## 5. Content guidelines

- Voice: มั่นใจ ตรงประเด็น เป็นมนุษย์ และไม่โอ้อวด
- พูดถึงงานของลูกค้าและผลลัพธ์ก่อนเทคโนโลยี
- หนึ่ง card สื่อหนึ่งประเด็น; title 2–6 คำ, description ไม่เกิน 2–3 บรรทัด
- ใช้คำศัพท์เดิมทั้งหน้า เช่นเลือก “โซลูชัน” แล้วไม่สลับกับ “ระบบ” เมื่อหมายถึงสิ่งเดียวกัน
- ตัวเลข/claim ต้องมีบริบทหรือแหล่งที่มา หลีกเลี่ยง vanity metrics

ตัวอย่าง CTA ที่แนะนำ:

- Primary: “คุยโปรเจกต์กับเรา” / “เริ่มต้นโปรเจกต์”
- Secondary: “ดูโซลูชัน” / “ดูผลงาน”
- Link: “ดูรายละเอียด” / “อ่านกรณีศึกษา”

## 6. Accessibility and quality gate

ก่อนส่งทุกหน้า ต้องผ่านรายการนี้:

- ใช้ semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) และ heading ตามลำดับ
- ทุก interaction ใช้ keyboard ได้ และมี focus ring ที่เห็นชัด
- touch target สำคัญอย่างน้อย 44×44px
- รูปที่มีความหมายมี alt text; รูปตกแต่งใช้ alt ว่าง
- icon-only button มี accessible name
- สีไม่ใช่สัญญาณเพียงอย่างเดียวสำหรับ active/error/success
- รองรับ zoom 200% และข้อความไทยไม่ถูกตัด
- ตรวจ contrast, reduced motion, loading, empty, error และ disabled states
- ตรวจหน้าจอ 375/768/1024/1440px และไม่มี horizontal scroll

## 7. Implementation contract

- ห้าม hard-code สี hex ใน component/page; ใช้ semantic token
- ห้ามใช้ arbitrary spacing/radius หากค่าที่มีอยู่ตอบโจทย์
- เริ่มจาก primitive ใน `src/components/ui` และ compose ขึ้นเป็น section component
- page-specific style override ได้เมื่อมีเหตุผล แต่ต้องไม่เปลี่ยนความหมายของ semantic token
- เมื่อเพิ่ม token ใหม่ ให้บันทึก role และตัวอย่างการใช้ในเอกสารนี้ก่อน
- Light theme เป็นค่าอ้างอิงหลัก; dark theme ต้องคง semantic role เดิม ไม่ใช่เพียงกลับสีแบบกลไก

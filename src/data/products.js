const products = [
  {
    "slug": "graphite-powder",
    "name": "Graphite Powder",
    "category": "Graphite",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782739849/graphite-powder-used-in-industry-black-powder-with-isolated-white-background-and-copy-space_q6e7qm.webp",
    "tagline": "High-purity graphite for industrial lubrication & electrodes",
    "description": "Natural and synthetic graphite powder with carbon content ranging from 80–99.9%. Used in lubricants, batteries, foundry facings, and electrode manufacturing. Available in various mesh sizes as per buyer specification.",
    "specs": [
      "Carbon Content: 80–99.9%",
      "Mesh: 50–325+",
      "Moisture: <1%",
      "Ash Content: <5%"
    ],
    "applications": [
      "Lubricants",
      "Battery Anodes",
      "Foundry Coatings",
      "Brake Linings"
    ],
    "icon": "hexagon"
  },
  {
    "slug": "graphite-flakes",
    "name": "Graphite Flakes",
    "category": "Graphite",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782739878/80-natural-graphite-powder-500x500_gcuyjm.webp",
    "tagline": "Natural crystalline flake graphite for premium applications",
    "description": "Crystalline flake graphite sourced from high-grade deposits, suitable for expandable graphite, lithium-ion battery anodes, and refractory materials. Consistent purity and flake size distribution.",
    "specs": [
      "Carbon Content: 85–98%",
      "Flake Size: +50 to +100 mesh",
      "Sulphur: <0.1%"
    ],
    "applications": [
      "Expandable Graphite",
      "Li-ion Batteries",
      "Refractory Bricks",
      "Gaskets"
    ],
    "icon": "layers"
  },
  {
    "slug": "iron-ore",
    "name": "Iron Ore",
    "category": "Metals & Ores",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782739916/high-quality-iron-ore-texture-rich-red-brown-tones-showcasing-natural-mineral-patterns-industrial-raw-material-appeal-387638759_emsybj.webp",
    "tagline": "Consistent Fe-grade iron ore for steel production",
    "description": "High-quality iron ore lumps and fines with Fe content meeting steel plant requirements. Supplied in bulk with reliable grade consistency. Ideal for sponge iron and blast furnace operations.",
    "specs": [
      "Fe Content: 60–65%",
      "Silica: <5%",
      "Alumina: <3%",
      "Moisture: <8%"
    ],
    "applications": [
      "Blast Furnaces",
      "Sponge Iron Plants",
      "Pelletization"
    ],
    "icon": "cube"
  },
  {
    "slug": "manganese-ore",
    "name": "Manganese Ore",
    "category": "Metals & Ores",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782739955/manganese-ore-1587378799-5381110_dtdrfn.webp",
    "tagline": "Battery-grade and metallurgical manganese ore",
    "description": "Manganese ore lumps and fines for alloy steel, dry cell battery manufacture, and water treatment chemicals. Available in both metallurgical and chemical grades.",
    "specs": [
      "Mn Content: 30–48%",
      "Fe: <10%",
      "Size: 0–10mm / 10–40mm"
    ],
    "applications": [
      "Steel Alloys",
      "Dry Cell Batteries",
      "Water Treatment",
      "Fertilizers"
    ],
    "icon": "atom"
  },
  {
    "slug": "silica-sand",
    "name": "Silica Sand",
    "category": "Minerals",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782739978/Crystal-Silica-Sand_ierttk.webp",
    "tagline": "Industrial-grade silica sand for glass, casting & filtration",
    "description": "High-purity silica sand with controlled grain size for glass manufacturing, foundry casting, water filtration, and construction applications. Washed and dried grades available.",
    "specs": [
      "SiO₂: 98–99.5%",
      "Fe₂O₃: <0.05%",
      "AFS: 30–90",
      "Moisture: <0.2%"
    ],
    "applications": [
      "Glass Manufacturing",
      "Foundry Sand Casting",
      "Water Filtration",
      "Oil & Gas"
    ],
    "icon": "filter"
  },
  {
    "slug": "quartz-powder",
    "name": "Quartz Powder",
    "category": "Minerals",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782740002/quartz-powder_b7ll81.webp",
    "tagline": "High-whiteness quartz powder for ceramics and paints",
    "description": "Micronized quartz powder manufactured from selected vein quartz. Used in ceramics, paints, rubber, and epoxy flooring. Consistent brightness and low iron content.",
    "specs": [
      "SiO₂: 99%+",
      "Whiteness: 92–96%",
      "Mesh: 100–500",
      "Fe₂O₃: <0.02%"
    ],
    "applications": [
      "Ceramics",
      "Paints & Coatings",
      "Rubber Compounding",
      "Epoxy Flooring"
    ],
    "icon": "sparkles"
  },
  {
    "slug": "feldspar",
    "name": "Feldspar",
    "category": "Minerals",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782740031/potash-feldspar-chara-img_y97z4j.webp",
    "tagline": "Potash and sodium feldspar for ceramics and glass",
    "description": "Potash and sodium feldspar in powder and lumps for tile, sanitaryware, glass, and abrasive industries. Offers consistent alumina and alkali flux content for reliable kiln performance.",
    "specs": [
      "Al₂O₃: 16–20%",
      "K₂O+Na₂O: 10–14%",
      "Fe₂O₃: <0.15%",
      "Whiteness: 88%+"
    ],
    "applications": [
      "Ceramic Tiles",
      "Sanitaryware",
      "Glass Batches",
      "Abrasives"
    ],
    "icon": "gem"
  },
  {
    "slug": "bauxite",
    "name": "Bauxite",
    "category": "Minerals",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782740050/raw-bauxite-ore-pile-earthly-tones-mining-minerals-collection-340266693_ijs3xm.webp",
    "tagline": "Calcined and raw bauxite for refractories and alumina",
    "description": "High-alumina bauxite ore supplied as raw lumps or calcined refractory grade. Suitable for alumina refining, refractory bricks, abrasive wheels, and cement production.",
    "specs": [
      "Al₂O₃: 45–85%",
      "Fe₂O₃: <3%",
      "SiO₂: <6%",
      "TiO₂: <4%"
    ],
    "applications": [
      "Alumina Refining",
      "Refractory Bricks",
      "Abrasive Wheels",
      "Cement"
    ],
    "icon": "mountain"
  },
  {
    "slug": "limestone",
    "name": "Limestone",
    "category": "Minerals",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782740073/natural-white-limestone-rock-formation-with-rough-texture-photo_rtslsq.webp",
    "tagline": "Steel-grade and cement-grade limestone in bulk",
    "description": "High-calcium limestone lumps and powder for steel flux, cement raw material, and agriculture. Consistent CaCO₃ content with low sulphur for demanding metallurgical applications.",
    "specs": [
      "CaCO₃: 90–98%",
      "MgO: <1.5%",
      "SiO₂: <2%",
      "Sulphur: <0.05%"
    ],
    "applications": [
      "Steel Flux",
      "Cement Raw Mix",
      "Agriculture Lime",
      "Water Treatment"
    ],
    "icon": "building"
  },
  {
    "slug": "copper-scrap",
    "name": "Copper Scrap",
    "category": "Metal Scrap & Alloys",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782740093/save-environment-concept-bag-of-electrical-copper-waste-scrap-copper-wire-material-for-recycling-business-photo_rg3eyt.webp",
    "tagline": "Graded copper scrap for secondary smelting",
    "description": "Sourced and graded copper scrap (Birch/Cliff, Berry, Candy grades) for secondary copper smelters and brass mills. Clean, mixed, and insulated wire grades available on inquiry.",
    "specs": [
      "Purity: 95–99.9%",
      "Grade: Birch / Berry / Candy / Wire",
      "Form: Scrap / Turnings"
    ],
    "applications": [
      "Copper Smelting",
      "Brass Mills",
      "Wire Rod Plants",
      "Foundries"
    ],
    "icon": "zap"
  },
  {
    "slug": "aluminium-ingots",
    "name": "Aluminium Ingots",
    "category": "Metals & Ores",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782740110/stacked-ingots-in-aluminium-recycling-plant-warehouse-awaiting-delivery_udykac.webp",
    "tagline": "Secondary aluminium ingots for die casting",
    "description": "Secondary aluminium ingots produced to ADC-12, LM-2, LM-6, and custom alloy specifications. Suitable for automotive die casting, extrusions, and gravity casting applications.",
    "specs": [
      "Purity: 98.5–99.7%",
      "Alloy: ADC-12 / LM-6 / LM-24",
      "Weight: 5–15 kg/ingot"
    ],
    "applications": [
      "Automotive Die Casting",
      "Extrusions",
      "Gravity Casting",
      "Sheet Rolling"
    ],
    "icon": "package"
  },
  {
    "slug": "zinc-oxide",
    "name": "Zinc Oxide",
    "category": "Metals & Ores",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782740126/zinc-oxide-white-powder-used-as-fungus-growth-inhibitor-paints-antiseptic-ointment-medicine-223021691_csabxr.webp",
    "tagline": "Industrial and rubber-grade zinc oxide powder",
    "description": "White zinc oxide powder for rubber vulcanization, ceramics, paints, pharmaceuticals, and galvanizing. French process and American process grades available.",
    "specs": [
      "ZnO Purity: 99–99.7%",
      "Pb: <0.001%",
      "Surface Area: 4–10 m²/g"
    ],
    "applications": [
      "Rubber Vulcanization",
      "Paints & Coatings",
      "Ceramics",
      "Pharmaceuticals"
    ],
    "icon": "circle"
  },
  {
    "slug": "neodymium",
    "name": "Neodymium",
    "category": "Pure Elements",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782738072/imgbin-neodymium-magnet-craft-magnets-rare-earth-magnet-rare-earth-element-magnet-JxBcUTxqBxMA29rhiDemD5cdb_t_cazx3v.webp",
    "tagline": "Premium Neodymium",
    "description": "High-quality Neodymium for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "samarium",
    "name": "Samarium",
    "category": "Pure Elements",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782739333/Sm-Image.jpg-150x150_uammjp.jpg",
    "tagline": "Premium Samarium",
    "description": "High-quality Samarium for industrial applications.",
    "specs": [
      "Purity: TREM (Total Rare Earth Metals): ≥ 99.5 wt% & Samarium content (within TREM): ≥ 99.9 wt%",
      "Size: Solid pieces with the least dimension not less than 30 mm",
      "Appearance: Solid metallic pieces free from oxide scales/powder, metal fines, oil, grease, moisture, or any other surface contamination.",
      "Packing: 1 kg/ IREL approved quantity vacuum sealed aluminium foil packet shall be kept in an air tight argon gas filled plastic drums/metallic container free from rust."
    ],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "praseodymium",
    "name": "Praseodymium",
    "category": "Pure Elements",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782739187/raw-3_hhuzvl.png",
    "tagline": "Premium Praseodymium",
    "description": "High-quality Praseodymium for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "dysprosium",
    "name": "Dysprosium",
    "category": "Pure Elements",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782739195/raw-4_d9km7w.png",
    "tagline": "Premium Dysprosium",
    "description": "High-quality Dysprosium for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "terbium",
    "name": "Terbium",
    "category": "Pure Elements",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782739343/raw-5_bstijy.png",
    "tagline": "Premium Terbium",
    "description": "High-quality Terbium for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "hafnium-hf",
    "name": "Hafnium(Hf)",
    "category": "Pure Elements",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782739206/raw-6_ranye1.png",
    "tagline": "Premium Hafnium(Hf)",
    "description": "High-quality Hafnium(Hf) for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "titanium",
    "name": "Titanium",
    "category": "Pure Elements",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782739348/raw-7_wlkeq3.png",
    "tagline": "Premium Titanium",
    "description": "High-quality Titanium for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "vanadium",
    "name": "Vanadium",
    "category": "Pure Elements",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782739264/raw-8_nlim1p.png",
    "tagline": "Premium Vanadium",
    "description": "High-quality Vanadium for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "tantalum",
    "name": "Tantalum",
    "category": "Pure Elements",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782739353/raw-9_iqnfsq.png",
    "tagline": "Premium Tantalum",
    "description": "High-quality Tantalum for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "molybdenum",
    "name": "Molybdenum",
    "category": "Pure Elements",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782739282/1-4_s0w7xv.png",
    "tagline": "Premium Molybdenum",
    "description": "High-quality Molybdenum for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "cobalt-aluminate",
    "name": "Cobalt Aluminate",
    "category": "Chemicals",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782740317/H45868eadc14040029486050c9a473147y.jpg_300x300_lthg2u.webp",
    "tagline": "Premium Cobalt Aluminate",
    "description": "High-quality Cobalt Aluminate for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "toulene",
    "name": "Toulene",
    "category": "Chemicals",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782740344/selective-focus-toluene-liquid-chemical-260nw-1823800727_qnjttc.webp",
    "tagline": "Premium Toulene",
    "description": "High-quality Toulene for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "sodium-hydroxide",
    "name": "Sodium Hydroxide",
    "category": "Chemicals",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782740367/stock-photo-sodium-hydroxide-naoh-caustic-soda_md7vae.webp",
    "tagline": "Premium Sodium Hydroxide",
    "description": "High-quality Sodium Hydroxide for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "tabular-alumina",
    "name": "Tabular Alumina",
    "category": "Chemicals",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782740397/8-tabular-alumina_img01b_u1kuww.webp",
    "tagline": "Premium Tabular Alumina",
    "description": "High-quality Tabular Alumina for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "4-2-hydroxytradecyl-oxy-phenyl-phenliodonium-hexafluoroantimonate",
    "name": "4 - 2 - hydroxytradecyl oxy phenyl Phenliodonium Hexafluoroantimonate",
    "category": "Chemicals",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782740446/bottleimage_l6bfbu.webp",
    "tagline": "Premium 4 - 2 - hydroxytradecyl oxy phenyl Phenliodonium Hexafluoroantimonate",
    "description": "High-quality 4 - 2 - hydroxytradecyl oxy phenyl Phenliodonium Hexafluoroantimonate for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "hydrochloric-acid",
    "name": "Hydrochloric acid",
    "category": "Chemicals",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782740484/hydrochloric-acid-solution-chemical-structure-260nw-514894537_chzkk8.webp",
    "tagline": "Premium Hydrochloric acid",
    "description": "High-quality Hydrochloric acid for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "calcined-alumina",
    "name": "Calcined Alumina",
    "category": "Chemicals",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782740535/calcined-alumina-powder-300-mesh-250x250_j8k1p6.webp",
    "tagline": "Premium Calcined Alumina",
    "description": "High-quality Calcined Alumina for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "aluminium-based-alloys",
    "name": "Aluminium Based Alloys",
    "category": "Alloys",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782753031/Knowing-the-Different-Types-of-Aluminum-Alloys_fvymhq.webp",
    "tagline": "Premium Aluminium Based Alloys",
    "description": "High-quality Aluminium Based Alloys for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "nickel-based-alloy",
    "name": "Nickel based alloy",
    "category": "Alloys",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782753084/Nickel-based-Alloys-header-scaled-e1739169485284-1024x462_ihhco6.webp",
    "tagline": "Premium Nickel based alloy",
    "description": "High-quality Nickel based alloy for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "titanium-based-alloy",
    "name": "Titanium based alloy",
    "category": "Alloys",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782753152/titanium-alloy-bars_kh4cnq.webp",
    "tagline": "Premium Titanium based alloy",
    "description": "High-quality Titanium based alloy for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "fe-iron-based-alloy",
    "name": "Fe (Iron) based alloy",
    "category": "Alloys",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782753195/1686215507-normal-FE1721_mcqvow.webp",
    "tagline": "Premium Fe (Iron) based alloy",
    "description": "High-quality Fe (Iron) based alloy for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "nickel-based-alloy-single-crystal",
    "name": "Nickel based alloy (Single Crystal)",
    "category": "Alloys",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782753696/Niobium_and_niobium_alloy-HM-1_paits0.webp",
    "tagline": "Premium Nickel based alloy (Single Crystal)",
    "description": "High-quality Nickel based alloy (Single Crystal) for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "niobium-based-alloy",
    "name": "Niobium based alloy",
    "category": "Alloys",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782753863/1-240I11G13Y26_vigftz.webp",
    "tagline": "Premium Niobium based alloy",
    "description": "High-quality Niobium based alloy for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "tungsten-based-alloy",
    "name": "Tungsten based alloy",
    "category": "Alloys",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782753894/6509f4ef2c2043e728d1e6de_Depositphotos_225814402_l-2015-1024x684_yt1ccc.webp",
    "tagline": "Premium Tungsten based alloy",
    "description": "High-quality Tungsten based alloy for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "cobalt-based-alloy",
    "name": "Cobalt based alloy",
    "category": "Alloys",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782753927/Aluminum-zirconium_Al-Zr_Master_Alloy_p8w4ib.webp",
    "tagline": "Premium Cobalt based alloy",
    "description": "High-quality Cobalt based alloy for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "al-zr-ti-be-master-alloy",
    "name": "Al Zr Ti Be Master Alloy",
    "category": "Master Alloy",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782753927/Aluminum-zirconium_Al-Zr_Master_Alloy_p8w4ib.webp",
    "tagline": "Premium Al Zr Ti Be Master Alloy",
    "description": "High-quality Al Zr Ti Be Master Alloy for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "titanium-alloy-ti-6al-4v",
    "name": "Titanium alloy Ti-6Al-4V",
    "category": "Master Alloy",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782753962/ti-6al-4v-grade-5-titanium-alloy-500x500_xc0ogx.webp",
    "tagline": "Premium Titanium alloy Ti-6Al-4V",
    "description": "High-quality Titanium alloy Ti-6Al-4V for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "niobium-aluminum-master-alloy",
    "name": "Niobium aluminum master alloy",
    "category": "Master Alloy",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782753992/Aluminum_Niobium_Master_Alloy_e4ehnu.webp",
    "tagline": "Premium Niobium aluminum master alloy",
    "description": "High-quality Niobium aluminum master alloy for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "ferro-zirconium-master-alloy",
    "name": "Ferro zirconium master alloy",
    "category": "Master Alloy",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782754014/nickel-alloy-lumps_qdshgt.webp",
    "tagline": "Premium Ferro zirconium master alloy",
    "description": "High-quality Ferro zirconium master alloy for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "ferro-boron-master-alloy",
    "name": "Ferro boron master alloy",
    "category": "Master Alloy",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782754047/Ferro-niobium_master_alloy_tpfequ.webp",
    "tagline": "Premium Ferro boron master alloy",
    "description": "High-quality Ferro boron master alloy for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "zirconium-aluminum-master-alloy",
    "name": "Zirconium aluminum master alloy",
    "category": "Master Alloy",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782754082/Aluminum-zirconium_Al-Zr_Master_Alloy_c4rhnp.webp",
    "tagline": "Premium Zirconium aluminum master alloy",
    "description": "High-quality Zirconium aluminum master alloy for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "ferro-gellum-master-alloy",
    "name": "Ferro gellum master alloy",
    "category": "Master Alloy",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782754146/Ferro-niobium_master_alloy_bl7m0k.webp",
    "tagline": "Premium Ferro gellum master alloy",
    "description": "High-quality Ferro gellum master alloy for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "nickel-based-master-alloy",
    "name": "Nickel-based master alloy",
    "category": "Master Alloy",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782754177/master-alloys-with-nickel-silver-based-white-gold-500x500_rq6zku.webp",
    "tagline": "Premium Nickel-based master alloy",
    "description": "High-quality Nickel-based master alloy for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "nickel-boron-master-alloy",
    "name": "Nickel Boron Master Alloy",
    "category": "Master Alloy",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782754197/1728381278-NK4205_giyqir.webp",
    "tagline": "Premium Nickel Boron Master Alloy",
    "description": "High-quality Nickel Boron Master Alloy for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "aluminium-master-alloy",
    "name": "Aluminium Master Alloy",
    "category": "Master Alloy",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782754218/Aluminium-Master-Alloy_ddg22c.webp",
    "tagline": "Premium Aluminium Master Alloy",
    "description": "High-quality Aluminium Master Alloy for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "bni5",
    "name": "BNi5",
    "category": "Brazing Filler Alloys",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782754942/BNi-5-Brazing-Filler-Metal_bjxyhb.webp",
    "tagline": "Premium BNi5",
    "description": "High-quality BNi5 for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "bni10",
    "name": "Bni10",
    "category": "Brazing Filler Alloys",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782589409/natural-graphite-flakes-99-50-purity-500x500_lnaujw.webp",
    "tagline": "Premium Bni10",
    "description": "High-quality Bni10 for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "ticusil",
    "name": "TiCuSil",
    "category": "Brazing Filler Alloys",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782755079/Silver_Foil_Product_13_5eb5e6a4-5dc1-4575-ac54-42bcac2d88b5_160x160_dbvxyk.webp",
    "tagline": "Premium TiCuSil",
    "description": "High-quality TiCuSil for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "tisi",
    "name": "Tisi",
    "category": "Brazing Filler Alloys",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782755353/54f58fb16dbe191703adb00e17dd7645-300x236_geuvcm.webp",
    "tagline": "Premium Tisi",
    "description": "High-quality Tisi for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "c263",
    "name": "C263",
    "category": "Brazing Filler Alloys",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782755422/17-4PH-Stainless-Steel-Metal-Powder_dsbpg1.webp",
    "tagline": "Premium C263",
    "description": "High-quality C263 for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "bni-2",
    "name": "BNi-2",
    "category": "Brazing Filler Alloys",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782755422/17-4PH-Stainless-Steel-Metal-Powder_dsbpg1.webp",
    "tagline": "Premium BNi-2",
    "description": "High-quality BNi-2 for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "68ag-27cu-5ti",
    "name": "68Ag-27Cu-5Ti",
    "category": "Brazing Filler Alloys",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782589409/natural-graphite-flakes-99-50-purity-500x500_lnaujw.webp",
    "tagline": "Premium 68Ag-27Cu-5Ti",
    "description": "High-quality 68Ag-27Cu-5Ti for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "bvag8b",
    "name": "BVAg8b",
    "category": "Brazing Filler Alloys",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782755460/27064_213755145_v2wvy1.webp",
    "tagline": "Premium BVAg8b",
    "description": "High-quality BVAg8b for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "70ti-15cu-15ni",
    "name": "70Ti-15Cu-15NI",
    "category": "Brazing Filler Alloys",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782755508/Great-Quality-C71500-T71400-70cu-30ni-CuNi30-Cn106-Nickel-Alloy-Bar_cs5tbp.webp",
    "tagline": "Premium 70Ti-15Cu-15NI",
    "description": "High-quality 70Ti-15Cu-15NI for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "bco-01",
    "name": "BCo-01",
    "category": "Brazing Filler Alloys",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782755591/bco-005-ihc-tb-thumbnail_norgpn.webp",
    "tagline": "Premium BCo-01",
    "description": "High-quality BCo-01 for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "ams-4782",
    "name": "AMS 4782",
    "category": "Brazing Filler Alloys",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782755614/NickelPaste_kuwetl.webp",
    "tagline": "Premium AMS 4782",
    "description": "High-quality AMS 4782 for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "ams-4778",
    "name": "AMS 4778",
    "category": "Brazing Filler Alloys",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782755653/NickelStrip_qbxykv.webp",
    "tagline": "Premium AMS 4778",
    "description": "High-quality AMS 4778 for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "water-based-binders",
    "name": "Water Based Binders",
    "category": "Brazing Filler Alloys",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782755672/Basifon-WV-0010_jlx2sc.webp",
    "tagline": "Premium Water Based Binders",
    "description": "High-quality Water Based Binders for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "nicocraly-alloy-powder",
    "name": "NiCoCrAlY alloy powder",
    "category": "Thermal Spray Powders",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782756432/K403-powder-nickel-alloy-powder_oj2jab.webp",
    "tagline": "Premium NiCoCrAlY alloy powder",
    "description": "High-quality NiCoCrAlY alloy powder for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "cocraly-alloy-powder",
    "name": "CoCrAlY Alloy Powder",
    "category": "Thermal Spray Powders",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782756454/CoCr28Mo6-Powder_xnvuir.webp",
    "tagline": "Premium CoCrAlY Alloy Powder",
    "description": "High-quality CoCrAlY Alloy Powder for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "wc-wb-conicr-powder",
    "name": "WC-WB-CoNiCr powder",
    "category": "Thermal Spray Powders",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782756476/d0d3068457b1d65423991e40a2.jpg_95Q_sb1o6g.webp",
    "tagline": "Premium WC-WB-CoNiCr powder",
    "description": "High-quality WC-WB-CoNiCr powder for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "wc-12co-powder",
    "name": "WC-12Co powder",
    "category": "Thermal Spray Powders",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782756621/chromium-carbide-powder-cr3c2-cas-12012-35-0_zjejqi.webp",
    "tagline": "Premium WC-12Co powder",
    "description": "High-quality WC-12Co powder for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "wc-17co-powder",
    "name": "WC-17Co powder",
    "category": "Thermal Spray Powders",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782756562/c286f2672df4c2cc757974d80f.png_4e_360w_360h.src_95Q_vgybu1.webp",
    "tagline": "Premium WC-17Co powder",
    "description": "High-quality WC-17Co powder for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "wc-20cr3c2-7ni-powder",
    "name": "WC-20Cr3C2-7Ni powder",
    "category": "Thermal Spray Powders",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782589409/natural-graphite-flakes-99-50-purity-500x500_lnaujw.webp",
    "tagline": "Premium WC-20Cr3C2-7Ni powder",
    "description": "High-quality WC-20Cr3C2-7Ni powder for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "cr3c2-25nicr-powder",
    "name": "Cr3C2-25NiCr powder",
    "category": "Thermal Spray Powders",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782756621/chromium-carbide-powder-cr3c2-cas-12012-35-0_zjejqi.webp",
    "tagline": "Premium Cr3C2-25NiCr powder",
    "description": "High-quality Cr3C2-25NiCr powder for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "cr3c2-wc-25nicrco-powder",
    "name": "Cr3C2-WC-25NiCrCo powder",
    "category": "Thermal Spray Powders",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782756643/H90996dc042c64890b16a91fe2eb9014fK.jpg_300x300_abvj9f.webp",
    "tagline": "Premium Cr3C2-WC-25NiCrCo powder",
    "description": "High-quality Cr3C2-WC-25NiCrCo powder for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "wc-10co-4cr-powder",
    "name": "WC-10Co-4Cr powder",
    "category": "Thermal Spray Powders",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782756643/H90996dc042c64890b16a91fe2eb9014fK.jpg_300x300_abvj9f.webp",
    "tagline": "Premium WC-10Co-4Cr powder",
    "description": "High-quality WC-10Co-4Cr powder for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "silicon-nitride-powder",
    "name": "Silicon Nitride Powder",
    "category": "Thermal Spray Powders",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782756703/1678090693-normal-Silicon-Nitride-Powder_agni9o.webp",
    "tagline": "Premium Silicon Nitride Powder",
    "description": "High-quality Silicon Nitride Powder for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "lanthanum-oxides",
    "name": "Lanthanum oxides",
    "category": "Oxides",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782740557/1-2012241A943R0_rysn0b.webp",
    "tagline": "Premium Lanthanum oxides",
    "description": "High-quality Lanthanum oxides for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "aluminium-oxides",
    "name": "Aluminium Oxides",
    "category": "Oxides",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782740573/Aluminium-Oxide-sinter-tablet-1_mhtegr.webp",
    "tagline": "Premium Aluminium Oxides",
    "description": "High-quality Aluminium Oxides for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "zirconium-oxides",
    "name": "Zirconium Oxides",
    "category": "Oxides",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782740612/zirconium_oxide_powder_zy3qyt.webp",
    "tagline": "Premium Zirconium Oxides",
    "description": "High-quality Zirconium Oxides for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "yttrium-oxides",
    "name": "Yttrium Oxides",
    "category": "Oxides",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782740643/Yttrium-Oxide-300x226_ixlda9.webp",
    "tagline": "Premium Yttrium Oxides",
    "description": "High-quality Yttrium Oxides for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "cerium-oxides",
    "name": "Cerium Oxides",
    "category": "Oxides",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782740671/1670396805-normal-1509-nano-cerium-oxide_ym7l66.webp",
    "tagline": "Premium Cerium Oxides",
    "description": "High-quality Cerium Oxides for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "iron-oxides",
    "name": "Iron Oxides",
    "category": "Oxides",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782740687/%C3%82_Que-son-los-oxidos-de-hierro_yizoas.webp",
    "tagline": "Premium Iron Oxides",
    "description": "High-quality Iron Oxides for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "colloidal-silica",
    "name": "Colloidal Silica",
    "category": "Colloidal metal Oxides",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782740724/microtec-nano-colloidal-silica-500x500_igugrf.webp",
    "tagline": "Premium Colloidal Silica",
    "description": "High-quality Colloidal Silica for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "colloidal-yttria",
    "name": "Colloidal Yttria",
    "category": "Colloidal metal Oxides",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782740761/NPWS_Nyacol-032715-9312-scaled_fwvnj8.webp",
    "tagline": "Premium Colloidal Yttria",
    "description": "High-quality Colloidal Yttria for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "colloidal-zirconia",
    "name": "Colloidal Zirconia",
    "category": "Colloidal metal Oxides",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782740804/Zirconia-Ceramic-Powder-rcex37txjws903h63r11u1np15y1rt0fn4yvh7p7so_qtjoin.webp",
    "tagline": "Premium Colloidal Zirconia",
    "description": "High-quality Colloidal Zirconia for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "colloidal-alumina",
    "name": "Colloidal Alumina",
    "category": "Colloidal metal Oxides",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782740825/ALD-0103-01_e377c8cd-a65b-4074-a2a5-9f99d375dede_haxazo.webp",
    "tagline": "Premium Colloidal Alumina",
    "description": "High-quality Colloidal Alumina for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "in718",
    "name": "IN718",
    "category": "Additive Manufacturing Powders",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782589409/natural-graphite-flakes-99-50-purity-500x500_lnaujw.webp",
    "tagline": "Premium IN718",
    "description": "High-quality IN718 for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "ti-6al-4v",
    "name": "Ti-6Al-4V",
    "category": "Additive Manufacturing Powders",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782756731/27877d25thumbnail_mlotsr.webp",
    "tagline": "Premium Ti-6Al-4V",
    "description": "High-quality Ti-6Al-4V for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "ss-316l",
    "name": "SS 316L",
    "category": "Additive Manufacturing Powders",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782756750/1728456113-TA4848_fshoww.webp",
    "tagline": "Premium SS 316L",
    "description": "High-quality SS 316L for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "maraging-steel-m-300",
    "name": "Maraging Steel,M-300",
    "category": "Additive Manufacturing Powders",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782756945/metal-powder-2_qynsjr.webp",
    "tagline": "Premium Maraging Steel,M-300",
    "description": "High-quality Maraging Steel,M-300 for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "cmsx4",
    "name": "CMSX4",
    "category": "Additive Manufacturing Powders",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782589409/natural-graphite-flakes-99-50-purity-500x500_lnaujw.webp",
    "tagline": "Premium CMSX4",
    "description": "High-quality CMSX4 for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "c-103",
    "name": "C-103",
    "category": "Additive Manufacturing Powders",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782756970/cyclamen-aldehyde-1000x1000_pcjmau.webp",
    "tagline": "Premium C-103",
    "description": "High-quality C-103 for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "tial",
    "name": "TiAl",
    "category": "Additive Manufacturing Powders",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782757091/Alloy-Steel_c91dyg.webp",
    "tagline": "Premium TiAl",
    "description": "High-quality TiAl for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "cm247-lc",
    "name": "CM247 LC",
    "category": "Additive Manufacturing Powders",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782757126/incoloy_tube11_fp6tqg.webp",
    "tagline": "Premium CM247 LC",
    "description": "High-quality CM247 LC for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "hastelloy-x",
    "name": "Hastelloy X",
    "category": "Additive Manufacturing Powders",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782757148/u4156366724772035871fm224app112fJPEG_dti4zq.webp",
    "tagline": "Premium Hastelloy X",
    "description": "High-quality Hastelloy X for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "haynes-188",
    "name": "Haynes 188",
    "category": "Additive Manufacturing Powders",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782757197/glycolic-acid-708_e8gwdx.webp",
    "tagline": "Premium Haynes 188",
    "description": "High-quality Haynes 188 for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "pure-w",
    "name": "Pure W",
    "category": "Additive Manufacturing Powders",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782589409/natural-graphite-flakes-99-50-purity-500x500_lnaujw.webp",
    "tagline": "Premium Pure W",
    "description": "High-quality Pure W for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "dial-callipers",
    "name": "Dial Callipers",
    "category": "Instruments",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782757919/A1rsIn-RNGL_fqcwz7.webp",
    "tagline": "Premium Dial Callipers",
    "description": "High-quality Dial Callipers for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "digital-depth-guage",
    "name": "Digital Depth Guage",
    "category": "Instruments",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782757943/mitutoyo-digital-abs-depth-gauge-500x500_v3bd2x.webp",
    "tagline": "Premium Digital Depth Guage",
    "description": "High-quality Digital Depth Guage for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "pressure-transmitters",
    "name": "Pressure Transmitters",
    "category": "Instruments",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782757956/oem_pessure_transmitters__82566.original_ligvqs.webp",
    "tagline": "Premium Pressure Transmitters",
    "description": "High-quality Pressure Transmitters for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "pressure-transducers",
    "name": "Pressure Transducers",
    "category": "Instruments",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782757978/product-range_fq8xnn.webp",
    "tagline": "Premium Pressure Transducers",
    "description": "High-quality Pressure Transducers for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "measuring-instruments",
    "name": "Measuring Instruments",
    "category": "Instruments",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782758005/Measuring-Instruments-1024x539_o8j97t.webp",
    "tagline": "Premium Measuring Instruments",
    "description": "High-quality Measuring Instruments for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "integration-tools",
    "name": "Integration tools",
    "category": "Instruments",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782758043/kmtgj_kt684e.webp",
    "tagline": "Premium Integration tools",
    "description": "High-quality Integration tools for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "tig-welding-accessories",
    "name": "TIG Welding Accessories",
    "category": "Instruments",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782758082/15-set-potrosni-min-500x500_amijyb.webp",
    "tagline": "Premium TIG Welding Accessories",
    "description": "High-quality TIG Welding Accessories for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "sand-blasting-machine",
    "name": "Sand Blasting Machine",
    "category": "Machinery",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782758105/sand-blasting-machine-featured-image-1776920749_rpmwt7.webp",
    "tagline": "Premium Sand Blasting Machine",
    "description": "High-quality Sand Blasting Machine for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "vacuum-packing-machine",
    "name": "Vacuum Packing Machine",
    "category": "Machinery",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782758137/vacuum-packing-machine1_t6ojez.webp",
    "tagline": "Premium Vacuum Packing Machine",
    "description": "High-quality Vacuum Packing Machine for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "hydralic-shaering-and-cutting",
    "name": "Hydralic shaering and cutting",
    "category": "Machinery",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782758184/Hydraulic-CNC-Shearing-Machine_jrm7te.webp",
    "tagline": "Premium Hydralic shaering and cutting",
    "description": "High-quality Hydralic shaering and cutting for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "industrial-vacuum-cleaners",
    "name": "Industrial Vacuum Cleaners",
    "category": "Machinery",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782758208/industrial-vacuum-cleaners-sc-series-303_pvsm66.webp",
    "tagline": "Premium Industrial Vacuum Cleaners",
    "description": "High-quality Industrial Vacuum Cleaners for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "ultrasonic-cleaner",
    "name": "Ultrasonic Cleaner",
    "category": "Machinery",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782758245/LT-350B-Ultrasonic-Cleaner-capacity-3-5-Lts_l9owr3.webp",
    "tagline": "Premium Ultrasonic Cleaner",
    "description": "High-quality Ultrasonic Cleaner for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "rotary-surface-grinding",
    "name": "Rotary Surface Grinding",
    "category": "Machinery",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782758260/universal1_kxfuje.webp",
    "tagline": "Premium Rotary Surface Grinding",
    "description": "High-quality Rotary Surface Grinding for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "niobium-based-crucibles",
    "name": "Niobium-Based Crucibles",
    "category": "Crucibles",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782758291/1685947957-normal-NBZ0048_y58fua.webp",
    "tagline": "Premium Niobium-Based Crucibles",
    "description": "High-quality Niobium-Based Crucibles for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "ceramic-crucibles",
    "name": "Ceramic Crucibles",
    "category": "Crucibles",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782758315/s-l1600_-_2020-10-29T135439.194__80679.1604004913_tqqb1i.webp",
    "tagline": "Premium Ceramic Crucibles",
    "description": "High-quality Ceramic Crucibles for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "silicon-carbide-crucibles",
    "name": "Silicon-Carbide Crucibles",
    "category": "Crucibles",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782758333/1-240P9112203134_xld7xd.webp",
    "tagline": "Premium Silicon-Carbide Crucibles",
    "description": "High-quality Silicon-Carbide Crucibles for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "steel-crucibles",
    "name": "Steel Crucibles",
    "category": "Crucibles",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782758361/Metal_crucible-HM-2_ngvd8j.webp",
    "tagline": "Premium Steel Crucibles",
    "description": "High-quality Steel Crucibles for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "custom-made-crucibles",
    "name": "Custom-Made Crucibles",
    "category": "Crucibles",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782758380/united-kingdom-these-crucibles-made-from-yttria-a-ceramic-are-used-to-make-samples-of-single_ztxoqn.webp",
    "tagline": "Premium Custom-Made Crucibles",
    "description": "High-quality Custom-Made Crucibles for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "titanium-based-dies",
    "name": "Titanium Based Dies",
    "category": "Dies",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782758409/F17_tajyxb.webp",
    "tagline": "Premium Titanium Based Dies",
    "description": "High-quality Titanium Based Dies for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "ss-based-dies",
    "name": "SS Based Dies",
    "category": "Dies",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782758441/4.Nano-Diamond-Dies-1_vhvpdu.webp",
    "tagline": "Premium SS Based Dies",
    "description": "High-quality SS Based Dies for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  },
  {
    "slug": "tungsten-based-dies",
    "name": "Tungsten Based Dies",
    "category": "Dies",
    "image": "https://res.cloudinary.com/doegh5lpl/image/upload/v1782758470/tungsten-carbide-heading-dies--512_wyoqua.webp",
    "tagline": "Premium Tungsten Based Dies",
    "description": "High-quality Tungsten Based Dies for industrial applications.",
    "specs": [],
    "applications": [
      "Industrial",
      "Manufacturing"
    ],
    "icon": "package"
  }
];

export default products;

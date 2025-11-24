import { SectionData } from './types';

export const YOUTUBE_LINK = "https://youtube.com/playlist?list=PLBCSzzcolRYla_d1JGC2az_2hvmNtByiG&si=_fAN1pmuNaZoL_wY";
export const DONATION_LINK = "https://sociabuzz.com/yasaaoursea/support";
export const SKIN_WEB_LINK = "https://maize-skateboard-1cd.notion.site/SKINS-CSPB-V18-V20-1-28ecaae0bb8380abaa72c20400e39291?source=copy_link";

export const TUTORIAL_DATA: SectionData[] = [
  {
    id: 'lag-reduction',
    title: '1. Mengurangi Lag (Optimasi)',
    shortDescription: 'Setting opengl dan config untuk performa.',
    type: 'config',
    subSections: [
      {
        title: 'A. Setting opengl.cfg',
        items: [
          { command: 'setgl gl_alphabits "0"', description: 'Tidak perlu alpha bit tinggi' },
          { command: 'setgl gl_compress_textures "1"', description: 'Kompresi tekstur = lebih hemat RAM' },
          { command: 'setgl gl_depthtexture "0"', description: 'Matikan jika tidak pakai efek shadow' },
          { command: 'setgl gl_ext_anisotropic_filter "0"', description: 'Matikan filter berat' },
          { command: 'setgl gl_ext_texture_lodbias "0"', description: 'Matikan LOD bias' },
          { command: 'setgl gl_extensions "1"', description: 'Tetap nyalakan (wajib)' },
          { command: 'setgl gl_luminance_textures "1"', description: 'Aktifkan karena ringan (monokrom)' },
          { command: 'setgl gl_msaa "0"', description: 'Anti-aliasing dimatikan' },
          { command: 'setgl gl_picmip "2"', description: 'Turunkan kualitas tekstur agar lebih ringan, atau ubah ke angka yang lebih besar' },
          { command: 'setgl gl_round_down "1"', description: 'Tekstur dibulatkan ke bawah agar lebih ringan' },
          { command: 'setgl gl_skymip "2"', description: 'Turunkan kualitas langit' },
          { command: 'setgl gl_stencilbits "0"', description: 'Matikan stencil (efek bayangan)' },
          { command: 'setgl gl_texture_cubemap "0"', description: 'Matikan refleksi (cubemap)' },
          { command: 'setgl gl_texture_npot "0"', description: 'Matikan NPOT biar tekstur standar' },
          { command: 'setgl r_xpos "130"', description: 'Tidak berpengaruh ke performa (Posisi)' },
          { command: 'setgl r_ypos "48"', description: 'Tidak berpengaruh ke performa (Posisi)' },
        ]
      },
      {
        title: 'B. Setting Config.cfg',
        items: [
          { command: 'cl_weapon_sparks "0"', description: 'Matikan percikan api saat peluru kena besi' },
          { command: 'cl_weapon_wallpuff "0"', description: 'Matikan efek debu di dinding' },
          { command: 'cl_draw_particles "0"', description: 'Matikan/Mengurangi effek partikel' },
          { command: 'cl_minmodels "1"', description: 'Menjadikan semua model player sama (hemat resource)' },
          { command: 'cl_headname "1"', description: 'Menghilangkan nama diatas kepala team' },
          { command: 'cl_gunsmoke "0"', description: 'Matikan asap senjata' },
          { command: 'mp_decals "0"', description: 'Matikan bekas tembakan/darah (Sangat membantu)' },
          { command: 'r_vbo', description: 'Me-nonaktifkan vertex buffer object' },
          { command: 'sv_allow_vr "0"', description: 'Matikan fitur VR (Hemat Ram/CPU)' },
          { command: 'violence_ablood "0"', description: 'Matikan percikan darah' },
          { command: 'violence_agibs "0"', description: 'Matikan potongan tubuh' },
          { command: 'violence_hblood "0"', description: 'Matikan darah player/AI' },
          { command: 'violence_hgibs "0"', description: 'Matikan potongan tubuh player' },
        ]
      },
      {
        title: 'C. Setting userconfig.cfg',
        items: [
          { command: 'cl_gunsmoke "0"', description: 'Rekomendasi 0. Jika 1 terlihat keren tapi lag.' },
          { command: 'cl_gunbubbles "0"', description: 'Nonaktifkan, tidak berguna di CSPB' },
          { command: 'cl_weaponlag "0"', description: 'Matikan delay animasi senjata agar responsif' },
          { command: 'violence_ablood "0"', description: 'Matikan efek darah (Hemat resource)' },
          { command: 'violence_agibs "0"', description: 'Matikan efek potongan tubuh' },
          { command: 'violence_hblood "0"', description: 'Matikan efek darah manusia' },
          { command: 'violence_hgibs "0"', description: 'Matikan efek potongan tubuh manusia' },
        ]
      }
    ]
  },
  {
    id: 'graphics-settings',
    title: '2. Penjelasan Settingan Grafik',
    shortDescription: 'Settingan Grafik.',
    type: 'text',
    items: [
      { command: 'gl_overbright_studio', description: 'Cahaya untuk model player' },
      { command: 'gl_overbright', description: '"1" Aktif / "0" Nonaktif. Cahaya spot tertentu (misal: jendela/atap bolong)' },
      { command: 'r_lighting_ambient', description: 'Terang/gelapnya Hand dan Weapon yang digunakan' },
      { command: 'r_lighting_modulate', description: 'Terang/gelapnya texture map' },
      { command: 'r_sprite_lighting', description: 'Tingkat kecerahan muzzleflash (efek tembak)' },
      { command: 'gamma', description: 'Kecerahan tampilan warna dan detail global' },
    ],
    content: "Cara setting grafik:\n1. Buka File Explorer/ZArchiver\n2. Masuk ke folder data/com.cspb.m/files/cspb/downloaded/maps/\n3. Cari nama map (contoh: Luxville_Retextured.mapconfig)\n4. Edit sesuai selera."
  },
  {
    id: 'install-skin',
    title: '3. Pasang Skin (.PNG/.JPG/.BMP)',
    shortDescription: 'Langkah-langkah Pasang Texture Skin',
    type: 'steps',
    content: "Alat yang dibutuhkan: Jed's HLMV (PC) & Web Converter BMP.\nSilahkan download alatnya melalui tombol dibawah ini:",
    links: [
      { label: "Download Jed's HLMV", url: "https://www.moddb.com/downloads/jeds-half-life-model-viewer-136" },
      { label: "Buka Web Converter BMP", url: "https://online-converting.com/image/convert2bmp/" }
    ],
    steps: [
      "Siapkan bahan (.png/.jpg/.bmp) dari YouTube atau Channel @yasaaoursea.",
      "Convert gambar ke .BMP (8-bit Indexed Color). Gunakan web converter online, setting color ke '8 indexed'.",
      "Penting: Pastikan file .bmp hasil convert sudah 8-bit dan ukurannya sama dengan aslinya.",
      "Ambil file .mdl dari folder game (com.cspb/files/cspb/models/billflx), contoh: v_m1887.mdl.",
      "Buka Jed's HLMV, import file .mdl tersebut.",
      "Masuk tab 'Textures', cari tekstur asli, lalu import file .bmp baru kamu (Timpa texture asli).",
      "Klik File > Save As, dan timpa file model sebelumnya."
    ]
  },
  {
    id: 'weapon-scripts',
    title: '4. Penjelasan Scripts Weapon',
    shortDescription: 'Penjelasan detail script senjata.',
    type: 'script',
    content: "Lokasi edit: data/com.cspb.m/files/cspb/scripts/\nBerikut adalah list lengkap parameter script:",
    items: [
      { command: 'WeaponName: AK-47 Ext.', description: 'Nama weapon' },
      { command: 'Damage: 20', description: 'Damage senjata (semakin tinggi angka semakin sakit)' },
      { command: 'ReloadSpeed: 2.5', description: 'Waktu buat Reload. (semakin kecil angka semakin cepat)' },
      { command: 'ReloadQuickSpeed: 1.5', description: 'Waktu buat quick reload. (semakin kecil angka semakin cepat)' },
      { command: 'DeploySpeed: 0.7', description: 'Waktu buat draw (semakin kecil. angka semakin cepat)' },
      { command: 'DeployQuickSpeed: 0.3', description: 'Waktu buat quick change. (semakin kecil angka semakin cepat)' },
      { command: 'CrosshairType: 0', description: 'Tipe cross hair (0 = ijo, 1 = laser, 2 = grenade, 3 = kosong)' },
      { command: 'Clip: 30', description: 'Magazine' },
      { command: 'Clip2: 30', description: 'Magazine 2 (buat dual ammo, bom m203)' },
      { command: 'AmmoReserve: 150', description: 'Ammo' },
      { command: 'AimingWeapon: 0', description: '1 bisa pake scope 0 ga bisa' },
      { command: 'DotSightType: 0', description: 'Tipe scope (1 = red dot, 2 = eotech, 3 kosong)' },
      { command: 'SideBarAlpha: 0', description: 'Waktu ngeker biar ada sidebar hitam, 255 = full Hitam, 0 kosong' },
      { command: 'Sound: sound/weapons/ak47-1.wav', description: 'Path file suara tembakan' },
      { command: 'PrimaryAttackTime1: 1', description: 'Ga kepake buat rifle' },
      { command: 'PrimaryAttackTime2: 1', description: 'Ga kepake buat rifle' },
      { command: 'SecondaryAttackTime1: 1', description: 'Ga kepake buat rifle' },
      { command: 'SecondaryAttackTime2: 1', description: 'Ga kepake buat rifle' },
      { command: 'HideCrosshairWhenZoomed: 0', description: 'Ilangin crosshair waktu ngeker' },
      { command: 'HideViewmodelWhenZoomed: 0', description: 'Ilangin weapon waktu ngeker' },
      { command: 'AimPosition: 0 0 0', description: 'Posisi weapon waktu ngeker xyz liat contoh di hlmv dll' },
      { command: 'MuzzleFlashType: 1', description: 'Tipe muzzleflash sesuai sprites/custom_muzzle' },
      { command: 'MuzzleFlashScale: 0', description: 'Ukuran muzzleflash' },
      { command: 'WalkSpeed: 225', description: 'Kecepatan jalan waktu pake weapon ini' },
      { command: 'KickBack: 0.5 0.5 0.5 0.5 0.5 0.5 0.5', description: 'Recoil' },
      { command: 'DamageTga: gfx/billflx/weapon_damage/wpdamage0.tga', description: 'Kalo lu kena hit weapon ini tga bakal display di layar lu' },
      { command: 'SightTga: gfx/sight/newsight/null.tga', description: 'Scope tga' },
      { command: 'BulletSpread: 0.01', description: 'Penyebaran peluru' },
      { command: 'ShootCycle: 0.08', description: 'FireRate atau kecepatan tembakan' },
      { command: 'ZoomInSound: sound/weapons/WM_AssaultScope_In.wav', description: 'Sound waktu zoom in' },
      { command: 'ZoomOutSound: sound/weapons/WM_AssaultScope_Out.wav', description: 'Sound waktu zoom out' },
      { command: '// -- KHUSUS MELEE --', description: 'Settingan dibawah ini untuk senjata jarak dekat' },
      { command: 'PrimaryAttackTime1: 1.5', description: 'Waktu anim attack1' },
      { command: 'SecondaryAttackTime1: 2.6', description: 'Waktu anim attack2' },
      { command: 'MeleeHitFar: 50', description: 'Jarak hit player/object' },
      { command: 'HitSoundPlayer: sound/weapons/amok_kukri_hit.wav', description: 'Sound waktu kena player' },
      { command: 'HitSoundObject: sound/weapons/combat_machete_hit_wall.wav', description: 'Sound kalo kena object' },
      { command: '// BAGAIMANA CARA EDIT SCRIPTS NYA?', description: '' },
      { command: '1. Buka Aplikasi file / Z archiver', description: '' },
      { command: '2. Masuk ke folder data/com.cspb.m/files/cspb/scripts/', description: '' },
      { command: '3. Kemudian cari nama weaponya, lalu buka', description: '' },
      { command: '4. Atur sesuka anda', description: '' },
    ]
  },
  {
    id: 'hand-texture',
    title: '5. Mengetahui Nama Texture Hand',
    shortDescription: 'Cari tahu texture name model dengan AI',
    type: 'steps',
    content: "Cara mudah tanpa HLMV adalah menggunakan AI (ChatGPT).",
    steps: [
      "Siapkan screenshot atau file .mdl yang ingin dicek.",
      "Buka ChatGPT.",
      "Upload file .mdl dan ketik prompt: 'Saya memiliki sebuah file model Counter-Strike (.mdl), misalnya v_kriss_sv_crb.mdl. Tolong ekstrak dan tampilkan seluruh daftar nama texture yang ada di dalam file, baik untuk senjata maupun hand. Sertakan nama file gambar (.bmp, .tga, dll) serta identifier model (misalnya v_, w_, p_, Hand_). Buat daftar yang rapi agar mudah dipahami'.",
      "Tunggu AI menganalisis strukturnya."
    ]
  },
  {
    id: 'add-weapon',
    title: '6. Menambah Weapon/Skin (V18/V20.1)',
    shortDescription: 'Cara menambahkan Senjata CSPB',
    type: 'video',
    content: "Tutorial ini khusus untuk CSPB V18 - V20.1. Pelajari lebih lanjut melalui playlist video."
  }
];
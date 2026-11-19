import { FC } from "react";

/**
 * BotanicalDecorations Component Library
 *
 * Abstract botanical design system inspired by:
 * - Climbing plants, vines, and natural stem growth
 * - Curling botanical tendrils and unfurling fern spirals (fiddleheads / koru)
 * - Organic forms that expand, narrow, twist, and branch
 *
 * CRITICAL GEOMETRY PRINCIPLES:
 * 1. Primary forms are constructed using CLOSED SVG PATHS WITH IRREGULAR SILHOUETTES (fill, not stroke).
 * 2. Bézier curves define both edges independently so shapes naturally vary in thickness.
 * 3. Occasional asymmetrical spirals that taper smoothly to fine organic tips.
 * 4. Multi-layer depth using Janta Hospital palette:
 *    - #D2EFE4: rich mint foundation (broad areas, 0.95-1.0 opacity)
 *    - #82CFB8: medium sage stems and mid-tendrils (0.85-0.95 opacity)
 *    - #41A589: accent green tendril tips, spirals and highlights (0.8-0.95 opacity)
 *    - #0A5C4F: deep medical green (sparingly, terminal dots or fine accents)
 * 5. Positioned behind cards with pointer-events: none and aria-hidden="true".
 * 6. Separate desktop and mobile viewBoxes/paths for responsive integrity.
 */

// ============================================================================
// VARIANT A: Growing Vine (BotanicalGrowingVine)
// Best for: Inside Janta Hospital (HospitalGallery) & Photographic Layouts
// Geometry: Broad mint shape enters upper-left (150px wide), narrows diagonally,
// branches into an open unfurling tendril spiral near the main photograph,
// while the main stem continues behind the next card and exits lower-right.
// ============================================================================
export const BotanicalGrowingVine: FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none absolute inset-0 w-full h-full overflow-hidden z-0 ${className}`}
    >
      {/* Desktop Composition (1440 x 750) */}
      <svg
        viewBox="0 0 1440 750"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden sm:block w-full h-full"
      >
        {/* Layer 1: Broad Light Mint Base Shape with Irregular Thickness */}
        {/* Enters (x: -40, y: 30) with width ~180px, swells to 240px behind heading, */}
        {/* narrows to 70px at neck (x: 580, y: 220), expands behind cards (x: 920, y: 380), */}
        {/* and exits lower-right (x: 1460, y: 560). */}
        <path
          d="M -40,30 
             C 120,40 260,10 420,60 
             C 540,100 660,180 720,250 
             C 800,340 890,410 1050,430 
             C 1220,450 1350,380 1460,420 
             L 1460,580 
             C 1320,560 1180,620 1020,580 
             C 860,540 760,440 680,350 
             C 610,270 510,190 380,170 
             C 220,150 90,210 -40,210 
             Z"
          fill="#D2EFE4"
          opacity="0.9"
        />

        {/* Layer 2: Medium Sage Vine Body with Asymmetrical Undulation */}
        {/* Weaves inside the base shape, varying from 90px to 28px thickness */}
        <path
          d="M -20,85 
             C 140,90 280,65 440,110 
             C 560,145 650,210 710,285 
             C 770,360 840,430 980,450 
             C 1120,470 1260,425 1420,460 
             L 1410,515 
             C 1270,480 1140,520 1000,500 
             C 860,480 790,410 730,340 
             C 670,270 580,200 460,170 
             C 300,130 150,150 -20,145 
             Z"
          fill="#82CFB8"
          opacity="0.75"
        />

        {/* Layer 3: Branching Unfurling Tendril Spiral (Fiddlehead / Koru) */}
        {/* Branches off at (x: 680, y: 280) between cards, curls into an asymmetric spiral */}
        {/* Outer edge sweeps around and curls inward; inner edge follows tighter path, */}
        {/* tapering from 38px down to 4px at the coiled heart. */}
        <path
          d="M 680,280 
             C 710,230 755,190 810,175 
             C 870,160 935,180 960,235 
             C 980,280 960,335 915,360 
             C 865,385 810,365 785,320 
             C 765,280 780,240 815,225 
             C 845,212 875,224 885,250 
             C 892,270 882,288 865,292 
             C 852,295 842,286 844,275 
             C 845,268 852,263 858,266 
             C 862,268 860,274 856,275 
             C 850,276 848,265 855,260 
             C 868,252 878,268 872,282 
             C 862,305 832,298 825,278 
             C 815,250 832,228 858,222 
             C 892,215 925,238 930,272 
             C 935,315 898,352 855,355 
             C 805,358 765,320 762,270 
             C 760,225 792,185 835,172 
             C 875,160 920,175 940,210 
             C 910,170 855,155 805,172 
             C 760,188 720,225 695,270 
             Z"
          fill="#41A589"
          opacity="0.85"
        />

        {/* Layer 4: Delicate Secondary Accent Tendril Sprouting Rightward */}
        <path
          d="M 1020,440 
             C 1070,390 1130,365 1195,375 
             C 1245,385 1285,420 1295,470 
             C 1302,505 1285,538 1252,550 
             C 1222,560 1192,545 1185,518 
             C 1180,495 1195,478 1215,475 
             C 1230,472 1242,482 1240,495 
             C 1238,504 1228,508 1222,502 
             C 1218,498 1222,490 1226,490 
             C 1230,490 1230,496 1226,498 
             C 1218,502 1205,488 1215,475 
             C 1230,455 1262,465 1268,490 
             C 1275,525 1245,550 1215,542 
             C 1180,532 1162,495 1170,460 
             C 1180,418 1225,388 1270,392 
             C 1220,380 1165,400 1125,435 
             C 1085,470 1050,490 1010,480 
             Z"
          fill="#41A589"
          opacity="0.8"
        />

        {/* Delicate Deep Green Terminal Node Dot */}
        <circle cx="856" cy="271" r="3.5" fill="#0A5C4F" opacity="0.6" />
        <circle cx="1226" cy="494" r="2.5" fill="#0A5C4F" opacity="0.5" />
      </svg>

      {/* Mobile Composition (400 x 900) — Vertically oriented vine */}
      {/* Travels downward behind stacked cards, curling between card boundaries */}
      <svg
        viewBox="0 0 400 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        className="block sm:hidden w-full h-full"
      >
        {/* Broad Mint Base flowing vertically along right and center */}
        <path
          d="M -20,40 
             C 60,30 160,50 240,110 
             C 320,170 360,260 340,360 
             C 320,450 240,510 180,570 
             C 110,640 80,720 120,810 
             C 140,850 180,880 230,900 
             L 160,920 
             C 90,900 40,840 25,760 
             C 10,670 50,590 120,520 
             C 190,460 250,410 265,340 
             C 280,260 240,190 170,140 
             C 100,95 20,90 -30,110 
             Z"
          fill="#D2EFE4"
          opacity="0.92"
        />

        {/* Medium Sage Mid-Stem */}
        <path
          d="M -10,75 
             C 50,65 140,85 210,135 
             C 275,185 315,265 295,350 
             C 275,430 205,490 150,550 
             C 85,620 60,695 95,780 
             L 65,770 
             C 35,690 60,610 125,540 
             C 185,480 245,425 260,355 
             C 275,280 240,210 180,165 
             C 120,120 40,115 -15,130 
             Z"
          fill="#82CFB8"
          opacity="0.8"
        />

        {/* Curling Tendril Spiral between Card 1 & Card 2 (x: 280, y: 380) */}
        <path
          d="M 270,350 
             C 310,340 355,365 370,405 
             C 382,440 365,480 330,495 
             C 295,510 255,492 242,458 
             C 232,430 245,400 272,390 
             C 295,382 318,392 324,412 
             C 328,426 320,438 308,440 
             C 298,442 290,435 292,426 
             C 293,420 299,416 304,418 
             C 301,422 296,423 296,427 
             C 296,432 305,436 312,432 
             C 320,428 322,416 316,408 
             C 310,398 295,392 282,398 
             C 265,406 255,426 262,446 
             C 272,472 305,488 332,476 
             C 358,464 370,432 360,405 
             C 348,375 315,355 280,362 
             Z"
          fill="#41A589"
          opacity="0.88"
        />
        <circle cx="298" cy="423" r="3" fill="#0A5C4F" opacity="0.6" />
      </svg>
    </div>
  );
};

// ============================================================================
// VARIANT B: Unfurling Spiral (BotanicalUnfurlingSpiral)
// Best for: Meet Our Doctors (MeetOurDoctors) & Doctor Portfolios
// Geometry: Broad pale organic base cradles the header/duty section, transitions
// into a prominent asymmetrical fiddlehead spiral curling toward the center.
// ============================================================================
export const BotanicalUnfurlingSpiral: FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none absolute inset-0 w-full h-full overflow-hidden z-0 ${className}`}
    >
      {/* Desktop Composition (1440 x 700) */}
      <svg
        viewBox="0 0 1440 700"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden sm:block w-full h-full"
      >
        {/* Broad Mint Base Shape Cradling Top & Left */}
        <path
          d="M 200,-30 
             C 420,-40 680,20 920,80 
             C 1140,135 1320,240 1380,380 
             C 1420,470 1390,560 1310,610 
             C 1210,670 1080,650 990,580 
             C 920,525 890,440 920,360 
             C 945,295 1010,250 1085,260 
             C 1145,268 1190,315 1185,372 
             C 1180,418 1142,450 1100,445 
             C 1070,440 1048,415 1052,388 
             C 1055,368 1072,354 1090,358 
             C 1102,360 1110,372 1106,382 
             C 1102,390 1092,392 1088,386 
             C 1085,380 1090,374 1095,375 
             C 1090,373 1082,378 1082,386 
             C 1082,398 1098,406 1110,396 
             C 1125,385 1130,362 1118,348 
             C 1100,328 1068,335 1050,355 
             C 1025,382 1032,425 1062,452 
             C 1102,488 1162,475 1195,435 
             C 1235,388 1232,315 1185,268 
             C 1125,210 1030,210 955,265 
             C 880,320 850,420 878,510 
             C 915,630 1030,710 1160,715 
             C 1310,720 1440,625 1465,480 
             C 1490,335 1400,190 1260,95 
             C 1080,-25 840,-70 580,-55 
             C 380,-45 180,-10 40,40 
             L 20,-30 
             Z"
          fill="#D2EFE4"
          opacity="0.88"
        />

        {/* Medium Sage Stem following the spiral trajectory */}
        <path
          d="M 620,15 
             C 820,55 1010,140 1140,265 
             C 1240,360 1260,490 1190,580 
             C 1120,665 995,670 910,610 
             C 835,555 815,450 855,365 
             C 890,290 970,240 1055,250 
             C 1125,258 1180,315 1172,385 
             C 1165,435 1122,470 1075,462 
             C 1038,455 1012,425 1018,390 
             C 1022,365 1045,348 1070,352 
             C 1085,355 1095,368 1092,382 
             C 1088,392 1078,395 1072,388 
             C 1070,380 1078,382 1080,388 
             C 1075,378 1060,378 1058,392 
             C 1055,410 1075,428 1095,422 
             C 1122,412 1135,382 1125,355 
             C 1110,320 1065,310 1030,335 
             C 985,368 975,430 1008,480 
             C 1045,535 1125,548 1180,510 
             C 1245,465 1260,375 1215,300 
             C 1160,205 1045,135 930,90 
             C 810,45 680,20 560,10 
             Z"
          fill="#82CFB8"
          opacity="0.75"
        />

        {/* Accent Green Inner Spiral Tip & Ridge */}
        <path
          d="M 970,290 
             C 1025,255 1090,265 1130,310 
             C 1165,350 1162,405 1130,442 
             C 1098,475 1048,472 1015,440 
             C 985,410 988,365 1015,335 
             C 1038,310 1072,312 1092,335 
             C 1108,352 1105,378 1088,392 
             C 1075,402 1058,398 1052,385 
             C 1048,372 1058,362 1068,365 
             C 1075,368 1075,375 1070,378 
             C 1062,380 1060,370 1066,368 
             C 1072,365 1080,375 1075,382 
             C 1068,390 1055,385 1058,375 
             C 1062,358 1082,352 1095,368 
             C 1110,388 1098,418 1072,425 
             C 1040,432 1015,410 1012,380 
             C 1008,342 1038,310 1075,308 
             C 1118,305 1152,340 1148,382 
             C 1142,430 1095,465 1048,458 
             C 1005,450 975,412 978,368 
             C 980,332 1005,302 1040,295 
             Z"
          fill="#41A589"
          opacity="0.8"
        />

        {/* Small Pale Botanical Leaf Pods floating near spiral */}
        <path
          d="M 820,480 C 850,450 890,460 910,485 C 880,515 840,505 820,480 Z"
          fill="#82CFB8"
          opacity="0.6"
        />
        <path
          d="M 1240,240 C 1270,210 1310,225 1325,255 C 1295,280 1255,265 1240,240 Z"
          fill="#41A589"
          opacity="0.55"
        />
        <circle cx="1069" cy="372" r="3" fill="#0A5C4F" opacity="0.65" />
      </svg>

      {/* Mobile Composition (400 x 800) */}
      <svg
        viewBox="0 0 400 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        className="block sm:hidden w-full h-full"
      >
        <path
          d="M 120,-20 
             C 220,10 320,80 360,180 
             C 395,270 370,370 300,430 
             C 230,485 140,475 90,420 
             C 45,370 55,295 105,250 
             C 150,210 215,220 245,265 
             C 270,305 255,355 215,372 
             C 185,385 152,370 148,342 
             C 145,322 158,308 175,310 
             C 185,312 192,322 188,330 
             C 182,335 175,330 178,324 
             C 182,326 182,332 178,335 
             C 168,340 162,328 168,318 
             C 178,302 205,308 212,325 
             C 222,352 198,380 170,378 
             C 135,375 118,345 125,315 
             C 135,275 178,252 215,262 
             C 260,275 285,325 268,370 
             C 245,425 180,455 125,438 
             C 70,420 38,368 45,310 
             C 55,230 120,170 200,165 
             C 290,160 365,225 360,320 
             C 355,420 270,510 170,515 
             C 70,520 -10,450 -30,350 
             L -30,-20 
             Z"
          fill="#D2EFE4"
          opacity="0.9"
        />
        <path
          d="M 180,240 
             C 230,250 262,295 248,340 
             C 235,380 192,405 155,392 
             C 125,380 115,348 128,322 
             C 140,298 170,290 192,305 
             C 208,318 208,340 195,352 
             C 185,360 172,355 170,345 
             C 168,338 174,332 180,334 
             C 175,338 182,342 188,338 
             C 192,330 188,320 178,318 
             C 165,315 150,330 155,348 
             C 162,370 190,380 210,368 
             C 232,352 238,320 225,298 
             C 210,270 175,265 148,285 
             Z"
          fill="#41A589"
          opacity="0.82"
        />
        <circle cx="179" cy="334" r="3" fill="#0A5C4F" opacity="0.6" />
      </svg>
    </div>
  );
};

// ============================================================================
// VARIANT C: Branching Tendril (BotanicalBranchingTendril)
// Best for: Medical Services (MedicalServices) & Clinical Directory
// Geometry: One primary organic stem branches into two diverging curling shoots
// with asymmetric lengths and thickness that flow between service cards.
// ============================================================================
export const BotanicalBranchingTendril: FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none absolute inset-0 w-full h-full overflow-hidden z-0 ${className}`}
    >
      {/* Desktop Composition (1440 x 800) */}
      <svg
        viewBox="0 0 1440 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden sm:block w-full h-full"
      >
        {/* Main Organic Canopy Base behind Emergency & OPD Cards */}
        <path
          d="M -30,120 
             C 120,80 280,60 450,110 
             C 580,150 680,240 730,340 
             C 770,420 830,490 940,510 
             C 1060,530 1190,470 1310,500 
             C 1390,520 1450,570 1480,630 
             L 1480,720 
             C 1380,700 1260,630 1140,615 
             C 990,595 890,660 780,640 
             C 680,620 620,530 570,440 
             C 520,350 440,280 330,240 
             C 180,190 60,240 -30,260 
             Z"
          fill="#D2EFE4"
          opacity="0.9"
        />

        {/* Primary Branch A: Swelling toward top-right and curling around Tile 2 */}
        <path
          d="M 520,290 
             C 610,210 710,160 830,175 
             C 930,190 1000,260 990,345 
             C 980,420 900,470 825,455 
             C 760,440 725,385 745,335 
             C 760,295 800,272 840,282 
             C 870,290 890,320 882,348 
             C 875,368 855,380 838,375 
             C 825,370 818,358 822,348 
             C 825,340 832,338 836,342 
             C 834,345 828,346 828,350 
             C 830,356 840,360 848,354 
             C 858,348 860,332 852,322 
             C 840,308 815,312 805,328 
             C 792,350 805,380 830,392 
             C 868,410 918,390 932,350 
             C 948,305 922,250 870,232 
             C 810,212 735,235 690,280 
             C 645,325 585,350 515,340 
             Z"
          fill="#82CFB8"
          opacity="0.8"
        />

        {/* Secondary Branch B: Curving downward-left between Tile 3 and Tile 4 */}
        <path
          d="M 680,410 
             C 640,480 580,540 500,580 
             C 410,625 310,630 220,590 
             C 150,560 110,490 130,425 
             C 145,370 195,335 250,345 
             C 295,355 325,395 315,435 
             C 305,470 270,492 235,485 
             C 210,480 195,460 200,440 
             C 204,425 218,415 230,420 
             C 238,422 242,430 238,438 
             C 235,442 228,440 228,436 
             C 230,432 235,432 235,435 
             C 232,442 220,442 218,432 
             C 215,420 228,410 240,412 
             C 258,416 265,438 255,455 
             C 242,475 215,480 195,468 
             C 170,452 165,420 178,392 
             C 195,355 240,338 280,350 
             C 330,365 365,415 352,470 
             C 335,535 268,582 195,570 
             C 130,560 85,505 92,440 
             C 98,380 142,325 205,305 
             C 285,280 380,295 455,345 
             C 530,395 605,405 675,370 
             Z"
          fill="#41A589"
          opacity="0.82"
        />

        {/* Small Botanical Accent Leaf Sprout near Branch Node */}
        <path
          d="M 535,310 C 575,275 620,285 640,315 C 600,345 555,335 535,310 Z"
          fill="#0A5C4F"
          opacity="0.35"
        />
        <circle cx="832" cy="344" r="3" fill="#0A5C4F" opacity="0.65" />
        <circle cx="232" cy="434" r="2.5" fill="#0A5C4F" opacity="0.6" />
      </svg>

      {/* Mobile Composition (400 x 950) */}
      <svg
        viewBox="0 0 400 950"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        className="block sm:hidden w-full h-full"
      >
        <path
          d="M -20,80 
             C 80,60 190,90 260,160 
             C 330,230 360,330 320,430 
             C 280,530 180,600 130,700 
             C 90,780 100,870 160,940 
             L 100,950 
             C 40,865 30,765 80,670 
             C 130,580 220,510 255,420 
             C 290,335 260,250 200,195 
             C 140,140 40,120 -30,140 
             Z"
          fill="#D2EFE4"
          opacity="0.9"
        />
        <path
          d="M 230,380 
             C 280,350 340,370 365,420 
             C 385,465 365,515 320,535 
             C 275,555 225,530 210,485 
             C 198,450 215,415 248,405 
             C 275,395 302,408 308,432 
             C 312,450 300,465 285,465 
             C 272,465 265,455 268,445 
             C 270,438 276,435 282,438 
             C 280,442 272,442 272,446 
             C 275,452 285,452 290,445 
             C 295,438 290,425 280,422 
             C 265,418 248,430 248,448 
             C 248,472 275,492 302,482 
             C 330,470 342,438 330,412 
             C 315,380 270,365 230,390 
             Z"
          fill="#41A589"
          opacity="0.85"
        />
        <circle cx="278" cy="442" r="3" fill="#0A5C4F" opacity="0.6" />
      </svg>
    </div>
  );
};

// ============================================================================
// VARIANT D: Side Climber (BotanicalSideClimber)
// Best for: Dedicated Doctors, Dedicated Contact & Flank Decorations
// Geometry: Climbs along one side, with undulating non-parallel stems that
// send horizontal curling tendrils inward between content cards.
// ============================================================================
export const BotanicalSideClimber: FC<{
  className?: string;
  side?: "left" | "right";
}> = ({ className = "", side = "left" }) => {
  const isRight = side === "right";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none absolute inset-0 w-full h-full overflow-hidden z-0 ${className}`}
    >
      {/* Desktop Composition (1440 x 850) */}
      <svg
        viewBox="0 0 1440 850"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        className={`hidden sm:block w-full h-full ${isRight ? "-scale-x-100" : ""}`}
      >
        {/* Base Vine Stem Climbing along Left Flank */}
        <path
          d="M -40,-20 
             C 40,60 110,180 90,310 
             C 70,440 -10,540 60,670 
             C 120,770 240,810 380,840 
             L 360,890 
             C 200,860 70,810 -5,690 
             C -80,560 0,440 20,320 
             C 40,200 -20,80 -60,20 
             Z"
          fill="#D2EFE4"
          opacity="0.9"
        />

        {/* Upper Inward Curling Tendril (x: 80, y: 260) */}
        <path
          d="M 75,220 
             C 140,200 220,210 280,250 
             C 335,290 350,360 315,415 
             C 280,465 210,480 155,450 
             C 110,420 95,360 125,315 
             C 150,275 205,265 245,290 
             C 278,312 285,355 262,385 
             C 242,410 208,412 188,395 
             C 172,380 175,358 190,348 
             C 202,340 215,348 212,360 
             C 210,368 200,370 198,362 
             C 202,360 205,365 202,368 
             C 192,375 185,358 198,348 
             C 215,335 240,348 245,368 
             C 252,395 228,418 200,412 
             C 165,405 150,370 162,338 
             C 178,298 228,290 262,315 
             C 305,345 305,410 265,450 
             C 220,490 148,480 102,435 
             C 62,390 70,320 115,270 
             C 160,225 220,210 280,225 
             C 220,195 145,190 70,205 
             Z"
          fill="#82CFB8"
          opacity="0.8"
        />

        {/* Lower Inward Sweep & Tendril (x: 50, y: 560) */}
        <path
          d="M 30,520 
             C 110,500 200,515 270,565 
             C 330,610 355,685 325,750 
             C 295,810 225,845 155,830 
             C 95,815 60,760 80,705 
             C 98,655 150,630 198,650 
             C 238,668 255,710 235,748 
             C 218,778 180,788 155,772 
             C 138,760 135,738 148,725 
             C 158,715 172,720 172,732 
             C 172,740 162,745 158,738 
             C 162,735 168,740 165,745 
             C 155,750 148,735 158,725 
             C 175,710 202,722 208,745 
             C 215,772 188,795 160,788 
             C 125,780 108,745 120,712 
             C 135,670 185,650 225,672 
             C 270,698 275,755 242,795 
             C 202,840 130,838 80,795 
             C 38,755 35,685 70,630 
             C 110,575 180,545 250,555 
             C 180,530 100,515 25,505 
             Z"
          fill="#41A589"
          opacity="0.82"
        />
        <circle cx="203" cy="364" r="3" fill="#0A5C4F" opacity="0.6" />
        <circle cx="163" cy="740" r="2.5" fill="#0A5C4F" opacity="0.6" />
      </svg>

      {/* Mobile Composition (400 x 850) */}
      <svg
        viewBox="0 0 400 850"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        className="block sm:hidden w-full h-full"
      >
        <path
          d="M -20,-10 
             C 30,50 65,140 50,230 
             C 35,320 -15,400 35,490 
             C 80,570 170,610 260,630 
             L 240,670 
             C 150,650 65,610 15,520 
             C -40,420 5,330 15,240 
             C 25,150 -10,60 -35,10 
             Z"
          fill="#D2EFE4"
          opacity="0.9"
        />
        <path
          d="M 40,200 
             C 95,190 150,210 185,250 
             C 215,285 215,335 185,365 
             C 155,395 110,395 85,365 
             C 65,340 70,305 95,288 
             C 118,272 145,280 152,302 
             C 158,318 148,332 135,332 
             C 125,332 120,324 124,316 
             C 126,312 132,312 130,318 
             C 125,322 135,325 138,318 
             C 142,305 125,295 112,305 
             C 98,320 102,345 122,355 
             C 148,368 178,350 182,325 
             C 188,295 170,265 140,255 
             C 105,245 60,250 35,260 
             Z"
          fill="#41A589"
          opacity="0.85"
        />
        <circle cx="128" cy="315" r="3" fill="#0A5C4F" opacity="0.6" />
      </svg>
    </div>
  );
};

// ============================================================================
// VARIANT E: Organic Sweep (BotanicalOrganicSweep)
// Best for: Dedicated About (/about)
// Geometry: A grand, asymmetric botanical canopy that sweeps diagonally from
// top-right behind the mission story and curls toward the campus photograph.
// ============================================================================
export const BotanicalOrganicSweep: FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none absolute inset-0 w-full h-full overflow-hidden z-0 ${className}`}
    >
      {/* Desktop Composition (1440 x 750) */}
      <svg
        viewBox="0 0 1440 750"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden sm:block w-full h-full"
      >
        {/* Broad Mint Canopy Swell across the Upper-Right & Center */}
        <path
          d="M 380,-30 
             C 620,-10 880,40 1120,120 
             C 1320,185 1460,310 1480,440 
             C 1495,540 1420,620 1310,650 
             C 1180,680 1040,610 940,530 
             C 850,455 790,340 700,260 
             C 600,170 460,140 320,180 
             C 180,220 80,310 -30,420 
             L -30,280 
             C 70,180 180,90 310,40 
             C 420,-5 530,-35 640,-40 
             Z"
          fill="#D2EFE4"
          opacity="0.9"
        />

        {/* Medium Sage Connecting Stem between Photograph and Narrative */}
        <path
          d="M 520,30 
             C 740,70 960,165 1120,290 
             C 1240,385 1290,500 1230,590 
             C 1170,670 1060,675 970,620 
             C 890,565 845,460 770,390 
             C 680,305 560,265 440,290 
             C 320,315 220,390 130,480 
             L 100,430 
             C 190,340 295,265 420,235 
             C 555,205 680,245 780,330 
             C 860,400 910,495 980,555 
             C 1055,610 1145,595 1190,535 
             C 1240,465 1205,370 1110,280 
             C 970,165 770,85 570,45 
             Z"
          fill="#82CFB8"
          opacity="0.8"
        />

        {/* Accent Green Unfurling Tendril Loop near bottom of building image */}
        <path
          d="M 720,410 
             C 770,360 840,345 895,375 
             C 945,402 965,458 945,510 
             C 920,560 860,582 810,562 
             C 768,542 748,495 765,455 
             C 780,422 818,405 852,418 
             C 878,428 890,455 882,478 
             C 875,495 858,505 842,498 
             C 830,492 828,478 834,470 
             C 838,464 845,465 845,470 
             C 840,472 836,475 838,478 
             C 842,482 850,482 855,475 
             C 860,468 858,455 850,448 
             C 838,438 818,442 810,455 
             C 800,475 812,502 832,512 
             C 862,525 900,510 915,480 
             C 930,445 915,405 878,390 
             C 838,375 790,390 758,422 
             C 725,455 690,470 650,465 
             Z"
          fill="#41A589"
          opacity="0.82"
        />
        <circle cx="842" cy="469" r="3" fill="#0A5C4F" opacity="0.65" />
      </svg>

      {/* Mobile Composition (400 x 800) */}
      <svg
        viewBox="0 0 400 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        className="block sm:hidden w-full h-full"
      >
        <path
          d="M 140,-20 
             C 240,20 340,90 375,190 
             C 410,290 370,390 295,450 
             C 215,515 110,505 60,440 
             C 15,380 30,295 90,250 
             C 145,210 220,225 248,280 
             C 272,328 250,380 205,395 
             C 170,405 138,385 135,355 
             C 132,332 148,315 168,318 
             C 178,320 182,330 178,338 
             C 172,342 165,338 168,330 
             C 172,332 172,338 168,340 
             C 158,342 152,330 160,320 
             C 172,305 198,312 205,330 
             C 212,355 190,380 165,375 
             C 130,370 115,340 125,310 
             C 138,270 180,248 220,258 
             C 268,272 292,325 272,370 
             C 248,425 178,452 122,435 
             C 65,418 35,360 45,300 
             C 58,220 130,165 210,160 
             C 300,155 370,220 365,315 
             C 360,410 280,495 180,505 
             L -30,510 
             L -30,-20 
             Z"
          fill="#D2EFE4"
          opacity="0.9"
        />
        <path
          d="M 185,250 
             C 230,260 262,302 248,345 
             C 235,385 192,408 155,395 
             C 125,382 115,350 128,324 
             C 140,300 170,292 192,308 
             C 208,320 208,342 195,355 
             C 185,362 172,358 170,348 
             C 168,340 175,335 180,336 
             C 175,340 182,345 188,340 
             C 192,332 188,322 178,320 
             C 165,318 150,332 155,350 
             C 162,372 190,382 210,370 
             C 232,355 238,322 225,300 
             C 210,272 175,268 148,288 
             Z"
          fill="#41A589"
          opacity="0.85"
        />
        <circle cx="178" cy="336" r="3" fill="#0A5C4F" opacity="0.6" />
      </svg>
    </div>
  );
};

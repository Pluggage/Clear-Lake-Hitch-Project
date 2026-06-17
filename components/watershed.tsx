import Link from "next/link"
import { ArrowRight } from "lucide-react"

type Status = "active" | "restore" | "concern" | "quiet"
type Shore = "North shore" | "West shore" | "East shore" | "South shore"

const STATUS_COLOR: Record<Status, string> = {
  active: "#2d7a3a",
  restore: "#c87800",
  concern: "#c0392b",
  quiet: "#9aa3ad",
}
const STATUS_LABEL: Record<Status, string> = {
  active: "Active spawning",
  restore: "Restoration",
  concern: "Concern",
  quiet: "Survey site",
}

type Creek = {
  name: string
  href: string
  status: Status
  shore: Shore
  x: number
  y: number
  // label anchor
  lx: number
  ly: number
  ta: "start" | "middle" | "end"
}

// Coordinates are the real lake-entry points from the interactive map's
// GeoJSON-derived geometry (viewBox 0 0 700 555). Each marker links to that
// tributary's profile in the creek archive. The set mirrors the nine priority
// tributaries shown in the hero chart.
const CREEKS: Creek[] = [
  { name: "Scotts Creek", href: "/creek/scotts-creek", status: "active", shore: "North shore", x: 151, y: 44, lx: 151, ly: 30, ta: "middle" },
  { name: "Morrison Creek", href: "/creek/morrison", status: "quiet", shore: "North shore", x: 294, y: 110, lx: 303, ly: 102, ta: "start" },
  { name: "Forbes Creek", href: "/forbes", status: "active", shore: "West shore", x: 27, y: 227, lx: 44, ly: 219, ta: "start" },
  { name: "Manning Creek", href: "/creek/manning", status: "active", shore: "South shore", x: 45, y: 261, lx: 10, ly: 274, ta: "start" },
  { name: "Adobe Creek", href: "/adobe", status: "active", shore: "South shore", x: 121, y: 256, lx: 128, ly: 282, ta: "middle" },
  { name: "Kelsey Creek", href: "/kelsey", status: "active", shore: "South shore", x: 261, y: 271, lx: 249, ly: 263, ta: "end" },
  { name: "Cole Creek", href: "/creek/cole", status: "restore", shore: "South shore", x: 260, y: 283, lx: 272, ly: 295, ta: "start" },
  { name: "Burns Valley", href: "/burns", status: "active", shore: "East shore", x: 606, y: 416, lx: 620, ly: 410, ta: "start" },
  { name: "Seigler System", href: "/creek/seigler-system", status: "concern", shore: "East shore", x: 663, y: 459, lx: 652, ly: 474, ta: "end" },
]

const ARMS = [
  { t: "Upper Arm", x: 135, y: 118, s: 13 },
  { t: "Main Lake", x: 310, y: 218, s: 12 },
  { t: "Oaks Arm", x: 498, y: 300, s: 12 },
  { t: "Lower Arm", x: 612, y: 432, s: 11 },
]

const TOWNS = [
  { t: "Lakeport", x: 20, y: 217, lx: 20, ly: 205, ta: "middle" as const },
  { t: "Kelseyville", x: 210, y: 395, lx: 210, ly: 408, ta: "middle" as const },
  { t: "Clearlake", x: 682, y: 421, lx: 676, ly: 413, ta: "end" as const },
  { t: "Lucerne", x: 364, y: 125, lx: 364, ly: 117, ta: "middle" as const },
]

// Accurate Clear Lake outline (Lake County GIS GeoJSON, id=197), matching the
// interactive map. viewBox 0 0 700 555.
const LAKE_PATH =
  "M 138.8,39.1 L 134.8,39.1 L 128.6,47.3 L 123.1,47.4 L 122.5,52.2 L 117.2,55.7 L 109.0,48.4 L 103.2,50.0 L 101.6,52.8 L 100.3,49.9 L 98.1,50.4 L 98.3,56.4 L 84.6,68.1 L 83.5,73.7 L 78.1,78.6 L 80.9,81.5 L 68.2,81.5 L 77.0,83.1 L 69.9,84.9 L 75.7,85.2 L 71.0,85.9 L 72.9,87.0 L 68.6,87.0 L 71.8,87.9 L 68.5,90.9 L 70.4,97.1 L 65.8,107.0 L 67.5,108.5 L 63.1,109.0 L 63.8,113.2 L 60.8,116.2 L 63.0,122.0 L 67.5,122.8 L 69.6,126.0 L 66.4,124.3 L 62.6,125.2 L 59.4,131.2 L 60.4,135.4 L 55.8,137.4 L 55.2,140.9 L 49.7,141.6 L 36.3,157.8 L 40.4,163.1 L 36.9,175.9 L 39.3,180.8 L 39.1,190.0 L 37.3,194.9 L 32.3,196.4 L 33.0,198.9 L 37.3,201.6 L 36.5,204.8 L 39.2,209.3 L 36.1,211.4 L 36.4,214.4 L 37.6,212.5 L 38.0,225.9 L 42.1,230.0 L 39.7,229.8 L 40.7,231.3 L 36.6,232.6 L 37.1,236.6 L 39.0,236.1 L 36.7,238.8 L 40.4,241.0 L 39.3,243.4 L 37.2,243.2 L 39.7,244.0 L 38.0,245.9 L 39.0,254.8 L 36.9,254.6 L 36.5,249.7 L 33.3,249.7 L 35.7,250.5 L 33.0,252.2 L 36.2,254.6 L 34.7,255.7 L 33.0,254.0 L 34.2,260.9 L 36.2,256.2 L 38.9,261.5 L 37.6,255.6 L 42.7,259.5 L 41.2,261.9 L 47.1,259.6 L 50.1,260.6 L 52.7,257.5 L 57.6,258.3 L 60.3,255.8 L 62.9,259.5 L 58.4,263.4 L 60.4,266.7 L 68.1,265.2 L 69.7,268.9 L 74.5,269.6 L 76.5,266.5 L 80.6,266.5 L 78.0,263.6 L 82.6,263.3 L 92.3,271.2 L 92.5,273.4 L 95.9,273.1 L 93.6,267.5 L 98.8,260.4 L 101.7,262.1 L 101.8,267.1 L 105.6,266.8 L 105.2,264.0 L 104.2,266.6 L 102.3,266.4 L 102.3,261.4 L 107.3,262.2 L 108.8,256.7 L 110.2,266.9 L 111.0,260.7 L 113.2,260.7 L 113.8,272.0 L 113.9,261.0 L 117.8,261.7 L 116.7,268.8 L 118.0,262.9 L 122.3,264.0 L 123.0,261.9 L 118.4,261.0 L 117.6,259.2 L 112.7,259.3 L 118.4,253.2 L 121.2,256.0 L 121.0,253.6 L 124.4,255.9 L 132.5,255.5 L 140.3,258.2 L 142.7,260.9 L 146.4,261.0 L 149.4,258.8 L 149.3,264.5 L 152.9,269.5 L 149.8,263.6 L 150.5,261.1 L 150.5,263.0 L 152.5,261.8 L 152.6,259.5 L 150.9,258.5 L 150.6,260.6 L 150.9,258.0 L 148.2,256.0 L 151.9,258.2 L 155.0,257.7 L 157.5,252.1 L 160.4,251.7 L 161.0,248.1 L 157.4,245.8 L 158.1,243.6 L 164.0,247.5 L 165.2,251.5 L 165.9,255.0 L 163.9,260.3 L 165.0,272.0 L 166.8,272.3 L 165.6,265.6 L 174.3,265.1 L 165.0,264.5 L 164.8,257.6 L 166.2,262.1 L 169.5,262.9 L 173.8,262.6 L 174.0,259.7 L 176.3,260.8 L 178.1,258.5 L 176.4,267.7 L 178.8,258.9 L 179.8,261.1 L 185.0,260.2 L 180.7,258.6 L 185.5,255.2 L 186.3,261.0 L 187.2,254.7 L 189.3,256.9 L 206.8,259.4 L 207.3,271.4 L 207.6,259.5 L 210.2,258.6 L 211.5,253.6 L 215.7,252.0 L 216.9,253.6 L 214.9,256.6 L 214.9,261.9 L 229.4,268.6 L 234.3,267.7 L 238.6,269.9 L 238.8,272.4 L 239.7,270.2 L 246.2,269.1 L 249.5,265.0 L 251.8,267.2 L 250.1,269.8 L 255.0,273.5 L 259.7,269.8 L 263.5,271.1 L 262.7,272.4 L 266.1,271.6 L 260.3,283.0 L 263.6,278.9 L 266.6,278.5 L 264.7,277.4 L 267.1,274.4 L 276.4,280.2 L 282.7,279.8 L 275.8,283.8 L 267.4,279.0 L 268.3,281.4 L 275.7,284.5 L 285.2,278.9 L 283.7,283.3 L 285.8,288.5 L 278.2,291.5 L 277.6,296.3 L 279.8,299.7 L 289.8,303.2 L 297.6,316.6 L 303.0,318.8 L 321.7,314.5 L 324.3,310.9 L 320.1,305.4 L 324.0,303.7 L 327.3,305.8 L 332.8,304.4 L 337.2,302.2 L 338.4,298.4 L 342.0,296.4 L 347.5,296.9 L 351.5,300.4 L 360.1,300.5 L 364.1,306.9 L 370.0,310.4 L 379.3,310.8 L 384.7,306.8 L 387.0,302.0 L 382.0,294.8 L 385.6,289.4 L 386.5,275.3 L 379.5,270.6 L 380.4,266.2 L 410.1,263.1 L 405.7,273.6 L 397.6,273.6 L 398.3,275.0 L 408.8,275.9 L 408.6,271.0 L 413.9,277.3 L 411.3,280.5 L 407.4,278.5 L 404.1,282.1 L 407.1,293.1 L 403.6,300.5 L 402.5,310.3 L 406.2,324.8 L 405.0,329.1 L 413.0,337.7 L 420.4,337.3 L 425.1,344.7 L 426.9,344.4 L 426.4,352.6 L 435.9,356.0 L 439.1,361.0 L 446.4,366.2 L 433.9,369.4 L 432.0,376.3 L 424.6,383.2 L 426.0,391.1 L 439.2,394.3 L 437.5,400.2 L 439.9,404.8 L 451.7,410.3 L 457.4,407.2 L 462.7,407.2 L 474.7,414.9 L 479.9,409.6 L 484.0,401.0 L 495.8,398.8 L 499.5,402.2 L 509.6,406.2 L 511.2,412.2 L 514.1,414.4 L 513.0,419.0 L 518.2,421.1 L 526.5,428.5 L 525.5,433.9 L 531.0,434.9 L 529.8,438.4 L 531.2,441.3 L 543.3,442.7 L 543.8,437.8 L 547.9,435.7 L 546.9,442.7 L 549.8,445.2 L 563.9,449.2 L 572.4,445.3 L 571.8,446.5 L 574.7,445.9 L 576.5,450.6 L 585.5,454.1 L 589.1,452.9 L 592.2,447.7 L 609.2,443.3 L 612.4,439.2 L 619.7,435.0 L 626.6,439.9 L 630.0,449.4 L 625.7,453.6 L 623.2,462.6 L 631.1,462.3 L 641.8,469.7 L 637.6,488.6 L 644.9,498.4 L 643.8,500.9 L 645.3,503.9 L 647.9,506.7 L 650.9,505.0 L 650.0,502.3 L 646.7,502.5 L 647.3,498.7 L 644.3,495.4 L 645.7,494.5 L 652.9,496.6 L 649.7,496.8 L 652.7,498.3 L 652.1,502.5 L 653.5,503.3 L 655.6,500.3 L 659.0,500.2 L 653.3,494.6 L 643.6,494.3 L 640.3,487.0 L 646.9,488.1 L 651.4,486.7 L 651.8,484.3 L 656.0,484.2 L 654.3,477.9 L 649.5,474.7 L 648.9,471.4 L 660.1,471.3 L 663.9,465.1 L 662.3,463.9 L 664.5,461.8 L 663.5,459.0 L 666.8,457.9 L 666.8,455.2 L 665.1,454.8 L 667.5,453.2 L 665.0,453.2 L 663.9,445.8 L 662.2,443.4 L 660.7,444.3 L 660.6,441.7 L 650.6,438.3 L 645.0,431.5 L 636.4,427.8 L 632.0,420.9 L 632.3,416.1 L 626.3,413.2 L 630.4,410.3 L 630.7,404.1 L 625.0,404.4 L 617.9,397.5 L 612.3,398.6 L 611.2,395.1 L 608.8,399.2 L 603.6,397.9 L 598.1,391.3 L 591.0,388.6 L 588.4,389.5 L 590.0,389.4 L 589.1,392.3 L 586.4,391.9 L 577.1,383.8 L 558.0,376.0 L 553.2,376.6 L 550.6,380.0 L 552.8,376.4 L 552.5,372.7 L 542.5,367.7 L 540.9,368.2 L 541.6,370.5 L 538.6,371.6 L 534.7,370.9 L 533.8,368.9 L 529.9,369.5 L 523.3,377.8 L 520.3,374.7 L 523.9,367.6 L 522.0,363.2 L 526.1,359.6 L 529.1,352.3 L 523.6,344.0 L 516.0,341.8 L 513.7,342.9 L 517.7,343.4 L 516.6,344.7 L 510.7,342.8 L 508.2,340.1 L 507.3,334.9 L 503.0,332.4 L 504.2,329.0 L 502.8,325.9 L 497.6,326.2 L 489.8,323.2 L 478.6,314.3 L 469.1,314.0 L 465.1,316.8 L 461.8,313.5 L 453.2,310.8 L 447.8,305.0 L 459.7,305.7 L 467.7,303.6 L 470.3,304.8 L 472.6,309.8 L 484.7,308.6 L 503.9,315.2 L 517.8,315.9 L 521.7,318.9 L 518.7,320.4 L 519.7,323.4 L 525.4,326.3 L 528.7,325.5 L 531.5,328.5 L 546.7,325.1 L 557.9,327.3 L 564.7,325.4 L 570.7,326.4 L 573.8,324.1 L 582.9,325.7 L 586.7,319.1 L 584.2,311.7 L 577.6,303.4 L 579.2,301.1 L 586.2,300.6 L 590.6,297.3 L 609.5,294.2 L 611.4,288.9 L 606.5,287.1 L 609.2,285.8 L 606.3,284.5 L 609.0,280.7 L 615.9,268.3 L 609.5,266.1 L 616.6,269.8 L 609.0,280.7 L 602.3,269.3 L 597.6,271.1 L 594.5,276.2 L 578.5,269.4 L 585.7,264.2 L 579.1,267.2 L 574.3,277.2 L 557.5,276.0 L 533.6,278.3 L 497.1,276.4 L 480.5,273.6 L 469.1,268.1 L 452.7,264.9 L 449.9,266.2 L 447.5,267.4 L 420.3,246.4 L 412.9,233.9 L 405.4,226.2 L 402.4,225.8 L 380.2,233.0 L 374.2,237.3 L 363.9,236.7 L 342.5,221.6 L 341.3,219.7 L 343.1,214.1 L 332.6,198.4 L 336.2,187.0 L 327.7,173.8 L 333.6,158.1 L 331.0,146.5 L 318.8,139.2 L 312.8,131.2 L 306.7,122.5 L 295.6,111.1 L 285.4,102.2 L 272.7,84.8 L 261.3,81.5 L 250.1,71.9 L 238.7,58.9 L 195.5,43.8 L 186.3,44.0 L 177.8,41.3 L 166.0,45.0 L 151.3,45.1 L 140.2,41.9 L 138.8,39.1 Z"

// Two faint inset contours give the lake an engraved / bathymetric feel.
const CONTOUR_OUTER =
  "M 138.8,39.1 L 134.8,39.1 L 128.6,47.3 L 123.1,47.4 L 122.5,52.2 L 117.2,55.7 L 109.0,48.4 L 103.2,50.0 L 101.6,52.8 L 100.3,49.9 L 98.1,50.4 L 98.3,56.4 L 84.6,68.1 L 83.5,73.7 L 78.1,78.6 L 80.9,81.5 L 68.2,81.5 L 77.0,83.1 L 69.9,84.9 L 75.7,85.2 L 71.0,85.9 L 72.9,87.0 L 68.6,87.0 L 71.8,87.9 L 68.5,90.9 L 70.4,97.1 L 65.8,107.0 L 67.5,108.5 L 63.1,109.0 L 63.8,113.2 L 60.8,116.2 L 63.0,122.0 L 67.5,122.8 L 69.6,126.0 L 66.4,124.3 L 62.6,125.2 L 59.4,131.2 L 60.4,135.4 L 55.8,137.4 L 55.2,140.9 L 49.7,141.6 L 36.3,157.8 L 40.4,163.1 L 36.9,175.9 L 39.3,180.8 L 39.1,190.0 L 37.3,194.9 L 32.3,196.4 L 33.0,198.9 L 37.3,201.6 L 36.5,204.8 L 39.2,209.3 L 36.1,211.4 L 36.4,214.4 L 37.6,212.5 L 38.0,225.9 L 42.1,230.0 L 38.0,245.9 L 39.0,254.8 L 42.7,259.5 L 50.1,260.6 L 57.6,258.3 L 62.9,259.5 L 60.4,266.7 L 68.1,265.2 L 74.5,269.6 L 80.6,266.5 L 82.6,263.3 L 92.3,271.2 L 95.9,273.1 L 98.8,260.4 L 107.3,262.2 L 113.2,260.7 L 117.8,261.7 L 122.3,264.0 L 132.5,255.5 L 142.7,260.9 L 149.4,258.8 L 155.0,257.7 L 161.0,248.1 L 164.0,247.5 L 165.9,255.0 L 174.3,265.1 L 169.5,262.9 L 178.1,258.5 L 185.0,260.2 L 189.3,256.9 L 206.8,259.4 L 211.5,253.6 L 216.9,253.6 L 229.4,268.6 L 238.6,269.9 L 246.2,269.1 L 251.8,267.2 L 259.7,269.8 L 266.1,271.6 L 267.1,274.4 L 276.4,280.2 L 285.2,278.9 L 285.8,288.5 L 279.8,299.7 L 289.8,303.2 L 297.6,316.6 L 321.7,314.5 L 327.3,305.8 L 337.2,302.2 L 347.5,296.9 L 360.1,300.5 L 370.0,310.4 L 384.7,306.8 L 382.0,294.8 L 386.5,275.3 L 380.4,266.2 L 410.1,263.1 L 405.4,226.2 L 380.2,233.0 L 363.9,236.7 L 342.5,221.6 L 343.1,214.1 L 332.6,198.4 L 327.7,173.8 L 331.0,146.5 L 312.8,131.2 L 295.6,111.1 L 272.7,84.8 L 250.1,71.9 L 238.7,58.9 L 195.5,43.8 L 177.8,41.3 L 151.3,45.1 L 138.8,39.1 Z"

const CONTOUR_INNER =
  "M 138.8,39.1 L 98.3,56.4 L 84.6,68.1 L 70.4,97.1 L 65.8,107.0 L 60.8,116.2 L 49.7,141.6 L 36.3,157.8 L 36.9,175.9 L 39.1,190.0 L 32.3,196.4 L 38.0,225.9 L 39.0,254.8 L 50.1,260.6 L 68.1,265.2 L 92.3,271.2 L 113.8,272.0 L 142.7,260.9 L 165.0,272.0 L 206.8,259.4 L 238.8,272.4 L 266.1,271.6 L 285.8,288.5 L 297.6,316.6 L 321.7,314.5 L 360.1,300.5 L 384.7,306.8 L 386.5,275.3 L 410.1,263.1 L 405.4,226.2 L 363.9,236.7 L 332.6,198.4 L 331.0,146.5 L 295.6,111.1 L 250.1,71.9 L 195.5,43.8 L 138.8,39.1 Z"

const SHORES: Shore[] = ["North shore", "West shore", "East shore", "South shore"]

export function Watershed() {
  return (
    <section id="watershed" className="py-20 px-4 md:px-8 bg-[var(--sand)]">
      <div className="max-w-[1100px] mx-auto">
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-[var(--lake)] bg-[var(--lake-light)] px-3 py-1 rounded-full mb-4">
          Watershed
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-2">The Clear Lake watershed at a glance</h2>
        <p className="text-[var(--muted-color)] text-base max-w-[680px] mb-8 leading-relaxed">
          A dozen tributary creeks ring California&apos;s largest natural lake, and each spring the hitch run up them to
          spawn. Dots mark where the priority creeks meet the lake, colored by recent spawning status. Tap any creek
          to open its profile, or explore the full{" "}
          <Link href="/map" className="text-[var(--lake)] font-semibold hover:underline">
            interactive map
          </Link>
          .
        </p>

        <div className="relative max-w-[940px] mx-auto">
          <svg
            viewBox="0 0 700 555"
            className="w-full h-auto block"
            style={{ fontFamily: "inherit" }}
            role="group"
            aria-label="Map of Clear Lake, California. Priority spawning tributaries are marked by shore and colored by recent spawning status; each is a link to its profile."
          >
            <defs>
              <radialGradient id="ws-water" cx="40%" cy="34%" r="78%">
                <stop offset="0%" stopColor="#3fa0d8" />
                <stop offset="52%" stopColor="#1a6fa8" />
                <stop offset="100%" stopColor="#0a456e" />
              </radialGradient>
              <filter id="ws-shadow" x="-15%" y="-15%" width="130%" height="130%">
                <feDropShadow dx="0" dy="5" stdDeviation="9" floodColor="#0d4a72" floodOpacity="0.28" />
              </filter>
            </defs>

            {/* Lake — accurate Clear Lake outline */}
            <path d={LAKE_PATH} fill="url(#ws-water)" stroke="#0a456e" strokeWidth="1.5" filter="url(#ws-shadow)" />

            {/* Depth contours */}
            <g fill="none" stroke="#cfeaff" strokeWidth="1.1">
              <path d={CONTOUR_OUTER} opacity="0.2" />
              <path
                d={CONTOUR_INNER}
                opacity="0.13"
                transform="translate(350,273) scale(0.62) translate(-350,-273)"
              />
            </g>
            <path d={LAKE_PATH} fill="none" stroke="#bfe6ff" strokeWidth="1" opacity="0.4" />

            {/* Mt. Konocti */}
            <path d="M 200,452 L 220,436 L 240,452 Z" fill="#a7b59a" opacity="0.7" aria-hidden="true" />
            <text x="220" y="465" textAnchor="middle" fontSize="10" fontStyle="italic" fill="#7d8a6b" aria-hidden="true">
              Mt. Konocti
            </text>

            {/* Towns for geographic context */}
            {TOWNS.map((t) => (
              <g key={t.t} aria-hidden="true">
                <circle cx={t.x} cy={t.y} r="3.2" fill="#b0895a" />
                <text x={t.lx} y={t.ly} textAnchor={t.ta} fontSize="9" fontWeight="600" fill="#8a6f4a">
                  {t.t}
                </text>
              </g>
            ))}

            {/* Arm labels */}
            {ARMS.map((a) => (
              <text
                key={a.t}
                x={a.x}
                y={a.y}
                textAnchor="middle"
                fontSize={a.s}
                fontStyle="italic"
                fill="#e2f3ff"
                opacity="0.92"
                letterSpacing="0.5"
                aria-hidden="true"
              >
                {a.t}
              </text>
            ))}

            {/* Creek markers — each links to its profile */}
            {CREEKS.map((c, i) => (
              <Link key={c.name} href={c.href} aria-label={`${c.name} — ${STATUS_LABEL[c.status]}`} className="ws-creek">
                {c.status === "active" && (
                  <circle
                    className="ws-halo"
                    cx={c.x}
                    cy={c.y}
                    r="11"
                    fill={STATUS_COLOR[c.status]}
                    style={{ animationDelay: `${(i % 5) * 0.4}s` }}
                  />
                )}
                <circle cx={c.x} cy={c.y} r="5.5" fill={STATUS_COLOR[c.status]} stroke="#fff" strokeWidth="2" />
                <text
                  x={c.lx}
                  y={c.ly}
                  textAnchor={c.ta}
                  fontSize="13"
                  fontWeight="600"
                  paintOrder="stroke"
                  strokeWidth="3.5"
                  style={{ fill: "var(--text)", stroke: "var(--sand)" }}
                >
                  {c.name}
                </text>
              </Link>
            ))}
          </svg>
        </div>

        <div className="flex justify-center mt-6">
          <Link
            href="/map"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--lake)] text-white text-sm font-semibold hover:bg-[var(--lake-dark)] transition-colors"
          >
            Open the full interactive map <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Screen-reader equivalent of the map data */}
        <div className="sr-only">
          <h3>Priority tributaries by shore</h3>
          {SHORES.map((shore) => (
            <div key={shore}>
              <h4>{shore}</h4>
              <ul>
                {CREEKS.filter((c) => c.shore === shore).map((c) => (
                  <li key={c.name}>
                    {c.name} — {STATUS_LABEL[c.status]}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-6 text-xs text-[var(--muted-color)]">
          {(Object.keys(STATUS_LABEL) as Status[]).map((s) => (
            <span key={s} className="inline-flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: STATUS_COLOR[s] }} aria-hidden="true" />
              {STATUS_LABEL[s]}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

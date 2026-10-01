import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          <strong>Armaan Nain (silver)</strong> // Exploit Development & Security Research
        </p>
        <p style={{ color: "#484f60", fontSize: "0.75rem" }}>
          [ SEC-OPS MONITORING ACTIVE // © {year} ALL RIGHTS RESERVED ]
        </p>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
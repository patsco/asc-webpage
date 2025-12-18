const Footer = () => {
  return <footer className="bg-foreground/5 border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-muted-foreground text-sm">Abiir Scott Rossi – Utbildningsingenjör. Med systematik och vetenskapliga arbetssätt stöttar jag dagens skola.</p>
        <p className="text-muted-foreground text-sm mt-2">Östersund, Jämtland</p>
        <p className="text-muted-foreground text-xs mt-4">
          © {new Date().getFullYear()} Abiir Scott Rossi. Alla rättigheter förbehållna.
        </p>
        <p className="text-muted-foreground text-xs mt-1">
          Alla bilder © Abiir Scott Rossi
        </p>
      </div>
    </footer>;
};
export default Footer;
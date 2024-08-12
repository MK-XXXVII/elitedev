import { createClient } from "@/prismicio";
import { asText } from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicNextImage } from "@prismicio/next";
import { Bounded } from "@/components/Bounded";

async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const navigation = await client.getSingle("navigation");

  return (
    <Bounded as="header" yPadding="sm">
      <div className="flex flex-wrap items-center justify-between gap-y-2 leading-none">
        <PrismicNextLink
          href="/"
          className="text-2xl md:text-3xl font-semibold tracking-tight"
        >
          <div className="flex items-center">
            <PrismicNextImage
              field={settings.data.siteLogo}
              className="mr-2 w-12 h-12 md:w-16 md:h-16" // Add some right margin to the logo
            />
            <div className="whitespace-nowrap">
              <PrismicText field={settings.data.siteTitle} />
            </div>
          </div>
        </PrismicNextLink>
        <nav>
          <ul className="flex flex-wrap gap-6 md:gap-10">
            {navigation.data?.links.map((item) => (
              <li
                key={asText(item.label)}
                className="font-semibold tracking-tight"
              >
                <PrismicNextLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Bounded>
  );
}

export default Header;
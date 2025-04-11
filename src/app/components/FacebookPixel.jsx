"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

export default function FacebookPixel() {
    const pathname = usePathname();

    // Track route changes as new PageViews
    useEffect(() => {
        if (typeof window.fbq !== "undefined") {
            fbq("track", "PageView");
        }
    }, [pathname]);

    return (
        <Script id="facebook-pixel" strategy="afterInteractive">
            {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');

                fbq('init', '2393820357650116');
                fbq('track', 'PageView');
            `}
        </Script>
    );
}

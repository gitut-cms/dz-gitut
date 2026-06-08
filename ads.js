/**
 * Gitut Ads Script - Managed for DZ
 * This file is dynamically generated. Do not edit directly.
 */
(function() {
    function decodeArabicBase64(b64) {
        if (!b64) return '';
        try {
            const binString = atob(b64);
            const bytes = new Uint8Array(binString.length);
            for (let i = 0; i < binString.length; i++) {
                bytes[i] = binString.charCodeAt(i);
            }
            return new TextDecoder('utf-8').decode(bytes);
        } catch(e) {
            try {
                return decodeURIComponent(escape(atob(b64)));
            } catch(err) {
                return b64;
            }
        }
    }

    const rawData = [{"id":"a4b187c1-1038-4472-82de-576191e3860b","placements":["DASHBOARD_TOP","SERVICE_STEP_2","PDF_INTERSTITIAL"],"html":null,"title":"2LPYrNmEINmF2KzYp9mG2Kcg2YjYp9io2K/YoyDZg9iz2Kgg2KfZhNmF2KfZhCDZhdmGINi52LHYtiDYp9mE2KfYudmE2KfZhtin2Kog2LnZhNmJINmF2YjZgti52YM=","content":"2KfZhti22YUg2KXZhNmJINmF2YTYp9mK2YrZhiDZhdmE2KfZitmK2YYg2KfZhNmF2LPYqtmC2YTZitmGINmIINit2YjZhCDZhdmI2YLYudmDINil2YTZiSDYo9ix2KjYp9itINit2YLZitmC2YrYqQ==","imageUrl":"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUQF3NVLbFaB7rqQwKAP9G2LPzjQo1yqeaqZmeAKz0i9hrKPUz_8XIgNWSEJRIc-oq-Pan26mAlW2xAHDDtDIL641aM-LEh4WwKxI-LRLwCd7DSyJNyknKCenkC32Eue6g-O2PMkinxzvoIkTzaHuI-gHNhBmNzWIUnE75yFntwfaBRj2oDLc0gE0f0kM/s16000/4c95cc03-1a95-4906-8687-b2a57c24011f.png","link":"https://monetag.com/?ref_id=nVvX","displayStyle":"overlay","adFormat":"overlay","color":"blue","buttonText":"fNiz2KzZhCDYp9mE2KfZhg==","isEncoded":true}];
    window.GITUT_ADS = rawData.map(ad => {
        if (ad.isEncoded) {
            return {
                ...ad,
                title: decodeArabicBase64(ad.title),
                content: decodeArabicBase64(ad.content),
                buttonText: decodeArabicBase64(ad.buttonText),
                html: ad.html ? decodeArabicBase64(ad.html) : null
            };
        }
        return ad;
    });

    console.log('Gitut Ads loaded and decoded for dz');

    // Event to notify that ads are ready
    const event = new CustomEvent('gitut_ads_ready', { detail: window.GITUT_ADS });
    window.dispatchEvent(event);

    // Auto-inject logic for specific placements
    window.injectGitutAds = function() {
        const adContainers = document.querySelectorAll('[data-gitut-ad], .dynamic-ad-container');
        adContainers.forEach(container => {
            const placement = container.getAttribute('data-gitut-ad') || container.getAttribute('data-placement');
            if (!placement) return;
            const match = window.GITUT_ADS.find(ad => ad.placements.includes(placement));
            if (!match) {
                container.innerHTML = '';
                container.style.display = 'none';
                return;
            }
            container.style.display = 'block';
            if (match.html) {
                container.innerHTML = match.html;
                return;
            }

            const isRtl = document.documentElement.dir === 'rtl' || document.documentElement.lang === 'ar';
            const colorMap = { blue: '#2563eb', orange: '#ea580c' };
            const color = colorMap[match.color] || colorMap.blue;
            const format = match.adFormat || 'standard';

            if (format === 'minimal') {
                const imgHtml = match.imageUrl ? '<img src="' + match.imageUrl + '" style="width:48px;height:48px;object-fit:cover;border-radius:8px;margin-' + (isRtl ? 'left' : 'right') + ':12px;box-shadow:0 2px 4px rgba(0,0,0,0.05);" referrerPolicy="no-referrer"/>' : '';
                container.innerHTML = '<div style="margin:16px 0;"><a href="' + match.link + '" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;padding:12px;border:1px solid #e5e7eb;border-radius:12px;background:#f9fafb;text-decoration:none;color:inherit;transition:all 0.2s ease;">' +
                    imgHtml +
                    '<div style="flex-grow:1;text-align:' + (isRtl ? 'right' : 'left') + '">' +
                        '<div style="font-size:10px;color:#9ca3af;font-weight:bold;text-transform:uppercase;margin-bottom:2px">' + (isRtl ? 'إعلان مروّج' : 'SPONSORED') + '</div>' +
                        '<div style="font-weight:bold;font-size:14px;color:#1f2937;margin-bottom:2px;line-height:1.2;">' + match.title + '</div>' +
                        '<div style="font-size:12px;color:#6b7280;line-height:1.3;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden">' + match.content + '</div>' +
                    '</div>' +
                    '<div style="font-size:16px;color:#cbd5e1;margin-' + (isRtl ? 'right' : 'left') + ':8px">' + (isRtl ? '←' : '→') + '</div>' +
                '</a></div>';
            } else if (format === 'banner') {
                const imgHtml = match.imageUrl ? '<img src="' + match.imageUrl + '" style="width:100%;height:140px;object-fit:cover;display:block;opacity:0.85;" referrerPolicy="no-referrer"/>' : '<div style="height:140px;background:#1e293b;"></div>';
                container.innerHTML = '<div style="margin:16px 0;"><a href="' + match.link + '" target="_blank" rel="noopener noreferrer" style="display:block;border-radius:16px;overflow:hidden;position:relative;text-decoration:none;box-shadow:0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);background:#000;">' +
                    imgHtml +
                    '<div style="position:absolute;top:12px;' + (isRtl ? 'left' : 'right') + ':12px;">' +
                        '<span style="background:rgba(255,255,255,0.9);color:#000;padding:4px 8px;border-radius:6px;font-size:10px;font-weight:900;letter-spacing:0.5px;box-shadow:0 2px 4px rgba(0,0,0,0.2);">' + (isRtl ? 'إعلان AD' : 'AD') + '</span>' +
                    '</div>' +
                    '<div style="position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent, rgba(0,0,0,0.9));padding:20px;color:white;text-align:' + (isRtl ? 'right' : 'left') + '">' +
                        '<h3 style="margin:0 0 4px 0;font-size:18px;font-weight:bold;text-shadow:0 2px 4px rgba(0,0,0,0.5);">' + match.title + '</h3>' +
                        '<p style="margin:0;font-size:13px;opacity:0.9;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-shadow:0 1px 2px rgba(0,0,0,0.5);">' + match.content + '</p>' +
                    '</div>' +
                '</a></div>';
            } else if (format === 'card') {
                const imgHtml = match.imageUrl ? '<div style="position:relative;"><img src="' + match.imageUrl + '" style="width:100%;height:160px;object-fit:cover;display:block;" referrerPolicy="no-referrer"/><div style="position:absolute;top:10px;' + (isRtl ? 'right' : 'left') + ':10px;background:rgba(0,0,0,0.6);color:white;padding:2px 8px;border-radius:4px;font-size:11px;font-weight:bold;backdrop-filter:blur(4px);">' + (isRtl ? 'إعلان ممول' : 'Sponsored') + '</div></div>' : '<div style="background:#f3f4f6;padding:4px 8px;font-size:11px;font-weight:bold;color:#6b7280;text-align:center;">' + (isRtl ? 'إعلان ممول' : 'Sponsored') + '</div>';
                container.innerHTML = '<div style="margin:16px 0;"><a href="' + match.link + '" target="_blank" rel="noopener noreferrer" style="display:flex;flex-direction:column;border:1px solid #e5e7eb;border-radius:16px;background:#ffffff;text-decoration:none;color:inherit;overflow:hidden;box-shadow:0 10px 15px -3px rgba(0,0,0,0.1);transition:transform 0.2s;">' +
                    imgHtml +
                    '<div style="padding:16px;text-align:' + (isRtl ? 'right' : 'left') + '">' +
                        '<h3 style="margin:0 0 8px 0;font-size:16px;font-weight:bold;color:#111827;">' + match.title + '</h3>' +
                        '<p style="margin:0 0 16px 0;font-size:14px;color:#4b5563;line-height:1.5;">' + match.content + '</p>' +
                        '<div style="display:inline-block;background:' + color + ';color:white;padding:8px 16px;border-radius:8px;font-size:13px;font-weight:bold;">' + (match.buttonText || (isRtl ? 'اكتشف الآن' : 'Discover Now')) + '</div>' +
                    '</div>' +
                '</a></div>';
            } else {
                // standard
                const imgHtml = match.imageUrl ? '<div style="position:relative;flex-shrink:0;width:120px;height:120px;margin-' + (isRtl ? 'left' : 'right') + ':16.6vw;max-width:140px;overflow:hidden;border-radius:12px;background:#f3f4f6;"><img src="' + match.imageUrl + '" style="width:100%;height:100%;object-fit:cover;" referrerPolicy="no-referrer"/><div style="position:absolute;top:8px;' + (isRtl ? 'right' : 'left') + ':8px;background:rgba(0,0,0,0.6);color:white;padding:2px 6px;border-radius:4px;font-size:9px;font-weight:bold;letter-spacing:0.5px;">AD</div></div>' : '';
                container.innerHTML = '<div style="margin:16px 0;"><a href="' + match.link + '" target="_blank" rel="noopener noreferrer" style="display:block;border:1px solid #e2e8f0;border-radius:16px;background:#ffffff;padding:16px;text-decoration:none;color:inherit;box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);transition:all 0.2s ease;">' +
                    '<div style="display:flex;align-items:center;flex-direction:' + (isRtl ? 'row-reverse' : 'row') + '">' +
                        imgHtml +
                        '<div style="flex-grow:1;text-align:' + (isRtl ? 'right' : 'left') + ';">' +
                            '<h3 style="margin:0 0 6px 0;font-size:16px;font-weight:bold;color:#0f172a;">' + match.title + '</h3>' +
                            '<p style="margin:0 0 12px 0;font-size:13px;color:#475569;line-height:1.5;">' + match.content + '</p>' +
                            '<div style="display:flex;align-items:center;justify-content:space-between;flex-direction:' + (isRtl ? 'row-reverse' : 'row') + '">' +
                                '<span style="font-weight:bold;font-size:13px;color:' + color + ';">' + (match.buttonText || (isRtl ? 'اكتشف الآن' : 'Discover Now')) + ' ' + (isRtl ? '←' : '→') + '</span>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</a></div>';
            }
        });
    };
    window.refreshAds = window.injectGitutAds;

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', window.injectGitutAds);
    else window.injectGitutAds();
})();
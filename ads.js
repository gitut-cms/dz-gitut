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

    const rawData = [{"id":"3272b43a-d142-44fd-b450-8fe15b766287","placements":["DASHBOARD_TOP","POPUP_DYNAMIC_DOCS","POPUP_BLOG","POPUP_LISTS"],"html":null,"title":"2KfZhti02KYg2YXYqtis2LEg2KfZhNmD2KrYsdmI2YbZiiDYp9it2KrYsdin2YHZig==","content":"2YXYqtin2KzYsSDYp9it2KrYsdin2YHZitipINiw2KfYqiDYqtit2YPZhSDZg9in2YXZhCDZgdmKINin2YTYqti12YXZitmFINmIINin2YTYt9mE2KjYp9iqINio2LPYudixIDEwMCDYr9mI2YTYp9ixINmF2Lkg2KfZhNiv2YjZhdmK2YYhISE=","imageUrl":"https://blogger.googleusercontent.com/img/a/AVvXsEjl3Vkm-eDMf1KbvXADBT3jvshjIZ9mqUk1un-vW2UHzhaU5x-txBUiFbNZ0t1fQQOsDFkwglfGxNgkLXBCFZeLsVXju3DNrX1nekhr4wANfc0QkNAdAJK4iozop3F4nozg13xcAxYFA-yrkStSGgEr25lbBquc37Re_wenpZj9b0tyqsR14K-eanT4zOY=s16000","link":"https://www.facebook.com/profile.php?id=61590710461276","displayStyle":"overlay","adFormat":"standard","color":"blue","buttonText":"2KfYt9mE2Kgg2KfZhNin2YY=","isPopup":1,"popupDelay":3,"popupStyle":"modern_light","isEncoded":true},{"id":"c977950a-40e8-4666-bfc4-6637de9c01ea","placements":["DASHBOARD_TOP","BLOG_POST_RELATED_BOTTOM"],"html":null,"title":"2KfZhti02KYg2YXYqtis2LEg2KfZhNmD2KrYsdmI2YbZiiDYp9it2KrYsdin2YHZig==","content":"2YXYqtin2KzYsSDYp9it2KrYsdin2YHZitipINiw2KfYqiDYqtit2YPZhSDZg9in2YXZhCDZgdmKINin2YTYqti12YXZitmFINmIINin2YTYt9mE2KjYp9iqINio2LPYudixIDEwMCDYr9mI2YTYp9ixINmF2Lkg2KfZhNiv2YjZhdmK2YYhISE=","imageUrl":"https://blogger.googleusercontent.com/img/a/AVvXsEjl3Vkm-eDMf1KbvXADBT3jvshjIZ9mqUk1un-vW2UHzhaU5x-txBUiFbNZ0t1fQQOsDFkwglfGxNgkLXBCFZeLsVXju3DNrX1nekhr4wANfc0QkNAdAJK4iozop3F4nozg13xcAxYFA-yrkStSGgEr25lbBquc37Re_wenpZj9b0tyqsR14K-eanT4zOY=s16000","link":"https://www.facebook.com/profile.php?id=61590710461276","displayStyle":"overlay","adFormat":"standard","color":"blue","buttonText":"2KfYt9mE2Kgg2KfZhNin2YY=","isPopup":false,"popupDelay":3,"popupStyle":"modern_light","isEncoded":true}];
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

    function trackAdClick(ad, typeOrPlacement) {
        try {
            const countryArabic = {
                'us': 'امريكا',
                'sa': 'السعودية',
                'eg': 'مصر',
                'ma': 'المغرب',
                'ae': 'الامارات',
                'bh': 'البحرين',
                'kw': 'الكويت',
                'om': 'عمان',
                'qa': 'قطر',
                'jo': 'الاردن',
                'iq': 'العراق',
                'lb': 'لبنان',
                'ps': 'فلسطين',
                'ye': 'اليمن',
                'ly': 'ليبيا',
                'tn': 'تونس',
                'dz': 'الجزائر',
                'sd': 'السودان',
                'tr': 'تركيا',
                'global': 'عالمي'
            }['dz'] || 'عالمي';

            let pageTypeAr = '';
            const pageType = window.PAGE_TYPE || '';
            if (pageType === 'تعبئة_طلب' || pageType === 'عرض_طلب_ثابت') {
                pageTypeAr = 'المستندات_الديناميكية';
            } else if (pageType === 'قائمة_الخدمات' || pageType === 'قوائم_الخدمات_والمدونة') {
                pageTypeAr = 'قائمة_الخدمات';
            } else if (pageType === 'المدونة') {
                pageTypeAr = 'قوائم_المدونة';
            } else if (pageType === 'تفاصيل_التدوينة') {
                pageTypeAr = 'المدونة';
            } else {
                pageTypeAr = 'صفحة_أخرى';
            }

            let categoryAr = 'إعلان';
            if (typeOrPlacement === 'POPUP' || (typeOrPlacement && typeOrPlacement.includes('POPUP'))) {
                categoryAr = 'نافذة_منبثقة';
            } else if (typeOrPlacement === 'BLOG_SIDEBAR' || typeOrPlacement === 'SERVICE_SIDEBAR' || (typeOrPlacement && typeOrPlacement.includes('SIDEBAR'))) {
                categoryAr = 'الشريط_الجانبي';
            } else if (typeOrPlacement) {
                categoryAr = typeOrPlacement.toLowerCase()
                    .replace('top', 'أعلى')
                    .replace('bottom', 'أسفل')
                    .replace('_', ' ');
            }

            const eventName = 'ضغط_اعلان_' + pageTypeAr + '_' + categoryAr + '_' + countryArabic;
            const normalizedEventName = eventName.replace(/s+/g, '_').replace(/_+/g, '_');

            console.log('Tracking Event:', normalizedEventName, ad.title);

            if (typeof window.gtag === 'function') {
                window.gtag('event', normalizedEventName, {
                    'event_category': 'إعلانات_جيتوت',
                    'event_label': ad.title || 'بدون_عنوان',
                    'value': 1,
                    'ad_id': ad.id,
                    'ad_title': ad.title,
                    'placement': typeOrPlacement || 'غير_محدد'
                });
            }
            
            if (window.dataLayer && Array.isArray(window.dataLayer)) {
                window.dataLayer.push({
                    'event': normalizedEventName,
                    'ad_category': 'إعلانات_جيتوت',
                    'ad_title': ad.title,
                    'ad_id': ad.id,
                    'ad_placement': typeOrPlacement
                });
            }
        } catch(e) {
            console.error('Error tracking ad click:', e);
        }
    }

    // Event to notify that ads are ready
    const event = new CustomEvent('gitut_ads_ready', { detail: window.GITUT_ADS });
    window.dispatchEvent(event);

    // Popup implementation
    function showGitutPopup(ad) {
        if (!ad) return;
        const isRtl = document.documentElement.dir === 'rtl' || document.documentElement.lang === 'ar';
        const colorMap = { blue: '#2563eb', orange: '#ea580c' };
        const color = colorMap[ad.color] || colorMap.blue;
        const style = ad.popupStyle || 'modern_light';

        const popupId = 'gitut-popup-' + ad.id;
        if (document.getElementById(popupId)) return; // Avoid duplicates

        // Create overlay/wrapper element
        const wrapper = document.createElement('div');
        wrapper.id = popupId;
        wrapper.style.position = 'fixed';
        wrapper.style.zIndex = '99999';
        wrapper.style.transition = 'opacity 0.4s ease';
        wrapper.style.opacity = '0';

        const styleElement = document.createElement('style');
        styleElement.textContent = 
            '#' + popupId + ' .close-gitut-popup:hover {' +
                'color: ' + (style === 'dark_elegant' ? '#f43f5e' : (style === 'fullscreen' ? '#ffffff' : '#64748b')) + ' !important;' +
                'background: ' + (style === 'fullscreen' ? 'rgba(255,255,255,0.2)' : 'none') + ' !important;' +
            '}' +
            '#' + popupId + ' .gitut-popup-btn {' +
                'transition: all 0.2s ease !important;' +
            '}' +
            '#' + popupId + ' .gitut-popup-btn:hover {' +
                'transform: ' + (style === 'promo_banner' ? 'scale(1.03)' : (style === 'fullscreen' ? 'translateY(-2px)' : 'translateY(-1px)')) + ' !important;' +
                'box-shadow: ' + (style === 'fullscreen' ? '0 12px 30px ' + color + '70' : '0 8px 22px ' + color + '30') + ' !important;' +
            '}';
        wrapper.appendChild(styleElement);

        let htmlContent = '';

        if (style === 'promo_banner') {
            // Floating Bottom Banner / Bar
            wrapper.style.bottom = '20px';
            wrapper.style.left = '50%';
            wrapper.style.transform = 'translateX(-50%) translateY(20px)';
            wrapper.style.width = '90%';
            wrapper.style.maxWidth = '850px';
            wrapper.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

            const imgHtml = ad.imageUrl ? '<img src="' + ad.imageUrl + '" style="width:70px;height:70px;object-fit:cover;border-radius:12px;margin-' + (isRtl ? 'left' : 'right') + ':16px;box-shadow:0 4px 10px rgba(0,0,0,0.06);" referrerPolicy="no-referrer"/>' : '';

            htmlContent = 
                '<div style="background:#ffffff; position:relative; display:flex; align-items:center; border:1px solid #e1e8f0; border-radius:30px; box-shadow:0 15px 40px rgba(15,23,42,0.15); padding:16px 20px; width:100%; font-family:inherit;">' +
                    '<button class="close-gitut-popup" style="position:absolute; top:12px; ' + (isRtl ? 'left' : 'right') + ':16px; background:none; border:none; cursor:pointer; color:#94a3b8; font-size:18px; width:24px; height:24px; display:flex; align-items:center; justify-content:center; transition:color 0.2s;">✕</button>' +
                    '<div style="display:flex; align-items:center; flex-grow:1; flex-direction:' + (isRtl ? 'row-reverse' : 'row') + '; margin-' + (isRtl ? 'left' : 'right') + ':40px; width:100%">' +
                        '<div style="display:flex; align-items:center; flex-grow:1; ' + (isRtl ? 'text-align:right' : 'text-align:left') + '; flex-direction:' + (isRtl ? 'row-reverse' : 'row') + '; gap:16px">' +
                            imgHtml +
                            '<div style="flex-grow:1; margin-top: 4px;">' +
                                '<div style="font-size:10px; color:#94a3b8; font-weight:800; text-transform:uppercase; margin-bottom:2px; letter-spacing:0.05em;">' + (isRtl ? 'إعلان مروّج' : 'PROMOTED') + '</div>' +
                                '<h3 style="margin:0 0 4px 0; font-size:15px; font-weight:800; color:#0f172a; line-height:1.2;">' + ad.title + '</h3>' +
                                '<p style="margin:0; font-size:12px; color:#475569; line-height:1.4; display:-webkit-box; -webkit-line-clamp:1; -webkit-box-orient:vertical; overflow:hidden;">' + ad.content + '</p>' +
                            '</div>' +
                        '</div>' +
                        '<a href="' + ad.link + '" target="_blank" rel="noopener noreferrer" class="gitut-popup-btn" style="flex-shrink:0; background:' + color + '; color:white; padding:10px 22px; border-radius:12px; font-size:13px; font-weight:800; text-decoration:none; white-space:nowrap; box-shadow:0 4px 12px ' + color + '40; transition:transform 0.2s; margin-' + (isRtl ? 'right' : 'left') + ':16px;">' + (ad.buttonText || (isRtl ? 'اكتشف الآن' : 'Discover Now')) + '</a>' +
                    '</div>' +
                '</div>';
        } else if (style === 'fullscreen') {
            // Immersive Fullscreen Page Style
            wrapper.style.inset = '0';
            wrapper.style.background = 'rgba(15, 23, 42, 0.98)';
            wrapper.style.display = 'flex';
            wrapper.style.alignItems = 'center';
            wrapper.style.justifyContent = 'center';
            wrapper.style.padding = '24px';

            const imgHtml = ad.imageUrl ? '<img src="' + ad.imageUrl + '" style="width:100%; max-height:350px; object-fit:cover; border-radius:24px; margin-bottom:24px; box-shadow:0 10px 30px rgba(0,0,0,0.3);" referrerPolicy="no-referrer"/>' : '';

            htmlContent = 
                '<div class="gitut-popup-card" style="position:relative; width:100%; max-width:650px; text-align:center; color:white; font-family:inherit; transition:transform 0.4s ease; transform:scale(0.95);">' +
                    '<button class="close-gitut-popup" style="position:absolute; top:-40px; ' + (isRtl ? 'left' : 'right') + ':0px; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); cursor:pointer; color:white; font-size:18px; width:36px; height:36px; border-radius:50%; display:flex; align-items:center; justify-content:center; transition:background 0.2s;">✕</button>' +
                    imgHtml +
                    '<div style="font-size:11px; color:' + color + '; font-weight:900; text-transform:uppercase; margin-bottom:8px; letter-spacing:0.1em;">' + (isRtl ? 'إعلان ترويجي مميز' : 'FEATURED PROMOTION') + '</div>' +
                    '<h2 style="margin:0 0 12px 0; font-size:32px; font-weight:900; line-height:1.2; text-shadow:0 2px 4px rgba(0,0,0,0.5);">' + ad.title + '</h2>' +
                    '<p style="margin:0 0 32px 0; font-size:16px; color:#94a3b8; line-height:1.6; max-width:500px; margin-left:auto; margin-right:auto;">' + ad.content + '</p>' +
                    '<a href="' + ad.link + '" target="_blank" rel="noopener noreferrer" class="gitut-popup-btn" style="display:inline-block; background:' + color + '; color:white; padding:14px 40px; border-radius:16px; font-size:16px; font-weight:900; text-decoration:none; box-shadow:0 8px 25px ' + color + '50; transition:all 0.2s;">' + (ad.buttonText || (isRtl ? 'اكتشف الآن' : 'Discover Now')) + '</a>' +
                '</div>';
        } else {
            // Modal overlays (modern_light, dark_elegant, glassmorphism)
            wrapper.style.inset = '0';
            wrapper.style.display = 'flex';
            wrapper.style.alignItems = 'center';
            wrapper.style.justifyContent = 'center';
            wrapper.style.padding = '20px';

            // Click shadow to close wrapper
            const overlayBackdrop = document.createElement('div');
            overlayBackdrop.style.position = 'absolute';
            overlayBackdrop.style.inset = '0';
            overlayBackdrop.style.cursor = 'pointer';

            if (style === 'glassmorphism') {
                overlayBackdrop.style.background = 'rgba(15, 23, 42, 0.4)';
                overlayBackdrop.style.backdropFilter = 'blur(12px)';
                overlayBackdrop.style.webkitBackdropFilter = 'blur(12px)';
            } else {
                overlayBackdrop.style.background = 'rgba(15, 23, 42, 0.6)';
                overlayBackdrop.style.backdropFilter = 'blur(4px)';
                overlayBackdrop.style.webkitBackdropFilter = 'blur(4px)';
            }
            wrapper.appendChild(overlayBackdrop);

            let cardStyles = '';
            let titleColor = '';
            let contentColor = '';
            let badgeStyle = '';

            if (style === 'dark_elegant') {
                cardStyles = 'background:#0f172a; color:#ffffff; border:1px solid rgba(255,255,255,0.15); box-shadow:0 25px 50px -12px rgba(0,0,0,0.5);';
                titleColor = '#ffffff';
                contentColor = '#94a3b8';
                badgeStyle = 'background:rgba(255,255,255,0.1); color:#94a3b8; border:1px solid rgba(255,255,255,0.1);';
            } else if (style === 'glassmorphism') {
                cardStyles = 'background:rgba(255, 255, 255, 0.15); backdrop-filter:blur(25px); -webkit-backdrop-filter:blur(25px); color:#ffffff; border:1px solid rgba(255,255,255,0.25); box-shadow:0 30px 60px rgba(0,0,0,0.3);';
                titleColor = '#ffffff';
                contentColor = '#e2e8f0';
                badgeStyle = 'background:rgba(255,255,255,0.2); color:#ffffff; border:1px solid rgba(255,255,255,0.1);';
            } else {
                // modern_light
                cardStyles = 'background:#ffffff; color:#0f172a; border:1px solid #e2e8f0; box-shadow:0 30px 60px -15px rgba(15,23,42,0.2);';
                titleColor = '#0f172a';
                contentColor = '#475569';
                badgeStyle = 'background:#f1f5f9; color:#64748b; border:1px solid #e2e8f0;';
            }

            const imgHtml = ad.imageUrl ? '<div style="width:100%; height:200px; overflow:hidden; border-radius:18px; margin-bottom:18px; background:#f1f5f9; position:relative;"><img src="' + ad.imageUrl + '" style="width:100%; height:100%; object-fit:cover;" referrerPolicy="no-referrer"/><div style="position:absolute; top:12px; ' + (isRtl ? 'right' : 'left') + ':12px; ' + badgeStyle + ' padding:3px 10px; border-radius:6px; font-size:10px; font-weight:800; text-transform:uppercase;">' + (isRtl ? 'إعلان مروّج' : 'SPONSORED') + '</div></div>' : '<div style="display:inline-block; ' + badgeStyle + ' padding:4px 12px; border-radius:6px; font-size:10px; font-weight:800; text-transform:uppercase; margin-bottom:12px; width:fit-content;">' + (isRtl ? 'إعلان مروّج' : 'SPONSORED') + '</div>';

            htmlContent = 
                '<div class="gitut-popup-card" style="' + cardStyles + ' position:relative; width:100%; max-width:440px; border-radius:28px; padding:24px; font-family:inherit; transition:transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); transform:scale(0.9); text-align:' + (isRtl ? 'right' : 'left') + ';">' +
                    '<button class="close-gitut-popup" style="position:absolute; top:20px; ' + (isRtl ? 'left' : 'right') + ':20px; background:none; border:none; cursor:pointer; color:#94a3b8; font-size:22px; width:28px; height:28px; display:flex; align-items:center; justify-content:center; transition:color 0.2s; z-index:100;">✕</button>' +
                    imgHtml +
                    '<h3 style="margin:0 0 8px 0; font-size:20px; font-weight:800; color:' + titleColor + '; line-height:1.3;">' + ad.title + '</h3>' +
                    '<p style="margin:0 0 24px 0; font-size:14px; color:' + contentColor + '; line-height:1.5;">' + ad.content + '</p>' +
                    '<a href="' + ad.link + '" target="_blank" rel="noopener noreferrer" class="gitut-popup-btn" style="display:block; text-align:center; background:' + color + '; color:white; padding:12px; border-radius:14px; font-size:14px; font-weight:800; text-decoration:none; box-shadow:0 6px 18px ' + color + '30; transition:all 0.2s;">' + (ad.buttonText || (isRtl ? 'اكتشف الآن' : 'Discover Now')) + '</a>' +
                '</div>';
        }

        const container = document.createElement('div');
        container.innerHTML = htmlContent;
        wrapper.appendChild(container.firstChild);

        document.body.appendChild(wrapper);

        // Force browser paint, then animate in
        setTimeout(() => {
            wrapper.style.opacity = '1';
            const card = wrapper.querySelector('.gitut-popup-card');
            if (card) {
                card.style.transform = 'scale(1)';
            }
            if (style === 'promo_banner') {
                wrapper.style.transform = 'translateX(-50%) translateY(0)';
            }
        }, 50);

        // Dismiss function
        const dismissPopup = () => {
            wrapper.style.opacity = '0';
            const card = wrapper.querySelector('.gitut-popup-card');
            if (card) {
                card.style.transform = 'scale(0.95)';
            }
            if (style === 'promo_banner') {
                wrapper.style.transform = 'translateX(-50%) translateY(20px)';
            }
            setTimeout(() => {
                if (wrapper.parentNode) {
                    wrapper.parentNode.removeChild(wrapper);
                }
            }, 400);
        };

        // Attach dismiss handles
        const closeBtn = wrapper.querySelector('.close-gitut-popup');
        if (closeBtn) closeBtn.onclick = dismissPopup;
        
        const backdrop = wrapper.querySelector('div:first-child');
        if (backdrop && backdrop !== container.firstChild) {
            backdrop.onclick = dismissPopup;
        }

        // Attach click tracker to elements in the popup
        wrapper.querySelectorAll('a, button').forEach(el => {
            if (el.classList.contains('close-gitut-popup')) return;
            el.addEventListener('click', () => {
                trackAdClick(ad, 'POPUP');
            });
        });
    }

    window.initGitutPopups = function() {
        const currentPageType = window.PAGE_TYPE || '';
        const popupAds = window.GITUT_ADS.filter(ad => {
            if (ad.isPopup) return true;
            if (ad.placements.includes('POPUP_DYNAMIC_DOCS') && (currentPageType === 'تعبئة_طلب' || currentPageType === 'عرض_طلب_ثابت')) return true;
            if (ad.placements.includes('POPUP_BLOG') && currentPageType === 'تفاصيل_التدوينة') return true;
            if (ad.placements.includes('POPUP_LISTS') && (currentPageType === 'قائمة_الخدمات' || currentPageType === 'المدونة')) return true;
            return false;
        });
        popupAds.forEach(ad => {
            const delayMs = (ad.popupDelay || 0) * 1000;
            setTimeout(() => {
                showGitutPopup(ad);
            }, delayMs);
        });
    };

    // Auto-inject logic for specific placements
    window.injectGitutAds = function() {
        const adContainers = document.querySelectorAll('[data-gitut-ad], .dynamic-ad-container');
        const placementCounts = {};
        adContainers.forEach(container => {
            let placement = container.getAttribute('data-gitut-ad') || container.getAttribute('data-placement');
            if (!placement) return;

            let possiblePlacements = [placement];
            if (placement === 'BLOG_SIDEBAR') {
                const sidebarAdContainers = Array.from(document.querySelectorAll('[data-gitut-ad="BLOG_SIDEBAR"]'));
                const idx = sidebarAdContainers.indexOf(container);
                if (idx !== -1) {
                    if (idx < 2) {
                        placement = 'BLOG_POST_RELATED_TOP';
                        possiblePlacements = ['BLOG_POST_RELATED_TOP', 'BLOG_SIDEBAR'];
                    } else {
                        placement = 'BLOG_POST_RELATED_BOTTOM';
                        possiblePlacements = ['BLOG_POST_RELATED_BOTTOM', 'BLOG_SIDEBAR'];
                    }
                }
            }

            const matches = window.GITUT_ADS.filter(ad => ad.placements.some(p => possiblePlacements.includes(p)));
            if (matches.length === 0) {
                container.innerHTML = '';
                container.style.display = 'none';
                return;
            }
            if (placementCounts[placement] === undefined) {
                placementCounts[placement] = 0;
            } else {
                placementCounts[placement]++;
            }
            const match = matches[placementCounts[placement] % matches.length];
            if (!match) {
                container.innerHTML = '';
                container.style.display = 'none';
                return;
            }
            container.style.display = 'block';
            if (match.html) {
                container.innerHTML = '';
                try {
                    const range = document.createRange();
                    range.selectNode(container);
                    const fragment = range.createContextualFragment(match.html);
                    container.appendChild(fragment);
                } catch(e) {
                    container.innerHTML = match.html;
                }
            } else {
                const isRtl = document.documentElement.dir === 'rtl' || document.documentElement.lang === 'ar';
                const colorMap = { blue: '#2563eb', orange: '#ea580c' };
                const color = colorMap[match.color] || colorMap.blue;
                const format = match.adFormat || 'standard';

                if (format === 'minimal') {
                    const imgHtml = match.imageUrl ? '<img src="' + match.imageUrl + '" style="width:48px;height:48px;object-fit:cover;border-radius:8px;margin-' + (isRtl ? 'left' : 'right') + ':12px;box-shadow:0 2px 4px rgba(0,0,0,0.05);" referrerPolicy="no-referrer"/>' : '';
                    container.innerHTML = '<div style="margin:16px 0; font-family: inherit;"><a href="' + match.link + '" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;padding:12px;border:1px solid #e5e7eb;border-radius:12px;background:#f9fafb;text-decoration:none;color:inherit;transition:all 0.2s ease; font-family: inherit;">' +
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
                    container.innerHTML = '<div style="margin:16px 0; font-family: inherit;"><a href="' + match.link + '" target="_blank" rel="noopener noreferrer" style="display:block;border-radius:16px;overflow:hidden;position:relative;text-decoration:none;box-shadow:0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);background:#000; font-family: inherit;">' +
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
                    const imgHtml = match.imageUrl ? '<div style="position:relative;"><img src="' + match.imageUrl + '" style="width:100%;height:160px;object-fit:cover;display:block;" referrerPolicy="no-referrer"/><div style="position:absolute;top:10px;' + (isRtl ? 'right' : 'left') + ':10px;background:rgba(0,0,0,0.6);color:white;padding:2px 8px;border-radius:4px;font-size:11px;font-weight:bold;backdrop-filter:blur(4px);">' + (isRtl ? 'إعلان مروّج' : 'Sponsored') + '</div></div>' : '<div style="background:#f3f4f6;padding:4px 8px;font-size:11px;font-weight:bold;color:#6b7280;text-align:center;">' + (isRtl ? 'إعلان مروّج' : 'Sponsored') + '</div>';
                    container.innerHTML = '<div style="margin:16px 0; font-family: inherit;"><a href="' + match.link + '" target="_blank" rel="noopener noreferrer" style="display:flex;flex-direction:column;border:1px solid #e5e7eb;border-radius:16px;background:#ffffff;text-decoration:none;color:inherit;overflow:hidden;box-shadow:0 10px 15px -3px rgba(0,0,0,0.1);transition:transform 0.2s; font-family: inherit;">' +
                        imgHtml +
                        '<div style="padding:16px;text-align:' + (isRtl ? 'right' : 'left') + '">' +
                            '<h3 style="margin:0 0 8px 0;font-size:16px;font-weight:bold;color:#111827;">' + match.title + '</h3>' +
                            '<p style="margin:0 0 16px 0;font-size:14px;color:#4b5563;line-height:1.5;">' + match.content + '</p>' +
                            '<div style="display:inline-block;background:' + color + ';color:white;padding:8px 16px;border-radius:8px;font-size:13px;font-weight:bold;">' + (match.buttonText || (isRtl ? 'اكتشف الآن' : 'Discover Now')) + '</div>' +
                        '</div>' +
                    '</a></div>';
                } else {
                    const imgHtml = match.imageUrl ? '<div style="position:relative;flex-shrink:0;width:120px;height:120px;overflow:hidden;border-radius:12px;background:#f3f4f6;"><img src="' + match.imageUrl + '" style="width:100%;height:100%;object-fit:cover;" referrerPolicy="no-referrer"/><div style="position:absolute;top:8px;' + (isRtl ? 'right' : 'left') + ':8px;background:rgba(0,0,0,0.6);color:white;padding:2px 6px;border-radius:4px;font-size:9px;font-weight:bold;letter-spacing:0.5px;">AD</div></div>' : '';
                    container.innerHTML = '<div style="margin:16px 0; font-family: inherit;"><a href="' + match.link + '" target="_blank" rel="noopener noreferrer" style="display:block;border:1px solid #e2e8f0;border-radius:16px;background:#ffffff;padding:16px;text-decoration:none;color:inherit;box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);transition:all 0.2s ease; font-family: inherit;">' +
                        '<div style="display:flex;align-items:center;gap:16px;flex-direction:' + (isRtl ? 'row-reverse' : 'row') + '">' +
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
            }

            // Click trackers for inline elements
            container.querySelectorAll('a, button').forEach(el => {
                el.addEventListener('click', () => {
                    trackAdClick(match, placement);
                });
            });
        });

        // Trigger Popups once per load life-cycle
        if (!window.GITUT_POPUPS_INITIALIZED) {
            window.GITUT_POPUPS_INITIALIZED = true;
            window.initGitutPopups();
        }
    };
    window.refreshAds = window.injectGitutAds;

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', window.injectGitutAds);
    else window.injectGitutAds();
    window.injectGitutAds(); // Ensure execution run
})();
# Better Balanced Bookkeeping: one-page site
Structure: index.html, assets/{css,js,img}, php/submit.php, data/ (leads.json, protected by .htaccess), robots.txt.
Deploy: any PHP host (Apache). Make data/leads.json writable. Form saves the lead, emails info@betterbalancedkeeper.com, then sends the visitor to the Google Calendar booking page.
Images: service/about images are hotlinked from the old Google Sites page. Download them into assets/img/ and update the src paths for reliability.

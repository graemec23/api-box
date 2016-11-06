

exports.getAllCatagories = function(req, res) {


    var cats =   [
        'Anaesthetics Pharmaceuticals',
        'Handpieces and Airmotors',
        'Restoratives',
        'CAD/CAM Technology',
        'Impression Materials',
        'Rotary Instruments / Burs',
        'Consumables',
        'Linings',
        'Linings & Cements',
        'Scan & Buy',
        'Endodontics',
        'Matrix & Wedges',
        'Special Needs Products',
        'Equipment',
        'Orthodontics',
        'Surgical - Medicaments - Implantology',
        'Facial Aesthetics',
        'Pins & Posts',
        'Temp Crowns & Cements',
        'Finishing & Polishing',
        'Pins & Posts',
        'Temp Crowns & Cements',
        'Finishing & Polishing',
        'Practice Building',
        'Waste Management Services',
        'General Hygiene',
        'Prevention & Safety',
        'X-Ray',
        'Hand Instruments',
        'Restoratives'
    ];

    res.json(cats);

}
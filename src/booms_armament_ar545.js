"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.build_gun = void 0;
const build_gun = (assortTable) => {
    const BOOMS_AR545 = "BOOMS_ARMAMENT_AR545";
    const weaponMods = [
        {
            _id: "00d97ea181450cc742f8e586",
            _tpl: "55802f5d4bdc2dac148b458f",
            parentId: BOOMS_AR545,
            slotId: "mod_pistol_grip"
        },
        {
            // note for future reference: _tpl is the actual ID of the item, _id is just some random string. thank you, life!
            _id: "boomsticks_545x39_magpul_pmag_30_gen_m3",
            _tpl: "MAGPUL_PMAG_30_GEN_M3_AR545",
            parentId: BOOMS_AR545,
            slotId: "mod_magazine"
        },
        {
            _id: "b88b0305259ec6c42db082da",
            _tpl: "55d355e64bdc2d962f8b4569",
            parentId: BOOMS_AR545,
            slotId: "mod_reciever"
        },
        {
            _id: "d297f89e9916e3a7a352712d",
            _tpl: "5c793fb92e221644f31bfb64",
            parentId: BOOMS_AR545,
            slotId: "mod_stock"
        },
        {
            _id: "2ef2fc661066738737c7f441",
            _tpl: "55d44fd14bdc2d962f8b456e",
            parentId: BOOMS_AR545,
            slotId: "mod_charge"
        },
        {
            _id: "f6c7d76d7060508c1fed7094",
            _tpl: "5c0e2f94d174af029f650d56",
            parentId: "b88b0305259ec6c42db082da",
            slotId: "mod_barrel"
        },
        {
            _id: "d12d1459d5856a0ff6de7dea",
            _tpl: "5d122e7bd7ad1a07102d6d7f",
            parentId: "b88b0305259ec6c42db082da",
            slotId: "mod_handguard"
        },
        {
            _id: "a0868b320f62dfd1705a5659",
            _tpl: "5bc09a18d4351e003562b68e",
            parentId: "b88b0305259ec6c42db082da",
            slotId: "mod_sight_rear",
            upd: {
                Sight: {
                    ScopesCurrentCalibPointIndexes: [
                        0
                    ],
                    ScopesSelectedModes: [
                        0
                    ],
                    SelectedScope: 0
                }
            }
        },
        {
            _id: "ce6f4f39012b49233cd34700",
            _tpl: "5fbbaa86f9986c4cff3fe5f6",
            parentId: "d297f89e9916e3a7a352712d",
            slotId: "mod_stock_000"
        },
        {
            _id: "89ae3cb804549535d5ea7814",
            _tpl: "544a38634bdc2d58388b4568",
            parentId: "f6c7d76d7060508c1fed7094",
            slotId: "mod_muzzle"
        },
        {
            "_id": "1fb5a7571f2fdfe06a8bf8f7",
            "_tpl": "56eabcd4d2720b66698b4574",
            "parentId": "f6c7d76d7060508c1fed7094",
            "slotId": "mod_gas_block"
        },
        {
            _id: "53faaa4407c90fbd6e30c256",
            _tpl: "5d123b70d7ad1a0ee35e0754",
            parentId: "d12d1459d5856a0ff6de7dea",
            slotId: "mod_mount_000"
        },
        {
            _id: "2b2cb49d99146d3b1f18bb9a",
            _tpl: "5d123b70d7ad1a0ee35e0754",
            parentId: "d12d1459d5856a0ff6de7dea",
            slotId: "mod_mount_001"
        },
        {
            _id: "d4902cbbb62d40e5de7a5a8d",
            _tpl: "5d133067d7ad1a33013f95b4",
            parentId: "d12d1459d5856a0ff6de7dea",
            slotId: "mod_foregrip"
        },
        {
            _id: "ee35ce629972cddb68281503",
            _tpl: "5bc09a30d4351e00367fb7c8",
            parentId: "d12d1459d5856a0ff6de7dea",
            slotId: "mod_sight_front",
            upd: {
                Sight: {
                    ScopesCurrentCalibPointIndexes: [
                        0
                    ],
                    ScopesSelectedModes: [
                        0
                    ],
                    SelectedScope: 0
                }
            }
        },
        {
            _id: "d9709229c80685b9a1294bca",
            _tpl: "558032614bdc2de7118b4585",
            parentId: "d4902cbbb62d40e5de7a5a8d",
            slotId: "mod_foregrip"
        }
    ];
    for (const mod of weaponMods) {
        assortTable.items.push(mod);
    }
};
exports.build_gun = build_gun;

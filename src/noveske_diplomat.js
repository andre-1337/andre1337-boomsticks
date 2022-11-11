"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.build_gun = void 0;
const build_gun = (assortTable) => {
    const NOVESKE_DIPLOMAT_ID = "NOVESKE_DIPLOMAT";
    const weaponMods = [
        {
            _id: "25365fe73904d86ccfb03c76",
            _tpl: "55802f5d4bdc2dac148b458f",
            parentId: NOVESKE_DIPLOMAT_ID,
            slotId: "mod_pistol_grip"
        },
        {
            _id: "cfd410e25faad7cb3dd868ac",
            _tpl: "55802d5f4bdc2dac148b458e",
            parentId: NOVESKE_DIPLOMAT_ID,
            slotId: "mod_magazine"
        },
        {
            _id: "4a4496ba1f0243c7762aa901",
            _tpl: "5c07a8770db8340023300450",
            parentId: NOVESKE_DIPLOMAT_ID,
            slotId: "mod_reciever"
        },
        {
            _id: "c32d6f8e2798b4f5ac9effed",
            _tpl: "5c793fb92e221644f31bfb64",
            parentId: NOVESKE_DIPLOMAT_ID,
            slotId: "mod_stock"
        },
        {
            _id: "79cd5e638123af4c43da5a43",
            _tpl: "5d44334ba4b9362b346d1948",
            parentId: NOVESKE_DIPLOMAT_ID,
            slotId: "mod_charge"
        },
        {
            _id: "69c0735a509a372fd4d7866b",
            _tpl: "58d39d3d86f77445bb794ae7",
            parentId: "4a4496ba1f0243c7762aa901",
            slotId: "mod_scope"
        },
        {
            _id: "f9375bae2d4c537224409172",
            _tpl: "55d35ee94bdc2d61338b4568",
            parentId: "4a4496ba1f0243c7762aa901",
            slotId: "mod_barrel"
        },
        {
            _id: "dfc3044642c0a12ec56b96bc",
            _tpl: "5c78f2612e221600114c9f0d",
            parentId: "4a4496ba1f0243c7762aa901",
            slotId: "mod_handguard"
        },
        {
            _id: "e1f974a18953daea81150e70",
            _tpl: "5bc09a18d4351e003562b68e",
            parentId: "4a4496ba1f0243c7762aa901",
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
            _id: "9f710b07cd9ab60f6af83857",
            _tpl: "5b39f8db5acfc40016387a1b",
            parentId: "c32d6f8e2798b4f5ac9effed",
            slotId: "mod_stock_000"
        },
        {
            _id: "490225735f3254e209a646ed",
            _tpl: "58d39b0386f77443380bf13c",
            parentId: "69c0735a509a372fd4d7866b",
            slotId: "mod_scope"
        },
        {
            _id: "d91c5149b31b29448a8af03b",
            _tpl: "56ea6fafd2720b844b8b4593",
            parentId: "f9375bae2d4c537224409172",
            slotId: "mod_muzzle"
        },
        {
            _id: "8fb173e7174fcf5f6f519fe3",
            _tpl: "56eabcd4d2720b66698b4574",
            parentId: "f9375bae2d4c537224409172",
            slotId: "mod_gas_block"
        },
        {
            _id: "57123a89406b0cc8a9b2da20",
            _tpl: "5b7be4895acfc400170e2dd5",
            parentId: "dfc3044642c0a12ec56b96bc",
            slotId: "mod_foregrip"
        },
        {
            _id: "dc39dcee1d578c21a43fa38d",
            _tpl: "5bc09a30d4351e00367fb7c8",
            parentId: "dfc3044642c0a12ec56b96bc",
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
            _id: "d6560b1a8dfd71542d9c388e",
            _tpl: "58d399e486f77442e0016fe7",
            parentId: "490225735f3254e209a646ed",
            slotId: "mod_scope",
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
            _id: "cad4ba8c1882fb14b2e48083",
            _tpl: "558032614bdc2de7118b4585",
            parentId: "57123a89406b0cc8a9b2da20",
            slotId: "mod_foregrip"
        }
    ];
    for (const mod of weaponMods) {
        assortTable.items.push(mod);
    }
};
exports.build_gun = build_gun;

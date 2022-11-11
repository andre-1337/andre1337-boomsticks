"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.build_gun = void 0;
const build_gun = (assortTable) => {
    const HONEY_BADGER_ID = "HONEY_BADGER";
    const weaponMods = [
        {
            _id: "1b762b7f5c397d5fb6281b6a",
            _tpl: "59db3acc86f7742a2c4ab912",
            parentId: HONEY_BADGER_ID,
            slotId: "mod_pistol_grip"
        },
        {
            _id: "e1f967bada886ca5c29b92c9",
            _tpl: "55802d5f4bdc2dac148b458e",
            parentId: HONEY_BADGER_ID,
            slotId: "mod_magazine"
        },
        {
            _id: "73bb8332f4ea3b93fd4766b7",
            _tpl: "5c07a8770db8340023300450",
            parentId: HONEY_BADGER_ID,
            slotId: "mod_reciever"
        },
        {
            _id: "bd28175e6c2f1ea3c05bb6c2",
            _tpl: "5c793fb92e221644f31bfb64",
            parentId: HONEY_BADGER_ID,
            slotId: "mod_stock"
        },
        {
            _id: "a555530d41ba0c2939f35130",
            _tpl: "5b39f8db5acfc40016387a1b",
            parentId: "bd28175e6c2f1ea3c05bb6c2",
            slotId: "mod_stock_000"
        },
        {
            _id: "f9aaa4c9fa691dffd2fdf908",
            _tpl: "5d44334ba4b9362b346d1948",
            parentId: HONEY_BADGER_ID,
            slotId: "mod_charge"
        },
        {
            _id: "a768954674ba84ee4efa195c",
            _tpl: "55d35ee94bdc2d61338b4568",
            parentId: "73bb8332f4ea3b93fd4766b7",
            slotId: "mod_barrel"
        },
        {
            _id: "3421b316ca2c30efea8249c9",
            _tpl: "56eabcd4d2720b66698b4574",
            parentId: "a768954674ba84ee4efa195c",
            slotId: "mod_gas_block"
        },
        {
            _id: "b38b069d0fad179ec6d17c20",
            _tpl: "595cf16b86f77427440c32e2",
            parentId: "73bb8332f4ea3b93fd4766b7",
            slotId: "mod_handguard"
        },
        {
            _id: "81bddb7bc9e4cf53da8498eb",
            _tpl: "5bc09a30d4351e00367fb7c8",
            parentId: "b38b069d0fad179ec6d17c20",
            slotId: "mod_sight_front",
            upd: {
                Sight: {
                    ScopesCurrentCalibPointIndexes: [0],
                    ScopesSelectedModes: [0],
                    SelectedScope: 0
                }
            }
        },
        {
            _id: "db97e8df68402dac07799f3e",
            _tpl: "5bc09a18d4351e003562b68e",
            parentId: "73bb8332f4ea3b93fd4766b7",
            slotId: "mod_sight_rear",
            upd: {
                Sight: {
                    ScopesCurrentCalibPointIndexes: [0],
                    ScopesSelectedModes: [0],
                    SelectedScope: 0
                }
            }
        },
        {
            _id: "50cd6b93c192d1f3f3270e22",
            _tpl: "609269c3b0e443224b421cc1",
            parentId: "a768954674ba84ee4efa195c",
            slotId: "mod_muzzle"
        },
        {
            _id: "4bd3c5b1bba04dead7806544",
            _tpl: "60926df0132d4d12c81fd9df",
            parentId: "50cd6b93c192d1f3f3270e22",
            slotId: "mod_muzzle"
        }
    ];
    for (const mod of weaponMods) {
        assortTable.items.push(mod);
    }
};
exports.build_gun = build_gun;

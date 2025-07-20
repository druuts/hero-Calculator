// Dados dos heróis atualizados com base nos arquivos fornecidos
const heroData = {
    barbarianKing: [
        { level: 1, cost: 0, time: 0 },
        { level: 2, cost: 5000, time: 2 },
        { level: 3, cost: 5500, time: 4 },
        { level: 4, cost: 6000, time: 8 },
        { level: 5, cost: 6500, time: 10 },
        { level: 6, cost: 7000, time: 12 },
        { level: 7, cost: 7500, time: 14 },
        { level: 8, cost: 8000, time: 16 },
        { level: 9, cost: 8500, time: 18 },
        { level: 10, cost: 10000, time: 20 },
        { level: 11, cost: 10500, time: 22 },
        { level: 12, cost: 11000, time: 24 },
        { level: 13, cost: 11500, time: 24 },
        { level: 14, cost: 12000, time: 24 },
        { level: 15, cost: 12500, time: 24 },
        { level: 16, cost: 13000, time: 24 },
        { level: 17, cost: 13500, time: 24 },
        { level: 18, cost: 14000, time: 24 },
        { level: 19, cost: 14500, time: 24 },
        { level: 20, cost: 15000, time: 24 },
        { level: 21, cost: 17000, time: 24 },
        { level: 22, cost: 19000, time: 24 },
        { level: 23, cost: 21000, time: 24 },
        { level: 24, cost: 23000, time: 24 },
        { level: 25, cost: 25000, time: 24 },
        { level: 26, cost: 27000, time: 48 },
        { level: 27, cost: 29000, time: 48 },
        { level: 28, cost: 31000, time: 48 },
        { level: 29, cost: 33000, time: 48 },
        { level: 30, cost: 35000, time: 48 },
        { level: 31, cost: 37000, time: 60 },
        { level: 32, cost: 39000, time: 60 },
        { level: 33, cost: 41000, time: 60 },
        { level: 34, cost: 43000, time: 60 },
        { level: 35, cost: 45000, time: 60 },
        { level: 36, cost: 47000, time: 72 },
        { level: 37, cost: 49000, time: 72 },
        { level: 38, cost: 51000, time: 72 },
        { level: 39, cost: 53000, time: 72 },
        { level: 40, cost: 55000, time: 72 },
        { level: 41, cost: 58000, time: 84 },
        { level: 42, cost: 61000, time: 84 },
        { level: 43, cost: 64000, time: 84 },
        { level: 44, cost: 67000, time: 84 },
        { level: 45, cost: 70000, time: 84 },
        { level: 46, cost: 73000, time: 96 },
        { level: 47, cost: 76000, time: 96 },
        { level: 48, cost: 79000, time: 96 },
        { level: 49, cost: 82000, time: 96 },
        { level: 50, cost: 85000, time: 96 },
        { level: 51, cost: 88000, time: 120 },
        { level: 52, cost: 91000, time: 120 },
        { level: 53, cost: 94000, time: 120 },
        { level: 54, cost: 97000, time: 120 },
        { level: 55, cost: 100000, time: 120 },
        { level: 56, cost: 103000, time: 132 },
        { level: 57, cost: 106000, time: 132 },
        { level: 58, cost: 109000, time: 132 },
        { level: 59, cost: 112000, time: 132 },
        { level: 60, cost: 115000, time: 132 },
        { level: 61, cost: 119000, time: 138 },
        { level: 62, cost: 123000, time: 138 },
        { level: 63, cost: 127000, time: 138 },
        { level: 64, cost: 131000, time: 138 },
        { level: 65, cost: 135000, time: 138 },
        { level: 66, cost: 139000, time: 144 },
        { level: 67, cost: 143000, time: 144 },
        { level: 68, cost: 147000, time: 144 },
        { level: 69, cost: 151000, time: 144 },
        { level: 70, cost: 155000, time: 144 },
        { level: 71, cost: 160000, time: 156 },
        { level: 72, cost: 165000, time: 156 },
        { level: 73, cost: 170000, time: 156 },
        { level: 74, cost: 175000, time: 156 },
        { level: 75, cost: 180000, time: 156 },
        { level: 76, cost: 185000, time: 168 },
        { level: 77, cost: 190000, time: 168 },
        { level: 78, cost: 195000, time: 168 },
        { level: 79, cost: 200000, time: 168 },
        { level: 80, cost: 205000, time: 168 },
        { level: 81, cost: 210000, time: 180 },
        { level: 82, cost: 215000, time: 180 },
        { level: 83, cost: 220000, time: 180 },
        { level: 84, cost: 225000, time: 180 },
        { level: 85, cost: 230000, time: 180 },
        { level: 86, cost: 240000, time: 192 },
        { level: 87, cost: 250000, time: 192 },
        { level: 88, cost: 260000, time: 192 },
        { level: 89, cost: 270000, time: 192 },
        { level: 90, cost: 280000, time: 192 },
        { level: 91, cost: 290000, time: 192 },
        { level: 92, cost: 300000, time: 192 },
        { level: 93, cost: 310000, time: 192 },
        { level: 94, cost: 320000, time: 192 },
        { level: 95, cost: 330000, time: 192 },
        { level: 96, cost: 340000, time: 192 },
        { level: 97, cost: 350000, time: 192 },
        { level: 98, cost: 360000, time: 192 },
        { level: 99, cost: 370000, time: 192 },
        { level: 100, cost: 380000, time: 192 }
    ],
    archerQueen: [
        { level: 1, cost: 0, time: 0 },
        { level: 2, cost: 5000, time: 2 },
        { level: 3, cost: 5500, time: 4 },
        { level: 4, cost: 6000, time: 8 },
        { level: 5, cost: 6500, time: 10 },
        { level: 6, cost: 7000, time: 12 },
        { level: 7, cost: 7500, time: 14 },
        { level: 8, cost: 8000, time: 16 },
        { level: 9, cost: 8500, time: 18 },
        { level: 10, cost: 10000, time: 20 },
        { level: 11, cost: 10500, time: 22 },
        { level: 12, cost: 11000, time: 24 },
        { level: 13, cost: 11500, time: 24 },
        { level: 14, cost: 12000, time: 24 },
        { level: 15, cost: 12500, time: 24 },
        { level: 16, cost: 13000, time: 24 },
        { level: 17, cost: 13500, time: 24 },
        { level: 18, cost: 14000, time: 24 },
        { level: 19, cost: 14500, time: 24 },
        { level: 20, cost: 15000, time: 24 },
        { level: 21, cost: 17000, time: 24 },
        { level: 22, cost: 19000, time: 24 },
        { level: 23, cost: 21000, time: 24 },
        { level: 24, cost: 23000, time: 24 },
        { level: 25, cost: 25000, time: 30 },
        { level: 26, cost: 27000, time: 48 },
        { level: 27, cost: 29000, time: 48 },
        { level: 28, cost: 31000, time: 48 },
        { level: 29, cost: 33000, time: 48 },
        { level: 30, cost: 35000, time: 48 },
        { level: 31, cost: 37000, time: 60 },
        { level: 32, cost: 39000, time: 60 },
        { level: 33, cost: 41000, time: 60 },
        { level: 34, cost: 43000, time: 60 },
        { level: 35, cost: 45000, time: 60 },
        { level: 36, cost: 47000, time: 72 },
        { level: 37, cost: 49000, time: 72 },
        { level: 38, cost: 51000, time: 72 },
        { level: 39, cost: 53000, time: 72 },
        { level: 40, cost: 55000, time: 72 },
        { level: 41, cost: 58000, time: 96 },
        { level: 42, cost: 61000, time: 96 },
        { level: 43, cost: 64000, time: 96 },
        { level: 44, cost: 67000, time: 96 },
        { level: 45, cost: 70000, time: 96 },
        { level: 46, cost: 73000, time: 120 },
        { level: 47, cost: 76000, time: 120 },
        { level: 48, cost: 79000, time: 120 },
        { level: 49, cost: 82000, time: 120 },
        { level: 50, cost: 85000, time: 120 },
        { level: 51, cost: 88000, time: 132 },
        { level: 52, cost: 91000, time: 132 },
        { level: 53, cost: 94000, time: 132 },
        { level: 54, cost: 97000, time: 132 },
        { level: 55, cost: 100000, time: 132 },
        { level: 56, cost: 103000, time: 138 },
        { level: 57, cost: 106000, time: 138 },
        { level: 58, cost: 109000, time: 138 },
        { level: 59, cost: 112000, time: 138 },
        { level: 60, cost: 115000, time: 138 },
        { level: 61, cost: 119000, time: 144 },
        { level: 62, cost: 123000, time: 144 },
        { level: 63, cost: 127000, time: 144 },
        { level: 64, cost: 131000, time: 144 },
        { level: 65, cost: 135000, time: 144 },
        { level: 66, cost: 139000, time: 156 },
        { level: 67, cost: 143000, time: 156 },
        { level: 68, cost: 147000, time: 156 },
        { level: 69, cost: 151000, time: 156 },
        { level: 70, cost: 155000, time: 156 },
        { level: 71, cost: 160000, time: 168 },
        { level: 72, cost: 165000, time: 168 },
        { level: 73, cost: 170000, time: 168 },
        { level: 74, cost: 175000, time: 168 },
        { level: 75, cost: 180000, time: 168 },
        { level: 76, cost: 185000, time: 180 },
        { level: 77, cost: 190000, time: 180 },
        { level: 78, cost: 195000, time: 180 },
        { level: 79, cost: 200000, time: 180 },
        { level: 80, cost: 205000, time: 180 },
        { level: 81, cost: 210000, time: 192 },
        { level: 82, cost: 215000, time: 192 },
        { level: 83, cost: 220000, time: 192 },
        { level: 84, cost: 225000, time: 192 },
        { level: 85, cost: 230000, time: 192 },
        { level: 86, cost: 240000, time: 192 },
        { level: 87, cost: 250000, time: 192 },
        { level: 88, cost: 260000, time: 192 },
        { level: 89, cost: 270000, time: 192 },
        { level: 90, cost: 280000, time: 192 },
        { level: 91, cost: 290000, time: 192 },
        { level: 92, cost: 300000, time: 192 },
        { level: 93, cost: 310000, time: 192 },
        { level: 94, cost: 320000, time: 192 },
        { level: 95, cost: 330000, time: 192 },
        { level: 96, cost: 340000, time: 192 },
        { level: 97, cost: 350000, time: 192 },
        { level: 98, cost: 360000, time: 192 },
        { level: 99, cost: 370000, time: 192 },
        { level: 100, cost: 380000, time: 192 }
    ],
    battleMachine: [
        { level: 1, cost: 0, time: 0 },
        { level: 2, cost: 5000, time: 2 },
        { level: 3, cost: 5500, time: 4 },
        { level: 4, cost: 6000, time: 8 },
        { level: 5, cost: 6500, time: 10 },
        { level: 6, cost: 7000, time: 12 },
        { level: 7, cost: 7500, time: 14 },
        { level: 8, cost: 8000, time: 16 },
        { level: 9, cost: 8500, time: 18 },
        { level: 10, cost: 10000, time: 20 },
        { level: 11, cost: 10500, time: 22 },
        { level: 12, cost: 11000, time: 24 },
        { level: 13, cost: 11500, time: 24 },
        { level: 14, cost: 12000, time: 24 },
        { level: 15, cost: 12500, time: 24 },
        { level: 16, cost: 13000, time: 24 },
        { level: 17, cost: 13500, time: 24 },
        { level: 18, cost: 14000, time: 24 },
        { level: 19, cost: 14500, time: 24 },
        { level: 20, cost: 15000, time: 24 },
        { level: 21, cost: 17000, time: 24 },
        { level: 22, cost: 19000, time: 24 },
        { level: 23, cost: 21000, time: 24 },
        { level: 24, cost: 23000, time: 24 },
        { level: 25, cost: 25000, time: 24 },
        { level: 26, cost: 27000, time: 48 },
        { level: 27, cost: 29000, time: 48 },
        { level: 28, cost: 31000, time: 48 },
        { level: 29, cost: 33000, time: 48 },
        { level: 30, cost: 35000, time: 48 },
        { level: 31, cost: 37000, time: 60 },
        { level: 32, cost: 39000, time: 60 },
        { level: 33, cost: 41000, time: 60 },
        { level: 34, cost: 43000, time: 60 },
        { level: 35, cost: 45000, time: 72 },
        { level: 36, cost: 47000, time: 72 },
        { level: 37, cost: 49000, time: 72 },
        { level: 38, cost: 51000, time: 72 },
        { level: 39, cost: 53000, time: 72 },
        { level: 40, cost: 55000, time: 72 },
        { level: 41, cost: 60000, time: 96 },
        { level: 42, cost: 65000, time: 96 },
        { level: 43, cost: 70000, time: 96 },
        { level: 44, cost: 75000, time: 96 },
        { level: 45, cost: 80000, time: 96 },
        { level: 46, cost: 85000, time: 120 },
        { level: 47, cost: 90000, time: 120 },
        { level: 48, cost: 95000, time: 120 },
        { level: 49, cost: 100000, time: 120 },
        { level: 50, cost: 105000, time: 120 },
        { level: 51, cost: 110000, time: 144 },
        { level: 52, cost: 115000, time: 144 },
        { level: 53, cost: 120000, time: 144 },
        { level: 54, cost: 125000, time: 144 },
        { level: 55, cost: 130000, time: 144 },
        { level: 56, cost: 135000, time: 168 },
        { level: 57, cost: 140000, time: 168 },
        { level: 58, cost: 145000, time: 168 },
        { level: 59, cost: 150000, time: 168 },
        { level: 60, cost: 155000, time: 168 },
        { level: 61, cost: 160000, time: 192 },
        { level: 62, cost: 165000, time: 192 },
        { level: 63, cost: 170000, time: 192 },
        { level: 64, cost: 175000, time: 192 },
        { level: 65, cost: 180000, time: 192 },
        { level: 66, cost: 185000, time: 192 },
        { level: 67, cost: 190000, time: 192 },
        { level: 68, cost: 195000, time: 192 },
        { level: 69, cost: 200000, time: 192 },
        { level: 70, cost: 205000, time: 192 },
        { level: 71, cost: 210000, time: 192 },
        { level: 72, cost: 215000, time: 192 },
        { level: 73, cost: 220000, time: 192 },
        { level: 74, cost: 225000, time: 192 },
        { level: 75, cost: 230000, time: 192 },
        { level: 76, cost: 240000, time: 192 },
        { level: 77, cost: 250000, time: 192 },
        { level: 78, cost: 260000, time: 192 },
        { level: 79, cost: 270000, time: 192 },
        { level: 80, cost: 280000, time: 192 },
        { level: 81, cost: 290000, time: 192 },
        { level: 82, cost: 300000, time: 192 },
        { level: 83, cost: 310000, time: 192 },
        { level: 84, cost: 320000, time: 192 },
        { level: 85, cost: 330000, time: 192 },
        { level: 86, cost: 340000, time: 192 },
        { level: 87, cost: 350000, time: 192 },
        { level: 88, cost: 360000, time: 192 },
        { level: 89, cost: 370000, time: 192 },
        { level: 90, cost: 380000, time: 192 }
    ],
    grandWarden: [
        { level: 1, cost: 1000000, time: 0 },
        { level: 2, cost: 1000000, time: 2 },
        { level: 3, cost: 1100000, time: 4 },
        { level: 4, cost: 1200000, time: 8 },
        { level: 5, cost: 1400000, time: 10 },
        { level: 6, cost: 1500000, time: 12 },
        { level: 7, cost: 1700000, time: 14 },
        { level: 8, cost: 1800000, time: 16 },
        { level: 9, cost: 2000000, time: 18 },
        { level: 10, cost: 2300000, time: 24 },
        { level: 11, cost: 2700000, time: 24 },
        { level: 12, cost: 3000000, time: 24 },
        { level: 13, cost: 3400000, time: 24 },
        { level: 14, cost: 3700000, time: 24 },
        { level: 15, cost: 4100000, time: 24 },
        { level: 16, cost: 4400000, time: 24 },
        { level: 17, cost: 4800000, time: 24 },
        { level: 18, cost: 5100000, time: 24 },
        { level: 19, cost: 5500000, time: 24 },
        { level: 20, cost: 6000000, time: 24 },
        { level: 21, cost: 6500000, time: 36 },
        { level: 22, cost: 6600000, time: 36 },
        { level: 23, cost: 6700000, time: 36 },
        { level: 24, cost: 6800000, time: 36 },
        { level: 25, cost: 6900000, time: 36 },
        { level: 26, cost: 7000000, time: 48 },
        { level: 27, cost: 7100000, time: 48 },
        { level: 28, cost: 7200000, time: 48 },
        { level: 29, cost: 7300000, time: 48 },
        { level: 30, cost: 7400000, time: 48 },
        { level: 31, cost: 7500000, time: 60 },
        { level: 32, cost: 7600000, time: 60 },
        { level: 33, cost: 7700000, time: 60 },
        { level: 34, cost: 7800000, time: 60 },
        { level: 35, cost: 7900000, time: 60 },
        { level: 36, cost: 8000000, time: 72 },
        { level: 37, cost: 8100000, time: 72 },
        { level: 38, cost: 8200000, time: 72 },
        { level: 39, cost: 8300000, time: 72 },
        { level: 40, cost: 8400000, time: 72 },
        { level: 41, cost: 8500000, time: 96 },
        { level: 42, cost: 8800000, time: 96 },
        { level: 43, cost: 9100000, time: 96 },
        { level: 44, cost: 9400000, time: 96 },
        { level: 45, cost: 9700000, time: 96 },
        { level: 46, cost: 10000000, time: 120 },
        { level: 47, cost: 10300000, time: 120 },
        { level: 48, cost: 10600000, time: 120 },
        { level: 49, cost: 11000000, time: 120 },
        { level: 50, cost: 11500000, time: 120 },
        { level: 51, cost: 12000000, time: 144 },
        { level: 52, cost: 12500000, time: 144 },
        { level: 53, cost: 13000000, time: 144 },
        { level: 54, cost: 13500000, time: 144 },
        { level: 55, cost: 14000000, time: 144 },
        { level: 56, cost: 14500000, time: 168 },
        { level: 57, cost: 15000000, time: 168 },
        { level: 58, cost: 15500000, time: 168 },
        { level: 59, cost: 16000000, time: 168 },
        { level: 60, cost: 16200000, time: 168 },
        { level: 61, cost: 16700000, time: 192 },
        { level: 62, cost: 16900000, time: 192 },
        { level: 63, cost: 17100000, time: 192 },
        { level: 64, cost: 17300000, time: 192 },
        { level: 65, cost: 17500000, time: 192 },
        { level: 66, cost: 18000000, time: 192 },
        { level: 67, cost: 18500000, time: 192 },
        { level: 68, cost: 19000000, time: 192 },
        { level: 69, cost: 19500000, time: 192 },
        { level: 70, cost: 20000000, time: 192 },
        { level: 71, cost: 20500000, time: 192 },
        { level: 72, cost: 21000000, time: 192 },
        { level: 73, cost: 21500000, time: 192 },
        { level: 74, cost: 22000000, time: 192 },
        { level: 75, cost: 22500000, time: 192 }
    ],
    royalChampion: [
        { level: 1, cost: 0, time: 0 },
        { level: 2, cost: 10000, time: 8 },
        { level: 3, cost: 15000, time: 12 },
        { level: 4, cost: 20000, time: 16 },
        { level: 5, cost: 25000, time: 20 },
        { level: 6, cost: 30000, time: 24 },
        { level: 7, cost: 35000, time: 36 },
        { level: 8, cost: 40000, time: 48 },
        { level: 9, cost: 45000, time: 48 },
        { level: 10, cost: 50000, time: 48 },
        { level: 11, cost: 55000, time: 48 },
        { level: 12, cost: 60000, time: 48 },
        { level: 13, cost: 65000, time: 72 },
        { level: 14, cost: 70000, time: 72 },
        { level: 15, cost: 75000, time: 72 },
        { level: 16, cost: 80000, time: 96 },
        { level: 17, cost: 85000, time: 96 },
        { level: 18, cost: 90000, time: 96 },
        { level: 19, cost: 95000, time: 96 },
        { level: 20, cost: 100000, time: 96 },
        { level: 21, cost: 105000, time: 120 },
        { level: 22, cost: 110000, time: 120 },
        { level: 23, cost: 115000, time: 120 },
        { level: 24, cost: 120000, time: 120 },
        { level: 25, cost: 125000, time: 120 },
        { level: 26, cost: 130000, time: 144 },
        { level: 27, cost: 135000, time: 144 },
        { level: 28, cost: 140000, time: 144 },
        { level: 29, cost: 145000, time: 144 },
        { level: 30, cost: 150000, time: 144 },
        { level: 31, cost: 155000, time: 168 },
        { level: 32, cost: 160000, time: 168 },
        { level: 33, cost: 165000, time: 168 },
        { level: 34, cost: 170000, time: 168 },
        { level: 35, cost: 180000, time: 168 },
        { level: 36, cost: 190000, time: 180 },
        { level: 37, cost: 200000, time: 180 },
        { level: 38, cost: 210000, time: 180 },
        { level: 39, cost: 220000, time: 180 },
        { level: 40, cost: 230000, time: 180 },
        { level: 41, cost: 250000, time: 192 },
        { level: 42, cost: 270000, time: 192 },
        { level: 43, cost: 290000, time: 192 },
        { level: 44, cost: 310000, time: 192 },
        { level: 45, cost: 330000, time: 192 },
        { level: 46, cost: 340000, time: 192 },
        { level: 47, cost: 350000, time: 192 },
        { level: 48, cost: 360000, time: 192 },
        { level: 49, cost: 370000, time: 192 },
        { level: 50, cost: 380000, time: 192 }
    ]
};

// Mapeamento de níveis máximos por TH para cada herói
const maxLevelsByTH = {
    barbarianKing: {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 10, 8: 20, 9: 30, 10: 40, 11: 50, 12: 65, 13: 75, 14: 80, 15: 90, 16: 95, 17: 100
    },
    archerQueen: {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 10, 9: 30, 10: 40, 11: 50, 12: 65, 13: 75, 14: 80, 15: 90, 16: 95, 17: 100
    },
    battleMachine: {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 10, 10: 20, 11: 30, 12: 40, 13: 50, 14: 60, 15: 70, 16: 80, 17: 90
    },
    grandWarden: {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 20, 12: 40, 13: 50, 14: 55, 15: 65, 16: 70, 17: 75 
    },
    royalChampion: {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 25, 14: 30, 15: 40, 16: 45, 17: 50
    }
};


// ... (keep all the heroData and maxLevelsByTH constants the same) ...

// Elementos do DOM
const townHallSelect = document.getElementById('townHall');
const heroHallGroup = document.getElementById('heroHallGroup');
const heroHallSelect = document.getElementById('heroHall');
const heroLevelsContainer = document.getElementById('heroLevelsContainer');

const archerQueenGroup = document.getElementById('archerQueenGroup');
const grandWardenGroup = document.getElementById('grandWardenGroup');
const royalChampionGroup = document.getElementById('royalChampionGroup');
const battleMachineGroup = document.getElementById('battleMachineGroup');

const calculateMaxBtn = document.getElementById('calculateMax');
const maxResults = document.getElementById('maxResults');
const heroCardsContainer = document.getElementById('heroCardsContainer');
const loadingSpinner = document.getElementById('loadingSpinner');

const calculateCustomBtn = document.getElementById('calculateCustom');
const customResults = document.getElementById('customResults');
const customHeroCardsContainer = document.getElementById('customHeroCardsContainer');
const customLoadingSpinner = document.getElementById('customLoadingSpinner');

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    townHallSelect.disabled = false;
    dataLoaded();
    setupEventListeners();
});

function dataLoaded() {
    console.log('Dados dos heróis carregados com sucesso!');
}

function setupEventListeners() {
    townHallSelect.addEventListener('change', updateHeroHallVisibility);
    heroHallSelect.addEventListener('change', updateHeroLevelsVisibility);
    calculateMaxBtn.addEventListener('click', calculateMaxLevels);
    calculateCustomBtn.addEventListener('click', calculateCustomLevels);
    
    // Tab switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Input validation
    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('change', () => {
            if (input.value < 1) input.value = 1;
            const max = input.getAttribute('max');
            if (max && parseInt(input.value) > parseInt(max)) {
                input.value = max;
            }
            // Ensure end level is not less than start level in custom search
            if (input.id.includes('End')) {
                const hero = input.id.replace('custom', '').replace('End', '');
                const startInput = document.getElementById(`custom${hero}Start`);
                if (startInput && parseInt(input.value) < parseInt(startInput.value)) {
                    input.value = startInput.value;
                }
            } else if (input.id.includes('Start')) {
                const hero = input.id.replace('custom', '').replace('Start', '');
                const endInput = document.getElementById(`custom${hero}End`);
                if (endInput && parseInt(input.value) > parseInt(endInput.value)) {
                    endInput.value = input.value;
                }
            }
        });
    });
}

function updateHeroHallVisibility() {
    const townHallLevel = parseInt(townHallSelect.value);
    
    if (townHallLevel >= 7) {
        heroHallGroup.style.display = 'block';
    } else {
        heroHallGroup.style.display = 'none';
        heroHallSelect.value = '';
        heroLevelsContainer.style.display = 'none';
        maxResults.style.display = 'none';
    }
}

function updateHeroLevelsVisibility() {
    const heroHallLevel = parseInt(heroHallSelect.value);
    
    if (heroHallLevel >= 1) {
        heroLevelsContainer.style.display = 'block';
        archerQueenGroup.style.display = heroHallLevel >= 2 ? 'block' : 'none';
        battleMachineGroup.style.display = heroHallLevel >= 3 ? 'block' : 'none';
        grandWardenGroup.style.display = heroHallLevel >= 5 ? 'block' : 'none';
        royalChampionGroup.style.display = heroHallLevel >= 7 ? 'block' : 'none';
        
        // Set max values for inputs based on hero hall level
        document.getElementById('barbarianKing').max = maxLevelsByTH.barbarianKing[townHallSelect.value] || 1;
        document.getElementById('archerQueen').max = heroHallLevel >= 2 ? (maxLevelsByTH.archerQueen[townHallSelect.value] || 1) : 1;
        document.getElementById('battleMachine').max = heroHallLevel >= 3 ? (maxLevelsByTH.battleMachine[townHallSelect.value] || 1) : 1;
        document.getElementById('grandWarden').max = heroHallLevel >= 5 ? (maxLevelsByTH.grandWarden[townHallSelect.value] || 1) : 1;
        document.getElementById('royalChampion').max = heroHallLevel >= 7 ? (maxLevelsByTH.royalChampion[townHallSelect.value] || 1) : 1;
    } else {
        heroLevelsContainer.style.display = 'none';
        maxResults.style.display = 'none';
    }
}

function calculateMaxLevels() {
    const townHallLevel = parseInt(townHallSelect.value);
    const heroHallLevel = parseInt(heroHallSelect.value);
    
    if (!townHallLevel || (townHallLevel >= 7 && !heroHallLevel)) {
        alert('Por favor, preencha todos os campos obrigatórios');
        return;
    }
    
    loadingSpinner.style.display = 'block';
    calculateMaxBtn.disabled = true;
    
    setTimeout(() => {
        const currentLevels = {
            barbarianKing: parseInt(document.getElementById('barbarianKing').value) || 1,
            archerQueen: heroHallLevel >= 2 ? (parseInt(document.getElementById('archerQueen').value) || 1) : 0,
            battleMachine: heroHallLevel >= 3 ? (parseInt(document.getElementById('battleMachine').value) || 1) : 0,
            grandWarden: heroHallLevel >= 5 ? (parseInt(document.getElementById('grandWarden').value) || 1) : 0,
            royalChampion: heroHallLevel >= 7 ? (parseInt(document.getElementById('royalChampion').value) || 1) : 0,
        };
        
        const maxLevels = {
            barbarianKing: maxLevelsByTH.barbarianKing[townHallLevel] || 0,
            archerQueen: heroHallLevel >= 2 ? (maxLevelsByTH.archerQueen[townHallLevel] || 0) : 0,
            battleMachine: heroHallLevel >= 3 ? (maxLevelsByTH.battleMachine[townHallLevel] || 0) : 0,
            grandWarden: heroHallLevel >= 5 ? (maxLevelsByTH.grandWarden[townHallLevel] || 0) : 0,
            royalChampion: heroHallLevel >= 7 ? (maxLevelsByTH.royalChampion[townHallLevel] || 0) : 0,
        };
       
        const results = {};
        let totalCost = 0;
        let totalTime = 0;
        let heroCount = 0;
        let totalLevels = 0;
        let maxPossibleLevels = 0;
        
        for (const hero in maxLevels) {
            if (maxLevels[hero] > 0) {
                const startLevel = currentLevels[hero];
                const endLevel = maxLevels[hero];
                maxPossibleLevels += endLevel;
                
                if (startLevel >= endLevel) {
                    results[hero] = {
                        maxLevel: endLevel,
                        cost: 0,
                        time: 0,
                        currentLevel: startLevel,
                        status: 'Já está no nível máximo'
                    };
                } else {
                    const { totalCost: heroCost, totalTime: heroTime } = calculateUpgradeCostAndTime(hero, startLevel, endLevel);
                    totalCost += heroCost;
                    totalTime += heroTime;
                    totalLevels += endLevel - startLevel;
                    
                    results[hero] = {
                        maxLevel: endLevel,
                        cost: heroCost,
                        time: heroTime,
                        currentLevel: startLevel,
                        status: 'Pode evoluir'
                    };
                }
                heroCount++;
            }
        }
        
        const averageLevel = heroCount > 0 ? Math.round((totalLevels / heroCount) * 100) / 100 : 0;
        const progressPercentage = maxPossibleLevels > 0 ? Math.round((totalLevels / maxPossibleLevels) * 100) : 0;
        
        displayResults(results);
        updateSummary(totalCost, totalTime, averageLevel, progressPercentage);
        maxResults.style.display = 'block';
        
        loadingSpinner.style.display = 'none';
        calculateMaxBtn.disabled = false;
    }, 100);
}

function calculateCustomLevels() {
    customLoadingSpinner.style.display = 'block';
    calculateCustomBtn.disabled = true;
    
    setTimeout(() => {
        const customLevels = {
            barbarianKing: {
                start: parseInt(document.getElementById('customBKStart').value) || 1,
                end: parseInt(document.getElementById('customBKEnd').value) || 1
            },
            archerQueen: {
                start: parseInt(document.getElementById('customAQStart').value) || 1,
                end: parseInt(document.getElementById('customAQEnd').value) || 1
            },
            battleMachine: {
                start: parseInt(document.getElementById('customBMStart').value) || 1,
                end: parseInt(document.getElementById('customBMEnd').value) || 1
            },
            grandWarden: {
                start: parseInt(document.getElementById('customGWStart').value) || 1,
                end: parseInt(document.getElementById('customGWEnd').value) || 1
            },
            royalChampion: {
                start: parseInt(document.getElementById('customRCStart').value) || 1,
                end: parseInt(document.getElementById('customRCEnd').value) || 1
            }
        };
        
        const results = {};
        let totalCost = 0;
        let totalTime = 0;
        let heroCount = 0;
        let totalLevels = 0;
        let maxPossibleLevels = 0;
        
        for (const hero in customLevels) {
            const maxLevel = heroData[hero][heroData[hero].length - 1].level;
            const startLevel = Math.min(customLevels[hero].start, maxLevel);
            const endLevel = Math.min(customLevels[hero].end, maxLevel);
            maxPossibleLevels += endLevel;
            
            if (startLevel > endLevel) {
                results[hero] = {
                    currentLevel: startLevel,
                    desiredLevel: endLevel,
                    cost: 0,
                    time: 0,
                    status: 'Nível desejado é menor que o atual'
                };
            } else if (startLevel === endLevel) {
                results[hero] = {
                    currentLevel: startLevel,
                    desiredLevel: endLevel,
                    cost: 0,
                    time: 0,
                    status: 'Nível atual igual ao desejado'
                };
            } else {
                const { totalCost: heroCost, totalTime: heroTime } = calculateUpgradeCostAndTime(hero, startLevel, endLevel);
                totalCost += heroCost;
                totalTime += heroTime;
                totalLevels += endLevel - startLevel;
                
                results[hero] = {
                    currentLevel: startLevel,
                    desiredLevel: endLevel,
                    cost: heroCost,
                    time: heroTime,
                    status: 'Pode evoluir'
                };
                heroCount++;
            }
        }
        
        const averageLevel = heroCount > 0 ? Math.round((totalLevels / heroCount) * 100) / 100 : 0;
        const progressPercentage = maxPossibleLevels > 0 ? Math.round((totalLevels / maxPossibleLevels) * 100) : 0;
        
        displayCustomResults(results);
        updateCustomSummary(totalCost, totalTime, averageLevel, progressPercentage);
        customResults.style.display = 'block';
        
        customLoadingSpinner.style.display = 'none';
        calculateCustomBtn.disabled = false;
    }, 100);
}

function calculateUpgradeCostAndTime(hero, startLevel, endLevel) {
    let totalCost = 0;
    let totalTime = 0;
    
    for (let level = startLevel + 1; level <= endLevel; level++) {
        const levelData = heroData[hero].find(item => item.level === level);
        if (levelData) {
            totalCost += levelData.cost || 0;
            totalTime += levelData.time || 0;
        } else {
            console.warn(`Dados não encontrados para ${getHeroName(hero)} nível ${level}`);
        }
    }
    
    return { totalCost, totalTime };
}

function displayResults(results) {
    heroCardsContainer.innerHTML = '';
    
    for (const hero in results) {
        if (results[hero].maxLevel > 0) {
            const heroName = getHeroName(hero);
            const result = results[hero];
            const heroIcon = getHeroIcon(hero);
            
            let statusClass = 'status-warning';
            if (result.status.includes('máximo')) {
                statusClass = 'status-max';
            } else if (result.status.includes('deve ser')) {
                statusClass = 'status-error';
            }
            
            const card = document.createElement('div');
            card.className = 'hero-card';
            
            card.innerHTML = `
                <h3>${heroIcon} ${heroName}</h3>
                <div class="hero-stats">
                    <div class="stat">
                        <div class="stat-label">Nível Atual</div>
                        <div class="stat-value">${result.currentLevel}</div>
                    </div>
                    <div class="stat">
                        <div class="stat-label">Nível Máximo</div>
                        <div class="stat-value">${result.maxLevel}</div>
                    </div>
                    <div class="stat">
                        <div class="stat-label">Custo Total</div>
                        <div class="stat-value"><i class="fas fa-coins" style="color: gold;"></i> ${formatNumber(result.cost)}</div>
                    </div>
                    <div class="stat">
                        <div class="stat-label">Tempo Total</div>
                        <div class="stat-value"><i class="fas fa-clock" style="color: #3498db;"></i> ${formatTime(result.time)}</div>
                    </div>
                    <div class="stat">
                        <div class="stat-label">Status</div>
                        <div class="stat-value ${statusClass}">${result.status}</div>
                    </div>
                </div>
            `;
            
            heroCardsContainer.appendChild(card);
        }
    }
}

function displayCustomResults(results) {
    customHeroCardsContainer.innerHTML = '';
    
    for (const hero in results) {
        const heroName = getHeroName(hero);
        const result = results[hero];
        const heroIcon = getHeroIcon(hero);
        
        let statusClass = 'status-warning';
        if (result.status.includes('igual')) {
            statusClass = 'status-max';
        } else if (result.status.includes('menor')) {
            statusClass = 'status-error';
        }
        
        const card = document.createElement('div');
        card.className = 'hero-card';
        
        card.innerHTML = `
            <h3>${heroIcon} ${heroName}</h3>
            <div class="hero-stats">
                <div class="stat">
                    <div class="stat-label">Nível Inicial</div>
                    <div class="stat-value">${result.currentLevel}</div>
                </div>
                <div class="stat">
                    <div class="stat-label">Nível Desejado</div>
                    <div class="stat-value">${result.desiredLevel}</div>
                </div>
                <div class="stat">
                    <div class="stat-label">Custo Total</div>
                    <div class="stat-value"><i class="fas fa-coins" style="color: gold;"></i> ${formatNumber(result.cost)}</div>
                </div>
                <div class="stat">
                    <div class="stat-label">Tempo Total</div>
                    <div class="stat-value"><i class="fas fa-clock" style="color: #3498db;"></i> ${formatTime(result.time)}</div>
                </div>
                <div class="stat">
                    <div class="stat-label">Status</div>
                    <div class="stat-value ${statusClass}">${result.status}</div>
                </div>
            </div>
        `;
        
        customHeroCardsContainer.appendChild(card);
    }
}

function updateSummary(totalCost, totalTime, averageLevel, progressPercentage) {
    document.getElementById('totalCost').textContent = formatNumber(totalCost);
    document.getElementById('totalTime').textContent = formatTime(totalTime);
    document.getElementById('averageLevel').textContent = averageLevel;
    
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = `${progressPercentage}%`;
    progressBar.textContent = `${progressPercentage}%`;
}

function updateCustomSummary(totalCost, totalTime, averageLevel, progressPercentage) {
    document.getElementById('customTotalCost').textContent = formatNumber(totalCost);
    document.getElementById('customTotalTime').textContent = formatTime(totalTime);
    document.getElementById('customAverageLevel').textContent = averageLevel;
    
    const progressBar = document.getElementById('customProgressBar');
    progressBar.style.width = `${progressPercentage}%`;
    progressBar.textContent = `${progressPercentage}%`;
}

function getHeroName(hero) {
    const heroNames = {
        barbarianKing: 'Rei Bárbaro',
        archerQueen: 'Rainha Arqueira',
        battleMachine: 'Príncipe Servo',
        grandWarden: 'Grande Guardião',
        royalChampion: 'Campeã Real'
    };
    return heroNames[hero] || hero;
}

function getHeroIcon(hero) {
    const heroIcons = {
        barbarianKing: '<i class="fas fa-chess-king"></i>',
        archerQueen: '<i class="fas fa-chess-queen"></i>',
        battleMachine: '<i class="fas fa-robot"></i>',
        grandWarden: '<i class="fas fa-hat-wizard"></i>',
        royalChampion: '<i class="fas fa-shield-alt"></i>'
    };
    return heroIcons[hero] || '';
}

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatTime(hours) {
    if (hours < 24) return `${hours}h`;
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;
    return remainingHours === 0 ? `${days}d` : `${days}d ${remainingHours}h`;
}
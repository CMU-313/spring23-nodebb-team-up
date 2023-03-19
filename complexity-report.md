# Complexity report, 3/19/2023

* Mean per-function logical LOC: 7.771853569744708
* Mean per-function parameter count: 1.473999842880931
* Mean per-function cyclomatic complexity: 2.4608912834493886
* Mean per-function Halstead effort: 3066.2183730845104
* Mean per-module maintainability index: 117.73596085024758
* First-order density: 0%
* Change cost: 0.4694835680751174%
* Core size: 0%

## src/admin/search.js

* Physical LOC: 142
* Logical LOC: 70
* Mean parameter count: 1
* Cyclomatic complexity: 5
* Cyclomatic complexity density: 7.142857142857142%
* Maintainability index: 124.03088088084714
* Dependency count: 8
* Function: **filterDirectories**
    * Line No.: 12
    * Physical LOC: 18
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 2
    * Halstead volume: 23.264662506490403
    * Halstead effort: 46.529325012980806
* Function: **getAdminNamespaces**
    * Line No.: 31
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3
    * Halstead volume: 18.094737505048094
    * Halstead effort: 54.28421251514428
* Function: **sanitize**
    * Line No.: 36
    * Physical LOC: 8
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 4
    * Halstead volume: 49.82892142331044
    * Halstead effort: 199.31568569324176
* Function: **simplify**
    * Line No.: 45
    * Physical LOC: 8
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 2.0625
    * Halstead volume: 62.26976913547136
    * Halstead effort: 128.43139884190967
* Function: **nsToTitle**
    * Line No.: 54
    * Physical LOC: 4
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.772727272727273
    * Halstead volume: 91.37651812938249
    * Halstead effort: 161.98564577481443
* Function: **initFallback**
    * Line No.: 61
    * Physical LOC: 15
    * Logical LOC: 10
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 10%
    * Halstead difficulty: 10.35
    * Halstead volume: 178.41295556463058
    * Halstead effort: 1846.5740900939263
* Function: **fallback**
    * Line No.: 77
    * Physical LOC: 9
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 8.333333333333334
    * Halstead volume: 57
    * Halstead effort: 475.00000000000006
* Function: **initDict**
    * Line No.: 87
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.5
    * Halstead volume: 11.60964047443681
    * Halstead effort: 17.414460711655217
* Function: **buildNamespace**
    * Line No.: 92
    * Physical LOC: 32
    * Logical LOC: 15
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 11
    * Halstead volume: 349.77463164918527
    * Halstead effort: 3847.520948141038
* Function: **getDictionary**
    * Line No.: 127
    * Physical LOC: 9
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 8.333333333333334
    * Halstead volume: 57
    * Halstead effort: 475.00000000000006

## src/admin/versions.js

* Physical LOC: 52
* Logical LOC: 19
* Mean parameter count: 1
* Cyclomatic complexity: 2
* Cyclomatic complexity density: 10.526315789473683%
* Maintainability index: 112.80409005334745
* Dependency count: 3
* Function: **getLatestVersion**
    * Line No.: 12
    * Physical LOC: 36
    * Logical LOC: 9
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 22.22222222222222%
    * Halstead difficulty: 4.666666666666666
    * Halstead volume: 151.6206750336681
    * Halstead effort: 707.5631501571178

## src/api/categories.js

* Physical LOC: 102
* Logical LOC: 26
* Mean parameter count: 2
* Cyclomatic complexity: 4
* Cyclomatic complexity density: 15.384615384615385%
* Maintainability index: 135.92493040413015
* Dependency count: 5
* Function: **categoriesAPI.get**
    * Line No.: 11
    * Physical LOC: 11
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 75%
    * Halstead difficulty: 4.083333333333334
    * Halstead volume: 59.207035490257475
    * Halstead effort: 241.76206158521805
* Function: **categoriesAPI.create**
    * Line No.: 23
    * Physical LOC: 5
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 2.4
    * Halstead volume: 38.03910001730775
    * Halstead effort: 91.2938400415386
* Function: **categoriesAPI.update**
    * Line No.: 29
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 2.5
    * Halstead volume: 27
    * Halstead effort: 67.5
* Function: **categoriesAPI.delete**
    * Line No.: 36
    * Physical LOC: 11
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 1
    * Halstead volume: 11.60964047443681
    * Halstead effort: 11.60964047443681

## src/api/chats.js

* Physical LOC: 120
* Logical LOC: 29
* Mean parameter count: 1.5
* Cyclomatic complexity: 7
* Cyclomatic complexity density: 24.137931034482758%
* Maintainability index: 113.3543106286564
* Dependency count: 6
* Function: **rateLimitExceeded**
    * Line No.: 15
    * Physical LOC: 10
    * Logical LOC: 7
    * Parameter count: 1
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 57.14285714285714%
    * Halstead difficulty: 11.666666666666668
    * Halstead volume: 236.34987578777677
    * Halstead effort: 2757.4152175240624
* Function: **chatsAPI.create**
    * Line No.: 26
    * Physical LOC: 14
    * Logical LOC: 7
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 57.14285714285714%
    * Halstead difficulty: 7.777777777777778
    * Halstead volume: 131.68575291675114
    * Halstead effort: 1024.2225226858423

## src/api/flags.js

* Physical LOC: 84
* Logical LOC: 8
* Mean parameter count: 0
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 12.5%
* Maintainability index: 116.85514708437239
* Dependency count: 2

## src/api/index.js

* Physical LOC: 11
* Logical LOC: 9
* Mean parameter count: 0
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 11.11111111111111%
* Maintainability index: 113.34192924701482
* Dependency count: 7

## src/cache/lru.js

* Physical LOC: 146
* Logical LOC: 68
* Mean parameter count: 1
* Cyclomatic complexity: 9
* Cyclomatic complexity density: 13.23529411764706%
* Maintainability index: 110.97608505903582
* Dependency count: 4
* Function: **module.exports**
    * Line No.: 3
    * Physical LOC: 144
    * Logical LOC: 31
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 9.67741935483871%
    * Halstead difficulty: 17.36
    * Halstead volume: 1344
    * Halstead effort: 23331.84
* Function: **cache.set**
    * Line No.: 60
    * Physical LOC: 10
    * Logical LOC: 6
    * Parameter count: 3
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 8.1
    * Halstead volume: 131.68575291675114
    * Halstead effort: 1066.6545986256842
* Function: **cache.get**
    * Line No.: 71
    * Physical LOC: 12
    * Logical LOC: 8
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 37.5%
    * Halstead difficulty: 8.5
    * Halstead volume: 142.62362713128297
    * Halstead effort: 1212.3008306159052
* Function: **cache.del**
    * Line No.: 84
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 5.142857142857142
    * Halstead volume: 81.40967379910403
    * Halstead effort: 418.6783223953921
* Function: **cache.reset**
    * Line No.: 93
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1
    * Halstead volume: 13.931568569324174
    * Halstead effort: 13.931568569324174
* Function: **localReset**
    * Line No.: 99
    * Physical LOC: 5
    * Logical LOC: 3
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 2
    * Halstead volume: 44.37895002019238
    * Halstead effort: 88.75790004038475
* Function: **cache.getUnCachedKeys**
    * Line No.: 115
    * Physical LOC: 21
    * Logical LOC: 10
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 11.818181818181818
    * Halstead volume: 219.61587113893805
    * Halstead effort: 2595.460295278359
* Function: **cache.dump**
    * Line No.: 137
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.5
    * Halstead volume: 11.60964047443681
    * Halstead effort: 17.414460711655217
* Function: **cache.peek**
    * Line No.: 141
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 2
    * Halstead volume: 18.094737505048094
    * Halstead effort: 36.18947501009619

## src/cache/ttl.js

* Physical LOC: 119
* Logical LOC: 62
* Mean parameter count: 1
* Cyclomatic complexity: 8
* Cyclomatic complexity density: 12.903225806451612%
* Maintainability index: 114.60084117231543
* Dependency count: 2
* Function: **module.exports**
    * Line No.: 3
    * Physical LOC: 117
    * Logical LOC: 24
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 8.333333333333332%
    * Halstead difficulty: 11.805555555555555
    * Halstead volume: 861.6756651448941
    * Halstead effort: 10172.559935738333
* Function: **cache.set**
    * Line No.: 33
    * Physical LOC: 10
    * Logical LOC: 6
    * Parameter count: 3
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 8.1
    * Halstead volume: 131.68575291675114
    * Halstead effort: 1066.6545986256842
* Function: **cache.get**
    * Line No.: 44
    * Physical LOC: 12
    * Logical LOC: 8
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 37.5%
    * Halstead difficulty: 8.5
    * Halstead volume: 142.62362713128297
    * Halstead effort: 1212.3008306159052
* Function: **cache.del**
    * Line No.: 57
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 5.142857142857142
    * Halstead volume: 81.40967379910403
    * Halstead effort: 418.6783223953921
* Function: **cache.reset**
    * Line No.: 66
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1
    * Halstead volume: 13.931568569324174
    * Halstead effort: 13.931568569324174
* Function: **localReset**
    * Line No.: 72
    * Physical LOC: 5
    * Logical LOC: 3
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 2
    * Halstead volume: 44.37895002019238
    * Halstead effort: 88.75790004038475
* Function: **cache.getUnCachedKeys**
    * Line No.: 88
    * Physical LOC: 21
    * Logical LOC: 10
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 11.818181818181818
    * Halstead volume: 219.61587113893805
    * Halstead effort: 2595.460295278359
* Function: **cache.dump**
    * Line No.: 110
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.5
    * Halstead volume: 25.26619429851844
    * Halstead effort: 37.89929144777766
* Function: **cache.peek**
    * Line No.: 114
    * Physical LOC: 3
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 2.916666666666667
    * Halstead volume: 41.51317942364757
    * Halstead effort: 121.08010665230543

## src/categories/activeusers.js

* Physical LOC: 17
* Logical LOC: 11
* Mean parameter count: 1
* Cyclomatic complexity: 2
* Cyclomatic complexity density: 18.181818181818183%
* Maintainability index: 132.79344023889803
* Dependency count: 3
* Function: **module.exports**
    * Line No.: 8
    * Physical LOC: 10
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 2
    * Halstead volume: 18.094737505048094
    * Halstead effort: 36.18947501009619
* Function: **Categories.getActiveUsers**
    * Line No.: 9
    * Physical LOC: 8
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 5.6
    * Halstead volume: 129.26767504471167
    * Halstead effort: 723.8989802503853

## src/categories/create.js

* Physical LOC: 250
* Logical LOC: 135
* Mean parameter count: 2.3333333333333335
* Cyclomatic complexity: 27
* Cyclomatic complexity density: 20%
* Maintainability index: 98.5698747074059
* Dependency count: 8
* Function: **module.exports**
    * Line No.: 13
    * Physical LOC: 238
    * Logical LOC: 8
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 12.5%
    * Halstead difficulty: 2.55
    * Halstead volume: 122.11451069865605
    * Halstead effort: 311.3920022815729
* Function: **Categories.create**
    * Line No.: 14
    * Physical LOC: 100
    * Logical LOC: 49
    * Parameter count: 1
    * Cyclomatic complexity: 17
    * Cyclomatic complexity density: 34.69387755102041%
    * Halstead difficulty: 17.350746268656714
    * Halstead volume: 1710.181489242265
    * Halstead effort: 29672.92509319601
* Function: **duplicateCategoriesChildren**
    * Line No.: 115
    * Physical LOC: 19
    * Logical LOC: 6
    * Parameter count: 3
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 5.5
    * Halstead volume: 79.95445336320968
    * Halstead effort: 439.74949349765325
* Function: **Categories.assignColours**
    * Line No.: 135
    * Physical LOC: 6
    * Logical LOC: 4
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 6.222222222222221
    * Halstead volume: 232.19280948873623
    * Halstead effort: 1444.7552590410253
* Function: **Categories.copySettingsFrom**
    * Line No.: 142
    * Physical LOC: 52
    * Logical LOC: 28
    * Parameter count: 3
    * Cyclomatic complexity: 7
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 18.803571428571427
    * Halstead volume: 782.2025926742402
    * Halstead effort: 14708.202322963838
* Function: **copyTagWhitelist**
    * Line No.: 195
    * Physical LOC: 6
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 2
    * Halstead volume: 28.529325012980813
    * Halstead effort: 57.058650025961626
* Function: **Categories.copyPrivilegesFrom**
    * Line No.: 202
    * Physical LOC: 24
    * Logical LOC: 14
    * Parameter count: 4
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 28.57142857142857%
    * Halstead difficulty: 9.642857142857142
    * Halstead volume: 275.9372793194778
    * Halstead effort: 2660.823764866393
* Function: **copyPrivileges**
    * Line No.: 227
    * Physical LOC: 10
    * Logical LOC: 5
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 2.909090909090909
    * Halstead volume: 125.0204990594726
    * Halstead effort: 363.6959972639203
* Function: **copyPrivilegesByGroup**
    * Line No.: 238
    * Physical LOC: 12
    * Logical LOC: 7
    * Parameter count: 4
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 14.285714285714285%
    * Halstead difficulty: 3.2
    * Halstead volume: 129.45006734995852
    * Halstead effort: 414.24021551986726

## src/categories/data.js

* Physical LOC: 112
* Logical LOC: 56
* Mean parameter count: 2
* Cyclomatic complexity: 19
* Cyclomatic complexity density: 33.92857142857143%
* Maintainability index: 124.02465571148745
* Dependency count: 5
* Function: **module.exports**
    * Line No.: 16
    * Physical LOC: 50
    * Logical LOC: 8
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 12.5%
    * Halstead difficulty: 3.75
    * Halstead volume: 181.32154618891352
    * Halstead effort: 679.9557982084257
* Function: **Categories.getCategoriesFields**
    * Line No.: 17
    * Physical LOC: 16
    * Logical LOC: 7
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 42.857142857142854%
    * Halstead difficulty: 7.363636363636364
    * Halstead volume: 172.8771237954945
    * Halstead effort: 1273.0042752213687
* Function: **Categories.getCategoryData**
    * Line No.: 34
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 4.800000000000001
    * Halstead volume: 51.89147427955947
    * Halstead effort: 249.07907654188548
* Function: **Categories.getCategoriesData**
    * Line No.: 39
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1
* Function: **Categories.getCategoryField**
    * Line No.: 43
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 4.375
    * Halstead volume: 38.03910001730775
    * Halstead effort: 166.4210625757214
* Function: **Categories.getCategoryFields**
    * Line No.: 48
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 3.5
    * Halstead volume: 39.863137138648355
    * Halstead effort: 139.52097998526924
* Function: **Categories.getAllCategoryFields**
    * Line No.: 53
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.5
    * Halstead volume: 11.60964047443681
    * Halstead effort: 17.414460711655217
* Function: **Categories.setCategoryField**
    * Line No.: 58
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 4.754887502163468
    * Halstead effort: 0
* Function: **Categories.incrementCategoryFieldBy**
    * Line No.: 62
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 4.754887502163468
    * Halstead effort: 0
* Function: **defaultIntField**
    * Line No.: 67
    * Physical LOC: 10
    * Logical LOC: 3
    * Parameter count: 4
    * Cyclomatic complexity: 7
    * Cyclomatic complexity density: 233.33333333333334%
    * Halstead difficulty: 9.964285714285715
    * Halstead volume: 266.89015540736375
    * Halstead effort: 2659.369762809089
* Function: **modifyCategory**
    * Line No.: 78
    * Physical LOC: 35
    * Logical LOC: 17
    * Parameter count: 2
    * Cyclomatic complexity: 8
    * Cyclomatic complexity density: 47.05882352941176%
    * Halstead difficulty: 8.875
    * Halstead volume: 637.0549591742423
    * Halstead effort: 5653.862762671401

## src/categories/delete.js

* Physical LOC: 91
* Logical LOC: 40
* Mean parameter count: 1.4
* Cyclomatic complexity: 2
* Cyclomatic complexity density: 5%
* Maintainability index: 122.59950578967661
* Dependency count: 8
* Function: **module.exports**
    * Line No.: 12
    * Physical LOC: 80
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 1.75
    * Halstead volume: 41.20902501875006
    * Halstead effort: 72.1157937828126
* Function: **Categories.purge**
    * Line No.: 13
    * Physical LOC: 15
    * Logical LOC: 9
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 11.11111111111111%
    * Halstead difficulty: 4.5
    * Halstead volume: 104
    * Halstead effort: 468
* Function: **purgeCategory**
    * Line No.: 29
    * Physical LOC: 27
    * Logical LOC: 9
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 22.22222222222222%
    * Halstead difficulty: 5.833333333333334
    * Halstead volume: 108
    * Halstead effort: 630.0000000000001
* Function: **removeFromParent**
    * Line No.: 57
    * Physical LOC: 28
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 2.75
    * Halstead volume: 89.85848369899593
    * Halstead effort: 247.1108301722388
* Function: **deleteTags**
    * Line No.: 86
    * Physical LOC: 5
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 1
    * Halstead volume: 8
    * Halstead effort: 8

## src/categories/recentreplies.js

* Physical LOC: 211
* Logical LOC: 86
* Mean parameter count: 2.1818181818181817
* Cyclomatic complexity: 16
* Cyclomatic complexity density: 18.6046511627907%
* Maintainability index: 115.80695393029879
* Dependency count: 8
* Function: **module.exports**
    * Line No.: 14
    * Physical LOC: 199
    * Logical LOC: 10
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 10%
    * Halstead difficulty: 2.625
    * Halstead volume: 160.18251441994926
    * Halstead effort: 420.4791003523668
* Function: **Categories.getRecentReplies**
    * Line No.: 15
    * Physical LOC: 11
    * Logical LOC: 7
    * Parameter count: 4
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 28.57142857142857%
    * Halstead difficulty: 8.181818181818182
    * Halstead volume: 136.16184010614157
    * Halstead effort: 1114.0514190502493
* Function: **Categories.updateRecentTid**
    * Line No.: 27
    * Physical LOC: 18
    * Logical LOC: 9
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 44.44444444444444%
    * Halstead difficulty: 9.545454545454547
    * Halstead volume: 193.26196660226546
    * Halstead effort: 1844.7733175670796
* Function: **Categories.updateRecentTidForCid**
    * Line No.: 46
    * Physical LOC: 22
    * Logical LOC: 14
    * Parameter count: 1
    * Cyclomatic complexity: 7
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 12.500000000000002
    * Halstead volume: 236.34987578777677
    * Halstead effort: 2954.37344734721
* Function: **Categories.getRecentTopicReplies**
    * Line No.: 69
    * Physical LOC: 28
    * Logical LOC: 15
    * Parameter count: 3
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 26.666666666666668%
    * Halstead difficulty: 8.8
    * Halstead volume: 423.9338501182696
    * Halstead effort: 3730.6178810407728
* Function: **getTopics**
    * Line No.: 98
    * Physical LOC: 32
    * Logical LOC: 8
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 12.5%
    * Halstead difficulty: 3.6666666666666665
    * Halstead volume: 203.13062045970605
    * Halstead effort: 744.8122750189222
* Function: **assignTopicsToCategories**
    * Line No.: 131
    * Physical LOC: 11
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 2
    * Halstead volume: 23.21928094887362
    * Halstead effort: 46.43856189774724
* Function: **bubbleUpChildrenPosts**
    * Line No.: 143
    * Physical LOC: 16
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.5
    * Halstead volume: 10
    * Halstead effort: 15
* Function: **getPostsRecursive**
    * Line No.: 160
    * Physical LOC: 7
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 3
    * Halstead volume: 69.73835003173087
    * Halstead effort: 209.21505009519262
* Function: **Categories.moveRecentReplies**
    * Line No.: 169
    * Physical LOC: 31
    * Logical LOC: 3
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 1
    * Halstead volume: 11.60964047443681
    * Halstead effort: 11.60964047443681
* Function: **updatePostCount**
    * Line No.: 201
    * Physical LOC: 11
    * Logical LOC: 4
    * Parameter count: 3
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3.125
    * Halstead volume: 31.699250014423125
    * Halstead effort: 99.06015629507226

## src/categories/search.js

* Physical LOC: 81
* Logical LOC: 41
* Mean parameter count: 1.5
* Cyclomatic complexity: 9
* Cyclomatic complexity density: 21.951219512195124%
* Maintainability index: 107.44730824492399
* Dependency count: 4
* Function: **module.exports**
    * Line No.: 9
    * Physical LOC: 73
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 1.7999999999999998
    * Halstead volume: 33
    * Halstead effort: 59.39999999999999
* Function: **Categories.search**
    * Line No.: 10
    * Physical LOC: 54
    * Logical LOC: 26
    * Parameter count: 1
    * Cyclomatic complexity: 7
    * Cyclomatic complexity density: 26.923076923076923%
    * Halstead difficulty: 14.184782608695652
    * Halstead volume: 1008.2253473856907
    * Halstead effort: 14301.457373242678
* Function: **findCids**
    * Line No.: 65
    * Physical LOC: 11
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 75%
    * Halstead difficulty: 6.875
    * Halstead volume: 100.07820003461549
    * Halstead effort: 688.0376252379815
* Function: **getChildrenCids**
    * Line No.: 77
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.5
    * Halstead volume: 15.509775004326936
    * Halstead effort: 23.264662506490403

## src/categories/unread.js

* Physical LOC: 38
* Logical LOC: 23
* Mean parameter count: 1.6
* Cyclomatic complexity: 7
* Cyclomatic complexity density: 30.434782608695656%
* Maintainability index: 127.63514861856575
* Dependency count: 1
* Function: **module.exports**
    * Line No.: 5
    * Physical LOC: 34
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 3.25
    * Halstead volume: 79.24812503605781
    * Halstead effort: 257.5564063671879
* Function: **Categories.markAsRead**
    * Line No.: 6
    * Physical LOC: 9
    * Logical LOC: 6
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 7.5
    * Halstead volume: 169.4584015082173
    * Halstead effort: 1270.9380113116297
* Function: **Categories.markAsUnreadForAll**
    * Line No.: 16
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 2.6666666666666665
    * Halstead volume: 22.458839376460833
    * Halstead effort: 59.89023833722889
* Function: **Categories.hasReadCategories**
    * Line No.: 23
    * Physical LOC: 8
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 5.5
    * Halstead volume: 83.76180828526728
    * Halstead effort: 460.68994556897
* Function: **Categories.hasReadCategory**
    * Line No.: 32
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 2.3333333333333335
    * Halstead volume: 39.863137138648355
    * Halstead effort: 93.01398665684617

## src/categories/update.js

* Physical LOC: 145
* Logical LOC: 83
* Mean parameter count: 1.8888888888888888
* Cyclomatic complexity: 15
* Cyclomatic complexity density: 18.072289156626507%
* Maintainability index: 112.18434897576115
* Dependency count: 7
* Function: **module.exports**
    * Line No.: 11
    * Physical LOC: 135
    * Logical LOC: 8
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 12.5%
    * Halstead difficulty: 1.9500000000000002
    * Halstead volume: 92.5109929535273
    * Halstead effort: 180.39643625937828
* Function: **Categories.update**
    * Line No.: 12
    * Physical LOC: 5
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 3.75
    * Halstead volume: 34.86917501586544
    * Halstead effort: 130.75940630949538
* Function: **updateCategory**
    * Line No.: 18
    * Physical LOC: 26
    * Logical LOC: 15
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 26.666666666666668%
    * Halstead difficulty: 11.18
    * Halstead volume: 440.82591112926116
    * Halstead effort: 4928.43368642514
* Function: **updateCategoryField**
    * Line No.: 45
    * Physical LOC: 16
    * Logical LOC: 14
    * Parameter count: 3
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 42.857142857142854%
    * Halstead difficulty: 3.25
    * Halstead volume: 107.5488750216347
    * Halstead effort: 349.53384382031277
* Function: **updateParent**
    * Line No.: 62
    * Physical LOC: 27
    * Logical LOC: 12
    * Parameter count: 2
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 41.66666666666667%
    * Halstead difficulty: 9.625
    * Halstead volume: 256.76392511682735
    * Halstead effort: 2471.3527792494633
* Function: **updateTagWhitelist**
    * Line No.: 90
    * Physical LOC: 8
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 2.8
    * Halstead volume: 102.7985828955553
    * Halstead effort: 287.83603210755484
* Function: **updateOrder**
    * Line No.: 99
    * Physical LOC: 34
    * Logical LOC: 11
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 27.27272727272727%
    * Halstead difficulty: 10.421052631578949
    * Halstead volume: 302.2059749335994
    * Halstead effort: 3149.3043703606677
* Function: **Categories.parseDescription**
    * Line No.: 134
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1
    * Halstead volume: 11.60964047443681
    * Halstead effort: 11.60964047443681
* Function: **updateName**
    * Line No.: 139
    * Physical LOC: 6
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 1
    * Halstead volume: 11.60964047443681
    * Halstead effort: 11.60964047443681

## src/categories/watch.js

* Physical LOC: 54
* Logical LOC: 31
* Mean parameter count: 2
* Cyclomatic complexity: 6
* Cyclomatic complexity density: 19.35483870967742%
* Maintainability index: 124.44375508314029
* Dependency count: 2
* Function: **module.exports**
    * Line No.: 6
    * Physical LOC: 49
    * Logical LOC: 9
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 11.11111111111111%
    * Halstead difficulty: 4.464285714285714
    * Halstead volume: 195.40466561840492
    * Halstead effort: 872.342257225022
* Function: **Categories.isIgnored**
    * Line No.: 13
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 6.285714285714286
    * Halstead volume: 89.85848369899593
    * Halstead effort: 564.824754679403
* Function: **Categories.getWatchState**
    * Line No.: 21
    * Physical LOC: 14
    * Logical LOC: 7
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 57.14285714285714%
    * Halstead difficulty: 7.916666666666666
    * Halstead volume: 196.21499122004107
    * Halstead effort: 1553.3686804919917
* Function: **Categories.getIgnorers**
    * Line No.: 36
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 3
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 8
    * Halstead volume: 70.30835464468075
    * Halstead effort: 562.466837157446
* Function: **Categories.filterIgnoringUids**
    * Line No.: 41
    * Physical LOC: 5
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 3.5
    * Halstead volume: 46.50699332842308
    * Halstead effort: 162.7744766494808
* Function: **Categories.getUidsWatchStates**
    * Line No.: 47
    * Physical LOC: 7
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 2.5
    * Halstead volume: 28.529325012980813
    * Halstead effort: 71.32331253245204

## src/cli/colors.js

* Physical LOC: 160
* Logical LOC: 86
* Mean parameter count: 1.3636363636363635
* Cyclomatic complexity: 21
* Cyclomatic complexity density: 24.418604651162788%
* Maintainability index: 116.38937549059277
* Dependency count: 2
* Function: **humanReadableArgName**
    * Line No.: 21
    * Physical LOC: 5
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 150%
    * Halstead difficulty: 5.5
    * Halstead volume: 88
    * Halstead effort: 484
* Function: **getControlCharacterSpaces**
    * Line No.: 27
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 5
    * Halstead volume: 68.53238859703687
    * Halstead effort: 342.66194298518434
* Function: **&lt;anonymous>.depth**
    * Line No.: 34
    * Physical LOC: 10
    * Logical LOC: 8
    * Parameter count: 0
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 37.5%
    * Halstead difficulty: 9.714285714285714
    * Halstead volume: 125.0204990594726
    * Halstead effort: 1214.4848480063051
* Function: **commandUsage**
    * Line No.: 46
    * Physical LOC: 28
    * Logical LOC: 15
    * Parameter count: 1
    * Cyclomatic complexity: 7
    * Cyclomatic complexity density: 46.666666666666664%
    * Halstead difficulty: 14.233333333333333
    * Halstead volume: 660.591225855113
    * Halstead effort: 9402.415114671106
* Function: **subcommandTerm**
    * Line No.: 74
    * Physical LOC: 11
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 133.33333333333331%
    * Halstead difficulty: 6.447368421052632
    * Halstead volume: 329.03078026987646
    * Halstead effort: 2121.3826622663087
* Function: **longestOptionTermLength**
    * Line No.: 85
    * Physical LOC: 6
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 2.0999999999999996
    * Halstead volume: 36
    * Halstead effort: 75.6
* Function: **longestSubcommandTermLength**
    * Line No.: 91
    * Physical LOC: 6
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 2.0999999999999996
    * Halstead volume: 36
    * Halstead effort: 75.6
* Function: **longestArgumentTermLength**
    * Line No.: 97
    * Physical LOC: 6
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 2.0999999999999996
    * Halstead volume: 36
    * Halstead effort: 75.6
* Function: **formatHelp**
    * Line No.: 103
    * Physical LOC: 57
    * Logical LOC: 21
    * Parameter count: 2
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 28.57142857142857%
    * Halstead difficulty: 15.435483870967744
    * Halstead volume: 884.3400573357168
    * Halstead effort: 13650.216691456146
* Function: **formatItem**
    * Line No.: 110
    * Physical LOC: 8
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 6
    * Halstead volume: 173.9178331268546
    * Halstead effort: 1043.5069987611275
* Function: **formatList**
    * Line No.: 118
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.6875
    * Halstead volume: 55.350905898196764
    * Halstead effort: 93.40465370320705

## src/cli/manage.js

* Physical LOC: 209
* Logical LOC: 121
* Mean parameter count: 1
* Cyclomatic complexity: 14
* Cyclomatic complexity density: 11.570247933884298%
* Maintainability index: 99.2213942261342
* Dependency count: 14
* Function: **install**
    * Line No.: 17
    * Physical LOC: 35
    * Logical LOC: 20
    * Parameter count: 2
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 30%
    * Halstead difficulty: 7.6875
    * Halstead volume: 408.59592366803474
    * Halstead effort: 3141.0811631980173
* Function: **activate**
    * Line No.: 53
    * Physical LOC: 43
    * Logical LOC: 23
    * Parameter count: 1
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 26.08695652173913%
    * Halstead difficulty: 7.454545454545454
    * Halstead volume: 382.73746645746445
    * Halstead effort: 2853.133840864735
* Function: **listPlugins**
    * Line No.: 97
    * Physical LOC: 33
    * Logical LOC: 9
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 11.11111111111111%
    * Halstead difficulty: 3.5
    * Halstead volume: 194.4867642699313
    * Halstead effort: 680.7036749447595
* Function: **listEvents**
    * Line No.: 131
    * Physical LOC: 9
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 2.25
    * Halstead volume: 68.11428751370197
    * Halstead effort: 153.25714690582942
* Function: **info**
    * Line No.: 141
    * Physical LOC: 52
    * Logical LOC: 36
    * Parameter count: 0
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 11.11111111111111%
    * Halstead difficulty: 9.583333333333334
    * Halstead volume: 778.8222358040389
    * Halstead effort: 7463.71309312204
* Function: **buildWrapper**
    * Line No.: 194
    * Physical LOC: 9
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 1
    * Halstead volume: 19.651484454403228
    * Halstead effort: 19.651484454403228

## src/cli/reset.js

* Physical LOC: 157
* Logical LOC: 86
* Mean parameter count: 0.36363636363636365
* Cyclomatic complexity: 9
* Cyclomatic complexity density: 10.465116279069768%
* Maintainability index: 121.1864730564782
* Dependency count: 12
* Function: **exports.reset**
    * Line No.: 17
    * Physical LOC: 73
    * Logical LOC: 15
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 13.333333333333334%
    * Halstead difficulty: 6.351351351351351
    * Halstead volume: 455.4762858375663
    * Halstead effort: 2892.889923562921
* Function: **theme**
    * Line No.: 19
    * Physical LOC: 14
    * Logical LOC: 8
    * Parameter count: 0
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 37.5%
    * Halstead difficulty: 6.666666666666667
    * Halstead volume: 83.76180828526728
    * Halstead effort: 558.4120552351152
* Function: **plugin**
    * Line No.: 33
    * Physical LOC: 14
    * Logical LOC: 8
    * Parameter count: 0
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 37.5%
    * Halstead difficulty: 6.666666666666667
    * Halstead volume: 83.76180828526728
    * Halstead effort: 558.4120552351152
* Function: **all**
    * Line No.: 49
    * Physical LOC: 6
    * Logical LOC: 4
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **resetSettings**
    * Line No.: 91
    * Physical LOC: 5
    * Logical LOC: 3
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 1.5
    * Halstead volume: 25.84962500721156
    * Halstead effort: 38.77443751081734
* Function: **resetTheme**
    * Line No.: 97
    * Physical LOC: 9
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **resetThemes**
    * Line No.: 107
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **resetThemeTo**
    * Line No.: 111
    * Physical LOC: 8
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 1
    * Halstead volume: 11.60964047443681
    * Halstead effort: 11.60964047443681
* Function: **resetPlugin**
    * Line No.: 120
    * Physical LOC: 23
    * Logical LOC: 12
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 4.3125
    * Halstead volume: 178.37726474549189
    * Halstead effort: 769.2519542149338
* Function: **resetPlugins**
    * Line No.: 144
    * Physical LOC: 8
    * Logical LOC: 5
    * Parameter count: 0
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 1.6363636363636362
    * Halstead volume: 79.95445336320968
    * Halstead effort: 130.83456004888856
* Function: **resetWidgets**
    * Line No.: 153
    * Physical LOC: 5
    * Logical LOC: 3
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 1
    * Halstead volume: 11.60964047443681
    * Halstead effort: 11.60964047443681

## src/cli/running.js

* Physical LOC: 125
* Logical LOC: 47
* Mean parameter count: 0.5
* Cyclomatic complexity: 5
* Cyclomatic complexity density: 10.638297872340425%
* Maintainability index: 121.46048381028413
* Dependency count: 5
* Function: **getRunningPid**
    * Line No.: 12
    * Physical LOC: 18
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 2
    * Halstead volume: 46.604512509375034
    * Halstead effort: 93.20902501875007
* Function: **start**
    * Line No.: 31
    * Physical LOC: 40
    * Logical LOC: 20
    * Parameter count: 1
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 11.61111111111111
    * Halstead volume: 530.040678857802
    * Halstead effort: 6154.361215626702
* Function: **stop**
    * Line No.: 72
    * Physical LOC: 10
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1
* Function: **restart**
    * Line No.: 83
    * Physical LOC: 13
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **status**
    * Line No.: 97
    * Physical LOC: 15
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1
* Function: **log**
    * Line No.: 113
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 2.9545454545454546
    * Halstead volume: 84
    * Halstead effort: 248.1818181818182

## src/cli/setup.js

* Physical LOC: 60
* Logical LOC: 41
* Mean parameter count: 1
* Cyclomatic complexity: 7
* Cyclomatic complexity density: 17.073170731707318%
* Maintainability index: 81.7819947607011
* Dependency count: 9
* Function: **setup**
    * Line No.: 9
    * Physical LOC: 49
    * Logical LOC: 33
    * Parameter count: 1
    * Cyclomatic complexity: 7
    * Cyclomatic complexity density: 21.21212121212121%
    * Halstead difficulty: 11.510204081632653
    * Halstead volume: 1043.8097714110681
    * Halstead effort: 12014.463491343722

## src/cli/upgrade-plugins.js

* Physical LOC: 159
* Logical LOC: 70
* Mean parameter count: 0.5
* Cyclomatic complexity: 7
* Cyclomatic complexity density: 10%
* Maintainability index: 112.38454466231067
* Dependency count: 10
* Function: **getModuleVersions**
    * Line No.: 22
    * Physical LOC: 17
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 2.916666666666667
    * Halstead volume: 48.43204266092217
    * Halstead effort: 141.26012442768968
* Function: **getInstalledPlugins**
    * Line No.: 40
    * Physical LOC: 29
    * Logical LOC: 5
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 6.333333333333334
    * Halstead volume: 164.0894050155578
    * Halstead effort: 1039.232898431866
* Function: **getCurrentVersion**
    * Line No.: 70
    * Physical LOC: 5
    * Logical LOC: 3
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 4.375
    * Halstead volume: 44.37895002019238
    * Halstead effort: 194.15790633834166
* Function: **getSuggestedModules**
    * Line No.: 76
    * Physical LOC: 11
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 8.125
    * Halstead volume: 104.2481250360578
    * Halstead effort: 847.0160159179696
* Function: **checkPlugins**
    * Line No.: 88
    * Physical LOC: 33
    * Logical LOC: 12
    * Parameter count: 0
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 16.666666666666664%
    * Halstead difficulty: 7.2
    * Halstead volume: 325.48472667354736
    * Halstead effort: 2343.4900320495412
* Function: **upgradePlugins**
    * Line No.: 122
    * Physical LOC: 36
    * Logical LOC: 20
    * Parameter count: 0
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 15%
    * Halstead difficulty: 7.764705882352942
    * Halstead volume: 505.2504848623301
    * Halstead effort: 3923.1214118722105

## src/cli/upgrade.js

* Physical LOC: 95
* Logical LOC: 60
* Mean parameter count: 0.42857142857142855
* Cyclomatic complexity: 11
* Cyclomatic complexity density: 18.333333333333332%
* Maintainability index: 120.34567235339922
* Dependency count: 4
* Function: **handler**
    * Line No.: 12
    * Physical LOC: 5
    * Logical LOC: 3
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 1.1111111111111112
    * Halstead volume: 65.72920075410866
    * Halstead effort: 73.03244528234296
* Function: **handler**
    * Line No.: 20
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1
    * Halstead volume: 49.82892142331044
    * Halstead effort: 49.82892142331044
* Function: **handler**
    * Line No.: 27
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **handler**
    * Line No.: 34
    * Physical LOC: 5
    * Logical LOC: 3
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **handler**
    * Line No.: 42
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **runSteps**
    * Line No.: 48
    * Physical LOC: 24
    * Logical LOC: 12
    * Parameter count: 1
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 12.299999999999999
    * Halstead volume: 431.07617568587636
    * Halstead effort: 5302.236960936279
* Function: **runUpgrade**
    * Line No.: 73
    * Physical LOC: 21
    * Logical LOC: 13
    * Parameter count: 2
    * Cyclomatic complexity: 8
    * Cyclomatic complexity density: 61.53846153846154%
    * Halstead difficulty: 6.4799999999999995
    * Halstead volume: 340.8600103637728
    * Halstead effort: 2208.7728671572477

## src/cli/user.js

* Physical LOC: 311
* Logical LOC: 149
* Mean parameter count: 1
* Cyclomatic complexity: 18
* Cyclomatic complexity density: 12.080536912751679%
* Maintainability index: 110.70562056077557
* Dependency count: 13
* Function: **init**
    * Line No.: 77
    * Physical LOC: 11
    * Logical LOC: 8
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 12.5%
    * Halstead difficulty: 1.4
    * Halstead volume: 143.0611994437619
    * Halstead effort: 200.28567922126663
* Function: **execute**
    * Line No.: 89
    * Physical LOC: 12
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 1
    * Halstead volume: 15.509775004326936
    * Halstead effort: 15.509775004326936
* Function: **UserCmdHelpers**
    * Line No.: 102
    * Physical LOC: 52
    * Logical LOC: 9
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 11.11111111111111%
    * Halstead difficulty: 6.5
    * Halstead volume: 89.62406251802891
    * Halstead effort: 582.556406367188
* Function: **getAdminUidOrFail**
    * Line No.: 103
    * Physical LOC: 9
    * Logical LOC: 6
    * Parameter count: 0
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 6.666666666666667
    * Halstead volume: 79.95445336320968
    * Halstead effort: 533.0296890880645
* Function: **setupApp**
    * Line No.: 113
    * Physical LOC: 21
    * Logical LOC: 11
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 9.090909090909092%
    * Halstead difficulty: 3.5238095238095237
    * Halstead volume: 315.78222090468125
    * Halstead effort: 1112.7563974736386
* Function: **UserCommands**
    * Line No.: 155
    * Physical LOC: 157
    * Logical LOC: 18
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 5.555555555555555%
    * Halstead difficulty: 9.1
    * Halstead volume: 192.11075353876598
    * Halstead effort: 1748.2078572027704
* Function: **info**
    * Line No.: 158
    * Physical LOC: 17
    * Logical LOC: 12
    * Parameter count: 1
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 7.071428571428571
    * Halstead volume: 208.0838499786226
    * Halstead effort: 1471.4500819916882
* Function: **create**
    * Line No.: 176
    * Physical LOC: 21
    * Logical LOC: 9
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 5
    * Halstead volume: 183.39850002884629
    * Halstead effort: 916.9925001442314
* Function: **reset**
    * Line No.: 198
    * Physical LOC: 39
    * Logical LOC: 22
    * Parameter count: 2
    * Cyclomatic complexity: 7
    * Cyclomatic complexity density: 31.818181818181817%
    * Halstead difficulty: 8.75
    * Halstead volume: 427.34687866502856
    * Halstead effort: 3739.2851883189996
* Function: **deleteUser**
    * Line No.: 238
    * Physical LOC: 26
    * Logical LOC: 19
    * Parameter count: 2
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 31.57894736842105%
    * Halstead difficulty: 9.035714285714285
    * Halstead volume: 236.83666567851094
    * Halstead effort: 2139.988443452259
* Function: **makeAdmin**
    * Line No.: 265
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 1.9285714285714288
    * Halstead volume: 46.50699332842308
    * Halstead effort: 89.6920585619588
* Function: **makeGlobalMod**
    * Line No.: 272
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 1.9285714285714288
    * Halstead volume: 46.50699332842308
    * Halstead effort: 89.6920585619588
* Function: **makeMod**
    * Line No.: 279
    * Physical LOC: 9
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 3
    * Halstead volume: 95.18387305144009
    * Halstead effort: 285.5516191543203
* Function: **makeRegular**
    * Line No.: 289
    * Physical LOC: 11
    * Logical LOC: 6
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 16.666666666666664%
    * Halstead difficulty: 2.4444444444444446
    * Halstead volume: 74.00879436282185
    * Halstead effort: 180.9103862202312

## src/controllers/404.js

* Physical LOC: 64
* Logical LOC: 40
* Mean parameter count: 2
* Cyclomatic complexity: 12
* Cyclomatic complexity density: 30%
* Maintainability index: 96.25932918313765
* Dependency count: 7
* Function: **handle404**
    * Line No.: 12
    * Physical LOC: 34
    * Logical LOC: 21
    * Parameter count: 2
    * Cyclomatic complexity: 10
    * Cyclomatic complexity density: 47.61904761904761%
    * Halstead difficulty: 12.46
    * Halstead volume: 1038
    * Halstead effort: 12933.480000000001
* Function: **exports.send404**
    * Line No.: 47
    * Physical LOC: 18
    * Logical LOC: 9
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 6.75
    * Halstead volume: 257.47299274176135
    * Halstead effort: 1737.9427010068891

## src/controllers/accounts.js

* Physical LOC: 20
* Logical LOC: 17
* Mean parameter count: 0
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 5.88235294117647%
* Maintainability index: 99.41864126446336
* Dependency count: 14

## src/controllers/admin.js

* Physical LOC: 58
* Logical LOC: 30
* Mean parameter count: 0
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 3.3333333333333335%
* Maintainability index: 87.61793942289202
* Dependency count: 25

## src/controllers/api.js

* Physical LOC: 131
* Logical LOC: 105
* Mean parameter count: 1.6666666666666667
* Cyclomatic complexity: 42
* Cyclomatic complexity density: 40%
* Maintainability index: 79.03061321355146
* Dependency count: 9
* Function: **apiController.loadConfig**
    * Line No.: 22
    * Physical LOC: 98
    * Logical LOC: 80
    * Parameter count: 1
    * Cyclomatic complexity: 40
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 28.03053435114504
    * Halstead volume: 5637.792531921838
    * Halstead effort: 158030.33723066407
* Function: **apiController.getConfig**
    * Line No.: 121
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3
    * Halstead volume: 30
    * Halstead effort: 90
* Function: **apiController.getModerators**
    * Line No.: 126
    * Physical LOC: 4
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 4.800000000000001
    * Halstead volume: 48.43204266092217
    * Halstead effort: 232.47380477242646

## src/controllers/authentication.js

* Physical LOC: 510
* Logical LOC: 218
* Mean parameter count: 2.3846153846153846
* Cyclomatic complexity: 48
* Cyclomatic complexity density: 22.018348623853214%
* Maintainability index: 99.03554012855525
* Dependency count: 17
* Function: **registerAndLoginUser**
    * Line No.: 23
    * Physical LOC: 50
    * Logical LOC: 27
    * Parameter count: 3
    * Cyclomatic complexity: 8
    * Cyclomatic complexity density: 29.629629629629626%
    * Halstead difficulty: 10.051724137931036
    * Halstead volume: 580.0901623427226
    * Halstead effort: 5830.906286996677
* Function: **authenticationController.register**
    * Line No.: 74
    * Physical LOC: 54
    * Logical LOC: 25
    * Parameter count: 2
    * Cyclomatic complexity: 16
    * Cyclomatic complexity density: 64%
    * Halstead difficulty: 16.125
    * Halstead volume: 982.8311512991922
    * Halstead effort: 15848.152314699475
* Function: **addToApprovalQueue**
    * Line No.: 129
    * Physical LOC: 15
    * Logical LOC: 11
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 36.36363636363637%
    * Halstead difficulty: 9.583333333333334
    * Halstead volume: 196.21499122004107
    * Halstead effort: 1880.393665858727
* Function: **authenticationController.registerComplete**
    * Line No.: 145
    * Physical LOC: 80
    * Logical LOC: 24
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 16.666666666666664%
    * Halstead difficulty: 10.114285714285714
    * Halstead volume: 672.1052510529942
    * Halstead effort: 6797.864539221712
* Function: **done**
    * Line No.: 170
    * Physical LOC: 13
    * Logical LOC: 8
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 37.5%
    * Halstead difficulty: 9.9
    * Halstead volume: 253.823744779619
    * Halstead effort: 2512.8550733182283
* Function: **authenticationController.registerAbort**
    * Line No.: 226
    * Physical LOC: 13
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 60%
    * Halstead difficulty: 5.541666666666666
    * Halstead volume: 152.92539048396907
    * Halstead effort: 847.4615389319952
* Function: **continueLogin**
    * Line No.: 278
    * Physical LOC: 53
    * Logical LOC: 1
    * Parameter count: 4
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.6666666666666667
    * Halstead volume: 39
    * Halstead effort: 65
* Function: **redirectAfterLogin**
    * Line No.: 332
    * Physical LOC: 9
    * Logical LOC: 5
    * Parameter count: 3
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 4.666666666666666
    * Halstead volume: 123.18989788986397
    * Halstead effort: 574.8861901526984
* Function: **authenticationController.doLogin**
    * Line No.: 342
    * Physical LOC: 8
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 5
    * Halstead volume: 76.14709844115208
    * Halstead effort: 380.7354922057604
* Function: **authenticationController.onSuccessfulLogin**
    * Line No.: 351
    * Physical LOC: 57
    * Logical LOC: 26
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 11.538461538461538%
    * Halstead difficulty: 14.399999999999999
    * Halstead volume: 711.7858998067965
    * Halstead effort: 10249.716957217868
* Function: **authenticationController.localLogin**
    * Line No.: 409
    * Physical LOC: 44
    * Logical LOC: 20
    * Parameter count: 4
    * Cyclomatic complexity: 8
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 9.942307692307692
    * Halstead volume: 505.31697646600816
    * Halstead effort: 5024.0168621716575
* Function: **authenticationController.logout**
    * Line No.: 457
    * Physical LOC: 34
    * Logical LOC: 20
    * Parameter count: 3
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 10.29032258064516
    * Halstead volume: 603.9395513512212
    * Halstead effort: 6214.732802614179
* Function: **getBanError**
    * Line No.: 492
    * Physical LOC: 17
    * Logical LOC: 7
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 28.57142857142857%
    * Halstead difficulty: 7.5
    * Halstead volume: 110.41329273967051
    * Halstead effort: 828.0996955475289

## src/controllers/career.js

* Physical LOC: 8
* Logical LOC: 5
* Mean parameter count: 2
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 20%
* Maintainability index: 142.63672516362743
* Dependency count: 0
* Function: **careerController.get**
    * Line No.: 5
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3.333333333333333
    * Halstead volume: 44.97261104228487
    * Halstead effort: 149.90870347428287

## src/controllers/categories.js

* Physical LOC: 61
* Logical LOC: 41
* Mean parameter count: 2
* Cyclomatic complexity: 6
* Cyclomatic complexity density: 14.634146341463413%
* Maintainability index: 81.14336967905902
* Dependency count: 7
* Function: **categoriesController.list**
    * Line No.: 14
    * Physical LOC: 48
    * Logical LOC: 31
    * Parameter count: 2
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 19.35483870967742%
    * Halstead difficulty: 13.426229508196721
    * Halstead volume: 1465.430994288432
    * Halstead effort: 19675.212857741408

## src/controllers/category.js

* Physical LOC: 206
* Logical LOC: 118
* Mean parameter count: 2.3333333333333335
* Cyclomatic complexity: 26
* Cyclomatic complexity density: 22.033898305084744%
* Maintainability index: 77.31649739119132
* Dependency count: 13
* Function: **categoryController.get**
    * Line No.: 24
    * Physical LOC: 120
    * Logical LOC: 65
    * Parameter count: 3
    * Cyclomatic complexity: 21
    * Cyclomatic complexity density: 32.30769230769231%
    * Halstead difficulty: 34.24431818181818
    * Halstead volume: 3695.4286413282016
    * Halstead effort: 126547.434211847
* Function: **buildBreadcrumbs**
    * Line No.: 145
    * Physical LOC: 13
    * Logical LOC: 7
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 42.857142857142854%
    * Halstead difficulty: 9
    * Halstead volume: 206.43891887060175
    * Halstead effort: 1857.9502698354158
* Function: **addTags**
    * Line No.: 159
    * Physical LOC: 48
    * Logical LOC: 26
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 15.384615384615385%
    * Halstead difficulty: 11.46774193548387
    * Halstead volume: 739.7480051893434
    * Halstead effort: 8483.239220800373

## src/controllers/composer.js

* Physical LOC: 112
* Logical LOC: 84
* Mean parameter count: 1.3571428571428572
* Cyclomatic complexity: 19
* Cyclomatic complexity density: 22.61904761904762%
* Maintainability index: 120.03114768665634
* Dependency count: 6
* Function: **&lt;anonymous>**
    * Line No.: 4
    * Physical LOC: 9
    * Logical LOC: 2
    * Parameter count: 4
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 3.2142857142857144
    * Halstead volume: 53.77443751081735
    * Halstead effort: 172.84640628477007
* Function: **adopt**
    * Line No.: 5
    * Physical LOC: 1
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 200%
    * Halstead difficulty: 5
    * Halstead volume: 33
    * Halstead effort: 165
* Function: **&lt;anonymous>**
    * Line No.: 5
    * Physical LOC: 1
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.75
    * Halstead volume: 6.339850002884624
    * Halstead effort: 4.754887502163468
* Function: **&lt;anonymous>**
    * Line No.: 6
    * Physical LOC: 6
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3.545454545454546
    * Halstead volume: 98.09910819000817
    * Halstead effort: 347.8059290373017
* Function: **fulfilled**
    * Line No.: 7
    * Physical LOC: 1
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.25
    * Halstead volume: 20.67970000576925
    * Halstead effort: 25.84962500721156
* Function: **rejected**
    * Line No.: 8
    * Physical LOC: 1
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.25
    * Halstead volume: 20.67970000576925
    * Halstead effort: 25.84962500721156
* Function: **step**
    * Line No.: 9
    * Physical LOC: 1
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 200%
    * Halstead difficulty: 2.25
    * Halstead volume: 69.18863237274596
    * Halstead effort: 155.6744228386784
* Function: **&lt;anonymous>**
    * Line No.: 13
    * Physical LOC: 3
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 6
    * Halstead volume: 46.50699332842308
    * Halstead effort: 279.04195997053847
* Function: **get**
    * Line No.: 24
    * Physical LOC: 26
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 2.2857142857142856
    * Halstead volume: 44.97261104228487
    * Halstead effort: 102.79453952522255
* Function: **&lt;anonymous>**
    * Line No.: 25
    * Physical LOC: 24
    * Logical LOC: 14
    * Parameter count: 0
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 35.714285714285715%
    * Halstead difficulty: 11.727272727272727
    * Halstead volume: 422.2594158237782
    * Halstead effort: 4951.951331024308
* Function: **post**
    * Line No.: 51
    * Physical LOC: 61
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 2.3333333333333335
    * Halstead volume: 39.863137138648355
    * Halstead effort: 93.01398665684617
* Function: **&lt;anonymous>**
    * Line No.: 52
    * Physical LOC: 59
    * Logical LOC: 31
    * Parameter count: 0
    * Cyclomatic complexity: 7
    * Cyclomatic complexity density: 22.58064516129032%
    * Halstead difficulty: 18.457142857142856
    * Halstead volume: 843.6650782848817
    * Halstead effort: 15571.646873486672
* Function: **queueOrPost**
    * Line No.: 65
    * Physical LOC: 14
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 2.3333333333333335
    * Halstead volume: 39.863137138648355
    * Halstead effort: 93.01398665684617
* Function: **&lt;anonymous>**
    * Line No.: 66
    * Physical LOC: 12
    * Logical LOC: 5
    * Parameter count: 0
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 4
    * Halstead volume: 34.86917501586544
    * Halstead effort: 139.47670006346175

## src/controllers/errors.js

* Physical LOC: 111
* Logical LOC: 70
* Mean parameter count: 1.5
* Cyclomatic complexity: 15
* Cyclomatic complexity density: 21.428571428571427%
* Maintainability index: 105.55231948922864
* Dependency count: 8
* Function: **handleURIErrors**
    * Line No.: 12
    * Physical LOC: 26
    * Logical LOC: 20
    * Parameter count: 4
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 9.742857142857142
    * Halstead volume: 657.3038727707846
    * Halstead effort: 6404.0177318525
* Function: **handleErrors**
    * Line No.: 41
    * Physical LOC: 59
    * Logical LOC: 10
    * Parameter count: 4
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 9.75
    * Halstead volume: 210.83123629338053
    * Halstead effort: 2055.6045538604603
* Function: **EBADCSRFTOKEN**
    * Line No.: 43
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1
    * Halstead volume: 25.26619429851844
    * Halstead effort: 25.26619429851844
* Function: **&lt;anonymous>**
    * Line No.: 47
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1
    * Halstead volume: 49.82892142331044
    * Halstead effort: 49.82892142331044
* Function: **defaultHandler**
    * Line No.: 51
    * Physical LOC: 35
    * Logical LOC: 23
    * Parameter count: 0
    * Cyclomatic complexity: 10
    * Cyclomatic complexity density: 43.47826086956522%
    * Halstead difficulty: 16.5
    * Halstead volume: 959.7057124450936
    * Halstead effort: 15835.144255344045
* Function: **getErrorHandlers**
    * Line No.: 101
    * Physical LOC: 11
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1

## src/controllers/globalmods.js

* Physical LOC: 36
* Logical LOC: 23
* Mean parameter count: 3
* Cyclomatic complexity: 3
* Cyclomatic complexity density: 13.043478260869565%
* Maintainability index: 116.38749623824785
* Dependency count: 5
* Function: **globalModsController.ipBlacklist**
    * Line No.: 11
    * Physical LOC: 17
    * Logical LOC: 10
    * Parameter count: 3
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 7.1875
    * Halstead volume: 202.11890788006698
    * Halstead effort: 1452.7296503879816
* Function: **globalModsController.registrationQueue**
    * Line No.: 30
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 3
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 4.5
    * Halstead volume: 39.863137138648355
    * Halstead effort: 179.3841171239176

## src/controllers/groups.js

* Physical LOC: 120
* Logical LOC: 75
* Mean parameter count: 2.6666666666666665
* Cyclomatic complexity: 14
* Cyclomatic complexity density: 18.666666666666668%
* Maintainability index: 90.65710031007285
* Dependency count: 8
* Function: **groupsController.list**
    * Line No.: 15
    * Physical LOC: 16
    * Logical LOC: 9
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 22.22222222222222%
    * Halstead difficulty: 5.473684210526316
    * Halstead volume: 218.7248250995196
    * Halstead effort: 1197.2306215973704
* Function: **groupsController.details**
    * Line No.: 32
    * Physical LOC: 54
    * Logical LOC: 31
    * Parameter count: 3
    * Cyclomatic complexity: 10
    * Cyclomatic complexity density: 32.25806451612903%
    * Halstead difficulty: 13.621621621621623
    * Halstead volume: 862.2086519796674
    * Halstead effort: 11744.68001615547
* Function: **groupsController.members**
    * Line No.: 87
    * Physical LOC: 34
    * Logical LOC: 22
    * Parameter count: 3
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 18.181818181818183%
    * Halstead difficulty: 14.8
    * Halstead volume: 824.6443989321799
    * Halstead effort: 12204.737104196263

## src/controllers/home.js

* Physical LOC: 64
* Logical LOC: 38
* Mean parameter count: 1.75
* Cyclomatic complexity: 9
* Cyclomatic complexity density: 23.684210526315788%
* Maintainability index: 113.16971250173987
* Dependency count: 4
* Function: **adminHomePageRoute**
    * Line No.: 9
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 300%
    * Halstead difficulty: 4.666666666666667
    * Halstead volume: 101.57915548582149
    * Halstead effort: 474.03605893383366
* Function: **getUserHomeRoute**
    * Line No.: 13
    * Physical LOC: 10
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 60%
    * Halstead difficulty: 9
    * Halstead volume: 151.26748332105768
    * Halstead effort: 1361.407349889519
* Function: **rewrite**
    * Line No.: 24
    * Physical LOC: 27
    * Logical LOC: 16
    * Parameter count: 3
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 31.25%
    * Halstead difficulty: 12.767857142857142
    * Halstead volume: 573.2580644941349
    * Halstead effort: 7319.277073451901
* Function: **pluginHook**
    * Line No.: 54
    * Physical LOC: 9
    * Logical LOC: 5
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 5.625
    * Halstead volume: 91.37651812938249
    * Halstead effort: 513.9929144777765

## src/controllers/osd.js

* Physical LOC: 57
* Logical LOC: 34
* Mean parameter count: 1.6666666666666667
* Cyclomatic complexity: 5
* Cyclomatic complexity density: 14.705882352941178%
* Maintainability index: 111.12908407644653
* Dependency count: 4
* Function: **&lt;anonymous>.handle**
    * Line No.: 9
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 3
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 2.3636363636363638
    * Halstead volume: 93.76537429460444
    * Halstead effort: 221.6272483327014
* Function: **generateXML**
    * Line No.: 17
    * Physical LOC: 37
    * Logical LOC: 21
    * Parameter count: 0
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 19.047619047619047%
    * Halstead difficulty: 5.833333333333334
    * Halstead volume: 646.2567488586706
    * Halstead effort: 3769.831035008912
* Function: **trimToLength**
    * Line No.: 55
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 2.4000000000000004
    * Halstead volume: 45
    * Halstead effort: 108.00000000000001

## src/controllers/ping.js

* Physical LOC: 13
* Logical LOC: 7
* Mean parameter count: 3
* Cyclomatic complexity: 2
* Cyclomatic complexity density: 28.57142857142857%
* Maintainability index: 135.62622386281953
* Dependency count: 2
* Function: **&lt;anonymous>.ping**
    * Line No.: 6
    * Physical LOC: 8
    * Logical LOC: 3
    * Parameter count: 3
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 2.4444444444444446
    * Halstead volume: 66.60791492653966
    * Halstead effort: 162.81934759820808

## src/controllers/popular.js

* Physical LOC: 29
* Logical LOC: 21
* Mean parameter count: 3
* Cyclomatic complexity: 6
* Cyclomatic complexity density: 28.57142857142857%
* Maintainability index: 98.40228519344402
* Dependency count: 4
* Function: **popularController.get**
    * Line No.: 12
    * Physical LOC: 19
    * Logical LOC: 14
    * Parameter count: 3
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 42.857142857142854%
    * Halstead difficulty: 11.28
    * Halstead volume: 484.4791630034924
    * Halstead effort: 5464.924958679394

## src/controllers/posts.js

* Physical LOC: 39
* Logical LOC: 24
* Mean parameter count: 2.5
* Cyclomatic complexity: 6
* Cyclomatic complexity density: 25%
* Maintainability index: 111.76337873118754
* Dependency count: 4
* Function: **postsController.redirectToPost**
    * Line No.: 11
    * Physical LOC: 20
    * Logical LOC: 10
    * Parameter count: 3
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 7
    * Halstead volume: 256.7579000403848
    * Halstead effort: 1797.3053002826937
* Function: **postsController.getRecentPosts**
    * Line No.: 32
    * Physical LOC: 8
    * Logical LOC: 6
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 6.5
    * Halstead volume: 220.07820003461552
    * Halstead effort: 1430.5083002250008

## src/controllers/recent.js

* Physical LOC: 98
* Logical LOC: 62
* Mean parameter count: 2.3333333333333335
* Cyclomatic complexity: 12
* Cyclomatic complexity density: 19.35483870967742%
* Maintainability index: 92.64201273333435
* Dependency count: 9
* Function: **recentController.get**
    * Line No.: 17
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 3
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 5.833333333333334
    * Halstead volume: 66.60791492653966
    * Halstead effort: 388.54617040481475
* Function: **recentController.getData**
    * Line No.: 25
    * Physical LOC: 67
    * Logical LOC: 40
    * Parameter count: 3
    * Cyclomatic complexity: 11
    * Cyclomatic complexity density: 27.500000000000004%
    * Halstead difficulty: 26.09375
    * Halstead volume: 2000.7953533297518
    * Halstead effort: 52208.25375094821
* Function: **canPostTopic**
    * Line No.: 93
    * Physical LOC: 5
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 3.75
    * Halstead volume: 38.03910001730775
    * Halstead effort: 142.64662506490407

## src/controllers/search.js

* Physical LOC: 144
* Logical LOC: 93
* Mean parameter count: 2
* Cyclomatic complexity: 24
* Cyclomatic complexity density: 25.806451612903224%
* Maintainability index: 82.94900643520677
* Dependency count: 10
* Function: **searchController.search**
    * Line No.: 18
    * Physical LOC: 85
    * Logical LOC: 52
    * Parameter count: 3
    * Cyclomatic complexity: 19
    * Cyclomatic complexity density: 36.53846153846153%
    * Halstead difficulty: 22.75862068965517
    * Halstead volume: 3276.1608429080043
    * Halstead effort: 74560.90194204423
* Function: **recordSearch**
    * Line No.: 106
    * Physical LOC: 23
    * Logical LOC: 12
    * Parameter count: 1
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 41.66666666666667%
    * Halstead difficulty: 11.440000000000001
    * Halstead volume: 511.8225751427889
    * Halstead effort: 5855.250259633505
* Function: **buildCategories**
    * Line No.: 130
    * Physical LOC: 16
    * Logical LOC: 13
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 15.384615384615385%
    * Halstead difficulty: 9.166666666666666
    * Halstead volume: 288.44129532345625
    * Halstead effort: 2644.045207131682

## src/controllers/sitemap.js

* Physical LOC: 40
* Logical LOC: 25
* Mean parameter count: 3
* Cyclomatic complexity: 4
* Cyclomatic complexity density: 16%
* Maintainability index: 132.95820859158727
* Dependency count: 2
* Function: **sitemapController.render**
    * Line No.: 8
    * Physical LOC: 9
    * Logical LOC: 6
    * Parameter count: 3
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 3.9230769230769234
    * Halstead volume: 127.43782540330756
    * Halstead effort: 499.948391966822
* Function: **sitemapController.getPages**
    * Line No.: 18
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.3333333333333333
    * Halstead volume: 30
    * Halstead effort: 40
* Function: **sitemapController.getCategories**
    * Line No.: 22
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.3333333333333333
    * Halstead volume: 30
    * Halstead effort: 40
* Function: **sitemapController.getTopicPage**
    * Line No.: 26
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.75
    * Halstead volume: 16.253496664211536
    * Halstead effort: 12.190122498158651
* Function: **sendSitemap**
    * Line No.: 30
    * Physical LOC: 11
    * Logical LOC: 7
    * Parameter count: 3
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 42.857142857142854%
    * Halstead difficulty: 5.25
    * Halstead volume: 140.1816079436383
    * Halstead effort: 735.9534417041011

## src/controllers/tags.js

* Physical LOC: 83
* Logical LOC: 59
* Mean parameter count: 2
* Cyclomatic complexity: 4
* Cyclomatic complexity density: 6.779661016949152%
* Maintainability index: 87.8128955138822
* Dependency count: 10
* Function: **tagsController.getTag**
    * Line No.: 17
    * Physical LOC: 51
    * Logical LOC: 36
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 11.11111111111111%
    * Halstead difficulty: 15.75
    * Halstead volume: 1665.631587998496
    * Halstead effort: 26233.69751097631
* Function: **tagsController.getTags**
    * Line No.: 69
    * Physical LOC: 15
    * Logical LOC: 9
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 11.11111111111111%
    * Halstead difficulty: 4.2
    * Halstead volume: 204.46016259302917
    * Halstead effort: 858.7326828907226

## src/controllers/top.js

* Physical LOC: 27
* Logical LOC: 18
* Mean parameter count: 3
* Cyclomatic complexity: 6
* Cyclomatic complexity density: 33.33333333333333%
* Maintainability index: 104.36847932006987
* Dependency count: 4
* Function: **topController.get**
    * Line No.: 12
    * Physical LOC: 17
    * Logical LOC: 11
    * Parameter count: 3
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 54.54545454545454%
    * Halstead difficulty: 8.325000000000001
    * Halstead volume: 359.49059363944036
    * Halstead effort: 2992.7591920483414

## src/controllers/topics.js

* Physical LOC: 374
* Logical LOC: 215
* Mean parameter count: 2.3076923076923075
* Cyclomatic complexity: 57
* Cyclomatic complexity density: 26.51162790697674%
* Maintainability index: 95.60549638761431
* Dependency count: 13
* Function: **getTopic**
    * Line No.: 23
    * Physical LOC: 102
    * Logical LOC: 51
    * Parameter count: 3
    * Cyclomatic complexity: 23
    * Cyclomatic complexity density: 45.09803921568628%
    * Halstead difficulty: 26.75925925925926
    * Halstead volume: 3234.5931137723373
    * Halstead effort: 86555.31572964866
* Function: **generateQueryString**
    * Line No.: 126
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 4
    * Halstead volume: 53.77443751081735
    * Halstead effort: 215.0977500432694
* Function: **calculatePageFromIndex**
    * Line No.: 131
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 4.5
    * Halstead volume: 57.359400011538504
    * Halstead effort: 258.1173000519233
* Function: **calculateStartStop**
    * Line No.: 135
    * Physical LOC: 14
    * Logical LOC: 10
    * Parameter count: 3
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 30%
    * Halstead difficulty: 21.5
    * Halstead volume: 382.73746645746445
    * Halstead effort: 8228.855528835486
* Function: **incrementViewCount**
    * Line No.: 150
    * Physical LOC: 12
    * Logical LOC: 8
    * Parameter count: 2
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 75%
    * Halstead difficulty: 18.8125
    * Halstead volume: 417.0857006267241
    * Halstead effort: 7846.4247430402465
* Function: **markAsRead**
    * Line No.: 163
    * Physical LOC: 10
    * Logical LOC: 6
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 5.454545454545454
    * Halstead volume: 151.23612512626258
    * Halstead effort: 824.924318870523
* Function: **buildBreadcrumbs**
    * Line No.: 174
    * Physical LOC: 14
    * Logical LOC: 7
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 14.285714285714285%
    * Halstead difficulty: 7.318181818181818
    * Halstead volume: 179.30677506201943
    * Halstead effort: 1312.1995811356876
* Function: **addOldCategory**
    * Line No.: 189
    * Physical LOC: 7
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 3.2
    * Halstead volume: 44.37895002019238
    * Halstead effort: 142.01264006461562
* Function: **addTags**
    * Line No.: 197
    * Physical LOC: 72
    * Logical LOC: 38
    * Parameter count: 3
    * Cyclomatic complexity: 7
    * Cyclomatic complexity density: 18.421052631578945%
    * Halstead difficulty: 16.37735849056604
    * Halstead volume: 1340.6057110911677
    * Halstead effort: 21955.580325040257
* Function: **addOGImageTags**
    * Line No.: 270
    * Physical LOC: 21
    * Logical LOC: 11
    * Parameter count: 3
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 54.54545454545454%
    * Halstead difficulty: 11.578947368421053
    * Halstead volume: 427.5023275712264
    * Halstead effort: 4950.026950824727
* Function: **addOGImageTag**
    * Line No.: 292
    * Physical LOC: 30
    * Logical LOC: 21
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 19.047619047619047%
    * Halstead difficulty: 16.333333333333336
    * Halstead volume: 626.8335845403158
    * Halstead effort: 10238.28188082516
* Function: **topicsController.teaser**
    * Line No.: 323
    * Physical LOC: 19
    * Logical LOC: 13
    * Parameter count: 3
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 38.46153846153847%
    * Halstead difficulty: 6.815789473684211
    * Halstead volume: 366.63429801500524
    * Halstead effort: 2498.9021891022726
* Function: **topicsController.pagination**
    * Line No.: 343
    * Physical LOC: 32
    * Logical LOC: 15
    * Parameter count: 3
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 8.324324324324325
    * Halstead volume: 619.9308375800483
    * Halstead effort: 5160.505350666348

## src/controllers/unread.js

* Physical LOC: 77
* Logical LOC: 51
* Mean parameter count: 2.5
* Cyclomatic complexity: 10
* Cyclomatic complexity density: 19.607843137254903%
* Maintainability index: 88.28131459717864
* Dependency count: 7
* Function: **unreadController.get**
    * Line No.: 16
    * Physical LOC: 53
    * Logical LOC: 35
    * Parameter count: 2
    * Cyclomatic complexity: 9
    * Cyclomatic complexity density: 25.71428571428571%
    * Halstead difficulty: 24.0625
    * Halstead volume: 1821.8104654919466
    * Halstead effort: 43837.31432589996
* Function: **unreadController.unreadTotal**
    * Line No.: 70
    * Physical LOC: 9
    * Logical LOC: 4
    * Parameter count: 3
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3.75
    * Halstead volume: 77.70923408096293
    * Halstead effort: 291.409627803611

## src/controllers/uploads.js

* Physical LOC: 203
* Logical LOC: 90
* Mean parameter count: 2
* Cyclomatic complexity: 20
* Cyclomatic complexity density: 22.22222222222222%
* Maintainability index: 112.30389778802055
* Dependency count: 11
* Function: **uploadsController.upload**
    * Line No.: 18
    * Physical LOC: 32
    * Logical LOC: 12
    * Parameter count: 3
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 13.6
    * Halstead volume: 285.29325012980814
    * Halstead effort: 3879.988201765391
* Function: **uploadsController.uploadPost**
    * Line No.: 51
    * Physical LOC: 9
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 2
    * Halstead effort: 0
* Function: **uploadAsImage**
    * Line No.: 61
    * Physical LOC: 27
    * Logical LOC: 15
    * Parameter count: 2
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 10.5
    * Halstead volume: 315.4226961575211
    * Halstead effort: 3311.9383096539714
* Function: **uploadAsFile**
    * Line No.: 89
    * Physical LOC: 12
    * Logical LOC: 7
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 28.57142857142857%
    * Halstead difficulty: 7.777777777777778
    * Halstead volume: 118.94197037642039
    * Halstead effort: 925.1042140388253
* Function: **resizeImage**
    * Line No.: 102
    * Physical LOC: 20
    * Logical LOC: 6
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 9
    * Halstead volume: 181.52097998526924
    * Halstead effort: 1633.688819867423
* Function: **uploadsController.uploadThumb**
    * Line No.: 123
    * Physical LOC: 30
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3.75
    * Halstead volume: 112.58797503894243
    * Halstead effort: 422.2049063960341
* Function: **uploadsController.uploadFile**
    * Line No.: 154
    * Physical LOC: 26
    * Logical LOC: 11
    * Parameter count: 2
    * Cyclomatic complexity: 7
    * Cyclomatic complexity density: 63.63636363636363%
    * Halstead difficulty: 9.799999999999999
    * Halstead volume: 406.9759708523932
    * Halstead effort: 3988.3645143534527
* Function: **saveFileToLocal**
    * Line No.: 181
    * Physical LOC: 17
    * Logical LOC: 11
    * Parameter count: 3
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 27.27272727272727%
    * Halstead difficulty: 7.75
    * Halstead volume: 285.29325012980814
    * Halstead effort: 2211.0226885060133
* Function: **deleteTempFiles**
    * Line No.: 199
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.5
    * Halstead volume: 10
    * Halstead effort: 15

## src/controllers/user.js

* Physical LOC: 118
* Logical LOC: 67
* Mean parameter count: 3
* Cyclomatic complexity: 12
* Cyclomatic complexity density: 17.91044776119403%
* Maintainability index: 125.83249003563314
* Dependency count: 6
* Function: **userController.getCurrentUser**
    * Line No.: 12
    * Physical LOC: 8
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 5.444444444444445
    * Halstead volume: 112
    * Halstead effort: 609.7777777777778
* Function: **userController.getUserByUID**
    * Line No.: 21
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 4.754887502163468
    * Halstead effort: 0
* Function: **userController.getUserByUsername**
    * Line No.: 25
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 4.754887502163468
    * Halstead effort: 0
* Function: **userController.getUserByEmail**
    * Line No.: 29
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 4.754887502163468
    * Halstead effort: 0
* Function: **byType**
    * Line No.: 33
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 4
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 5.833333333333334
    * Halstead volume: 66.60791492653966
    * Halstead effort: 388.54617040481475
* Function: **userController.getUserDataByField**
    * Line No.: 41
    * Physical LOC: 21
    * Logical LOC: 17
    * Parameter count: 3
    * Cyclomatic complexity: 7
    * Cyclomatic complexity density: 41.17647058823529%
    * Halstead difficulty: 10.833333333333332
    * Halstead volume: 245.26873902505136
    * Halstead effort: 2657.0780061047226
* Function: **userController.getUserDataByUID**
    * Line No.: 63
    * Physical LOC: 18
    * Logical LOC: 10
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 8.5
    * Halstead volume: 150.11730005192322
    * Halstead effort: 1275.9970504413475
* Function: **userController.exportPosts**
    * Line No.: 82
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.7
    * Halstead volume: 20.67970000576925
    * Halstead effort: 14.475790004038473
* Function: **userController.exportUploads**
    * Line No.: 86
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.7
    * Halstead volume: 20.67970000576925
    * Halstead effort: 14.475790004038473
* Function: **userController.exportProfile**
    * Line No.: 90
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.7
    * Halstead volume: 20.67970000576925
    * Halstead effort: 14.475790004038473
* Function: **sendExport**
    * Line No.: 95
    * Physical LOC: 19
    * Logical LOC: 6
    * Parameter count: 4
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 16.666666666666664%
    * Halstead difficulty: 2.5
    * Halstead volume: 138.3016990363956
    * Halstead effort: 345.754247590989

## src/controllers/users.js

* Physical LOC: 212
* Logical LOC: 146
* Mean parameter count: 2.2666666666666666
* Cyclomatic complexity: 22
* Cyclomatic complexity density: 15.068493150684931%
* Maintainability index: 109.99862366461379
* Dependency count: 8
* Function: **usersController.index**
    * Line No.: 15
    * Physical LOC: 19
    * Logical LOC: 15
    * Parameter count: 3
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 26.666666666666668%
    * Halstead difficulty: 6.285714285714286
    * Halstead volume: 291.47885970765435
    * Halstead effort: 1832.152832448113
* Function: **usersController.search**
    * Line No.: 35
    * Physical LOC: 10
    * Logical LOC: 6
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 5
    * Halstead volume: 175.7609021737646
    * Halstead effort: 878.8045108688231
* Function: **usersController.getOnlineUsers**
    * Line No.: 46
    * Physical LOC: 22
    * Logical LOC: 7
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 28.57142857142857%
    * Halstead difficulty: 6.75
    * Halstead volume: 185.46604019833754
    * Halstead effort: 1251.8957713387783
* Function: **usersController.getUsersSortedByPosts**
    * Line No.: 69
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 2
    * Halstead effort: 0
* Function: **usersController.getUsersSortedByReputation**
    * Line No.: 73
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 3
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 2.3333333333333335
    * Halstead volume: 39.863137138648355
    * Halstead effort: 93.01398665684617
* Function: **usersController.getUsersSortedByJoinDate**
    * Line No.: 80
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 2
    * Halstead effort: 0
* Function: **usersController.getBannedUsers**
    * Line No.: 84
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 2
    * Halstead effort: 0
* Function: **usersController.getFlaggedUsers**
    * Line No.: 88
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 2
    * Halstead effort: 0
* Function: **renderIfAdminOrGlobalMod**
    * Line No.: 92
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 3
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 5.25
    * Halstead volume: 59.207035490257475
    * Halstead effort: 310.8369363238517
* Function: **usersController.renderUsersPage**
    * Line No.: 100
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1
    * Halstead volume: 15.509775004326936
    * Halstead effort: 15.509775004326936
* Function: **usersController.getUsers**
    * Line No.: 105
    * Physical LOC: 45
    * Logical LOC: 46
    * Parameter count: 3
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 13.043478260869565%
    * Halstead difficulty: 16.666666666666668
    * Halstead volume: 1393.2878354979198
    * Halstead effort: 23221.46392496533
* Function: **usersController.getUsersAndCount**
    * Line No.: 151
    * Physical LOC: 40
    * Logical LOC: 6
    * Parameter count: 4
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 16.666666666666664%
    * Halstead difficulty: 4.363636363636363
    * Halstead volume: 93.45440529575887
    * Halstead effort: 407.8010412905841
* Function: **getCount**
    * Line No.: 152
    * Physical LOC: 8
    * Logical LOC: 6
    * Parameter count: 0
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 3.75
    * Halstead volume: 50.718800023077
    * Halstead effort: 190.19550008653874
* Function: **getUsers**
    * Line No.: 160
    * Physical LOC: 22
    * Logical LOC: 9
    * Parameter count: 0
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 8.25
    * Halstead volume: 218.26124091941205
    * Halstead effort: 1800.6552375851493
* Function: **render**
    * Line No.: 192
    * Physical LOC: 21
    * Logical LOC: 15
    * Parameter count: 3
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 13.75
    * Halstead volume: 509.4838060552038
    * Halstead effort: 7005.402333259052

## src/database/cache.js

* Physical LOC: 10
* Logical LOC: 7
* Mean parameter count: 1
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 14.285714285714285%
* Maintainability index: 125.57757663500436
* Dependency count: 1
* Function: **&lt;anonymous>.create**
    * Line No.: 3
    * Physical LOC: 8
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 3.666666666666667
    * Halstead volume: 78.13781191217038
    * Halstead effort: 286.5053103446247

## src/database/helpers.js

* Physical LOC: 28
* Logical LOC: 18
* Mean parameter count: 2
* Cyclomatic complexity: 9
* Cyclomatic complexity density: 50%
* Maintainability index: 107.22222920632379
* Dependency count: 0
* Function: **helpers.mergeBatch**
    * Line No.: 5
    * Physical LOC: 24
    * Logical LOC: 9
    * Parameter count: 4
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 44.44444444444444%
    * Halstead difficulty: 17.708333333333336
    * Halstead volume: 223.46712577586834
    * Halstead effort: 3957.2303522810025
* Function: **getFirst**
    * Line No.: 6
    * Physical LOC: 13
    * Logical LOC: 6
    * Parameter count: 0
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 32
    * Halstead volume: 380.7356171694285
    * Halstead effort: 12183.539749421712

## src/database/index.js

* Physical LOC: 37
* Logical LOC: 20
* Mean parameter count: 1.5
* Cyclomatic complexity: 6
* Cyclomatic complexity density: 30%
* Maintainability index: 122.83720575198917
* Dependency count: 5
* Function: **primaryDB.parseIntFields**
    * Line No.: 15
    * Physical LOC: 7
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.25
    * Halstead volume: 18.094737505048094
    * Halstead effort: 22.61842188131012
* Function: **primaryDB.initSessionStore**
    * Line No.: 23
    * Physical LOC: 13
    * Logical LOC: 8
    * Parameter count: 0
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 62.5%
    * Halstead difficulty: 9.090909090909092
    * Halstead volume: 212.39637567217926
    * Halstead effort: 1930.876142474357

## src/database/mongo.js

* Physical LOC: 187
* Logical LOC: 122
* Mean parameter count: 0.6666666666666666
* Cyclomatic complexity: 20
* Cyclomatic complexity density: 16.39344262295082%
* Maintainability index: 113.27209842413636
* Dependency count: 16
* Function: **isUriNotSpecified**
    * Line No.: 17
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 2
    * Halstead volume: 27
    * Halstead effort: 54
* Function: **before**
    * Line No.: 52
    * Physical LOC: 1
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 150%
    * Halstead difficulty: 4
    * Halstead volume: 46.50699332842308
    * Halstead effort: 186.0279733136923
* Function: **mongoModule.init**
    * Line No.: 62
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 2.5
    * Halstead volume: 25.84962500721156
    * Halstead effort: 64.62406251802891
* Function: **mongoModule.createSessionStore**
    * Line No.: 67
    * Physical LOC: 11
    * Logical LOC: 6
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 16.666666666666664%
    * Halstead difficulty: 4.75
    * Halstead volume: 162.51574464281416
    * Halstead effort: 771.9497870533672
* Function: **mongoModule.createIndices**
    * Line No.: 79
    * Physical LOC: 13
    * Logical LOC: 9
    * Parameter count: 0
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 22.22222222222222%
    * Halstead difficulty: 5.6000000000000005
    * Halstead volume: 126.71134807876054
    * Halstead effort: 709.583549241059
* Function: **mongoModule.checkCompatibility**
    * Line No.: 93
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 2.5714285714285716
    * Halstead volume: 51.89147427955947
    * Halstead effort: 133.43521957601007
* Function: **mongoModule.checkCompatibilityVersion**
    * Line No.: 98
    * Physical LOC: 7
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 3.5714285714285716
    * Halstead volume: 60.94436251225966
    * Halstead effort: 217.65843754378452
* Function: **mongoModule.info**
    * Line No.: 106
    * Physical LOC: 64
    * Logical LOC: 39
    * Parameter count: 1
    * Cyclomatic complexity: 9
    * Cyclomatic complexity density: 23.076923076923077%
    * Halstead difficulty: 28.695652173913043
    * Halstead volume: 1927.4896347079382
    * Halstead effort: 55310.572126401705
* Function: **getServerStatus**
    * Line No.: 114
    * Physical LOC: 12
    * Logical LOC: 2
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 0.5
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **getCollectionStats**
    * Line No.: 171
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.5
    * Halstead volume: 11.60964047443681
    * Halstead effort: 17.414460711655217
* Function: **mongoModule.close**
    * Line No.: 176
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 3.75
    * Halstead volume: 34.86917501586544
    * Halstead effort: 130.75940630949538
* Function: **&lt;anonymous>**
    * Line No.: 177
    * Physical LOC: 1
    * Logical LOC: 0
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: Infinity%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0

## src/database/redis.js

* Physical LOC: 119
* Logical LOC: 77
* Mean parameter count: 0.625
* Cyclomatic complexity: 14
* Cyclomatic complexity density: 18.181818181818183%
* Maintainability index: 118.05563021023511
* Dependency count: 14
* Function: **before**
    * Line No.: 27
    * Physical LOC: 1
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 150%
    * Halstead difficulty: 4
    * Halstead volume: 46.50699332842308
    * Halstead effort: 186.0279733136923
* Function: **redisModule.init**
    * Line No.: 37
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1
    * Halstead volume: 8
    * Halstead effort: 8
* Function: **redisModule.createSessionStore**
    * Line No.: 41
    * Physical LOC: 10
    * Logical LOC: 7
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 14.285714285714285%
    * Halstead difficulty: 6
    * Halstead volume: 155.58941141594505
    * Halstead effort: 933.5364684956703
* Function: **redisModule.checkCompatibility**
    * Line No.: 52
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1
    * Halstead volume: 4.754887502163468
    * Halstead effort: 4.754887502163468
* Function: **redisModule.checkCompatibilityVersion**
    * Line No.: 57
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 2.857142857142857
    * Halstead volume: 55.350905898196764
    * Halstead effort: 158.14544542341932
* Function: **redisModule.close**
    * Line No.: 64
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **redisModule.info**
    * Line No.: 68
    * Physical LOC: 34
    * Logical LOC: 21
    * Parameter count: 1
    * Cyclomatic complexity: 7
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 12.466666666666667
    * Halstead volume: 1120.8194999571176
    * Halstead effort: 13972.8830994654
* Function: **redisModule.socketAdapter**
    * Line No.: 103
    * Physical LOC: 8
    * Logical LOC: 5
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 4.285714285714286
    * Halstead volume: 77.70923408096293
    * Halstead effort: 333.03957463269825

## src/groups/cache.js

* Physical LOC: 19
* Logical LOC: 12
* Mean parameter count: 1.5
* Cyclomatic complexity: 2
* Cyclomatic complexity density: 16.666666666666664%
* Maintainability index: 125.37185306613789
* Dependency count: 1
* Function: **module.exports**
    * Line No.: 5
    * Physical LOC: 15
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 3.8181818181818183
    * Halstead volume: 98.09910819000817
    * Halstead effort: 374.5602312709403
* Function: **Groups.clearCache**
    * Line No.: 12
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 5.25
    * Halstead volume: 114.44895955500952
    * Halstead effort: 600.8570376638

## src/groups/cover.js

* Physical LOC: 80
* Logical LOC: 38
* Mean parameter count: 1.5
* Cyclomatic complexity: 9
* Cyclomatic complexity density: 23.684210526315788%
* Maintainability index: 111.65792313527695
* Dependency count: 5
* Function: **module.exports**
    * Line No.: 11
    * Physical LOC: 70
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 4.166666666666667
    * Halstead volume: 102.7985828955553
    * Halstead effort: 428.32742873148044
* Function: **Groups.updateCoverPosition**
    * Line No.: 13
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 2.5
    * Halstead volume: 27
    * Halstead effort: 67.5
* Function: **Groups.updateCover**
    * Line No.: 20
    * Physical LOC: 45
    * Logical LOC: 20
    * Parameter count: 2
    * Cyclomatic complexity: 8
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 15.75
    * Halstead volume: 461.63547152504697
    * Halstead effort: 7270.75867651949
* Function: **Groups.removeCover**
    * Line No.: 66
    * Physical LOC: 14
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 1.5
    * Halstead volume: 34.86917501586544
    * Halstead effort: 52.303762523798156

## src/groups/create.js

* Physical LOC: 95
* Logical LOC: 59
* Mean parameter count: 1
* Cyclomatic complexity: 26
* Cyclomatic complexity density: 44.06779661016949%
* Maintainability index: 97.52100636875204
* Dependency count: 4
* Function: **module.exports**
    * Line No.: 8
    * Physical LOC: 88
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 2.4000000000000004
    * Halstead volume: 45
    * Halstead effort: 108.00000000000001
* Function: **Groups.create**
    * Line No.: 9
    * Physical LOC: 58
    * Logical LOC: 39
    * Parameter count: 1
    * Cyclomatic complexity: 16
    * Cyclomatic complexity density: 41.02564102564102%
    * Halstead difficulty: 23.761363636363637
    * Halstead volume: 1310.692951601398
    * Halstead effort: 31143.85183861958
* Function: **isSystemGroup**
    * Line No.: 68
    * Physical LOC: 5
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 400%
    * Halstead difficulty: 4.090909090909091
    * Halstead volume: 136
    * Halstead effort: 556.3636363636364
* Function: **Groups.validateGroupName**
    * Line No.: 74
    * Physical LOC: 21
    * Logical LOC: 10
    * Parameter count: 1
    * Cyclomatic complexity: 8
    * Cyclomatic complexity density: 80%
    * Halstead difficulty: 12.352941176470587
    * Halstead volume: 359.49059363944036
    * Halstead effort: 4440.766156722498

## src/groups/data.js

* Physical LOC: 108
* Logical LOC: 68
* Mean parameter count: 1.6666666666666667
* Cyclomatic complexity: 23
* Cyclomatic complexity density: 33.82352941176471%
* Maintainability index: 113.85289433263719
* Dependency count: 8
* Function: **module.exports**
    * Line No.: 16
    * Physical LOC: 51
    * Logical LOC: 6
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 16.666666666666664%
    * Halstead difficulty: 3.5625
    * Halstead volume: 127.99896988958001
    * Halstead effort: 455.9963302316288
* Function: **Groups.getGroupsFields**
    * Line No.: 17
    * Physical LOC: 25
    * Logical LOC: 10
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 8.035714285714286
    * Halstead volume: 248.79590758313572
    * Halstead effort: 1999.252828793055
* Function: **Groups.getGroupsData**
    * Line No.: 43
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1
* Function: **Groups.getGroupData**
    * Line No.: 47
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 5.833333333333334
    * Halstead volume: 70.30835464468075
    * Halstead effort: 410.1320687606377
* Function: **Groups.getGroupField**
    * Line No.: 52
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 4.375
    * Halstead volume: 38.03910001730775
    * Halstead effort: 166.4210625757214
* Function: **Groups.getGroupFields**
    * Line No.: 57
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 3.5
    * Halstead volume: 39.863137138648355
    * Halstead effort: 139.52097998526924
* Function: **Groups.setGroupField**
    * Line No.: 62
    * Physical LOC: 4
    * Logical LOC: 5
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 2.8
    * Halstead volume: 79.95445336320968
    * Halstead effort: 223.8724694169871
* Function: **modifyGroup**
    * Line No.: 68
    * Physical LOC: 31
    * Logical LOC: 23
    * Parameter count: 2
    * Cyclomatic complexity: 14
    * Cyclomatic complexity density: 60.86956521739131%
    * Halstead difficulty: 13.108695652173914
    * Halstead volume: 1416.4331298135417
    * Halstead effort: 18567.590810381862
* Function: **escapeGroupData**
    * Line No.: 100
    * Physical LOC: 9
    * Logical LOC: 6
    * Parameter count: 1
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 6.923076923076923
    * Halstead volume: 275.2150500951926
    * Halstead effort: 1905.3349621974874

## src/groups/delete.js

* Physical LOC: 57
* Logical LOC: 23
* Mean parameter count: 1
* Cyclomatic complexity: 3
* Cyclomatic complexity density: 13.043478260869565%
* Maintainability index: 118.97537719140513
* Dependency count: 4
* Function: **module.exports**
    * Line No.: 8
    * Physical LOC: 50
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.875
    * Halstead volume: 25.26619429851844
    * Halstead effort: 47.374114309722074
* Function: **Groups.destroy**
    * Line No.: 9
    * Physical LOC: 38
    * Logical LOC: 14
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 21.428571428571427%
    * Halstead difficulty: 8.904761904761905
    * Halstead volume: 350
    * Halstead effort: 3116.666666666667
* Function: **removeGroupsFromPrivilegeGroups**
    * Line No.: 48
    * Physical LOC: 9
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0

## src/groups/index.js

* Physical LOC: 247
* Logical LOC: 148
* Mean parameter count: 1.7894736842105263
* Cyclomatic complexity: 21
* Cyclomatic complexity density: 14.18918918918919%
* Maintainability index: 117.58425276255939
* Dependency count: 19
* Function: **Groups.getEphemeralGroup**
    * Line No.: 38
    * Physical LOC: 9
    * Logical LOC: 6
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 16.666666666666664%
    * Halstead difficulty: 2.3636363636363638
    * Halstead volume: 82.0447025077789
    * Halstead effort: 193.92384229111377
* Function: **Groups.removeEphemeralGroups**
    * Line No.: 48
    * Physical LOC: 9
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 60%
    * Halstead difficulty: 9
    * Halstead volume: 133.437600046154
    * Halstead effort: 1200.9384004153858
* Function: **Groups.isPrivilegeGroup**
    * Line No.: 59
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 2
    * Halstead volume: 18.094737505048094
    * Halstead effort: 36.18947501009619
* Function: **Groups.getGroupsFromSet**
    * Line No.: 63
    * Physical LOC: 13
    * Logical LOC: 8
    * Parameter count: 3
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 37.5%
    * Halstead difficulty: 8.666666666666666
    * Halstead volume: 95.18387305144009
    * Halstead effort: 824.9268997791473
* Function: **Groups.getGroupsBySort**
    * Line No.: 77
    * Physical LOC: 9
    * Logical LOC: 7
    * Parameter count: 3
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 42.857142857142854%
    * Halstead difficulty: 4.333333333333333
    * Halstead volume: 89.85848369899593
    * Halstead effort: 389.386762695649
* Function: **Groups.getNonPrivilegeGroups**
    * Line No.: 87
    * Physical LOC: 6
    * Logical LOC: 4
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 4.199999999999999
    * Halstead volume: 108
    * Halstead effort: 453.5999999999999
* Function: **Groups.getGroups**
    * Line No.: 94
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 8
    * Halstead effort: 4
* Function: **Groups.getGroupsAndMembers**
    * Line No.: 98
    * Physical LOC: 13
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 3.333333333333333
    * Halstead volume: 27
    * Halstead effort: 89.99999999999999
* Function: **Groups.get**
    * Line No.: 112
    * Physical LOC: 38
    * Logical LOC: 20
    * Parameter count: 2
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 14.53846153846154
    * Halstead volume: 542.8366656785109
    * Halstead effort: 7892.0099856337365
* Function: **Groups.getOwners**
    * Line No.: 151
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1
* Function: **Groups.getOwnersAndMembers**
    * Line No.: 155
    * Physical LOC: 45
    * Logical LOC: 22
    * Parameter count: 4
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 22.727272727272727%
    * Halstead difficulty: 28.333333333333336
    * Halstead volume: 698.807247185574
    * Halstead effort: 19799.538670257934
* Function: **addMembers**
    * Line No.: 172
    * Physical LOC: 8
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 4.666666666666667
    * Halstead volume: 101.57915548582149
    * Halstead effort: 474.03605893383366
* Function: **Groups.getByGroupslug**
    * Line No.: 201
    * Physical LOC: 8
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 60%
    * Halstead difficulty: 6.75
    * Halstead volume: 74.23092131656186
    * Halstead effort: 501.0587188867926
* Function: **Groups.getGroupNameByGroupSlug**
    * Line No.: 210
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1
* Function: **Groups.isPrivate**
    * Line No.: 214
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1
* Function: **Groups.isHidden**
    * Line No.: 218
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1
* Function: **isFieldOn**
    * Line No.: 222
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 2.916666666666667
    * Halstead volume: 41.51317942364757
    * Halstead effort: 121.08010665230543
* Function: **Groups.exists**
    * Line No.: 227
    * Physical LOC: 12
    * Logical LOC: 9
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 6
    * Halstead volume: 228.40050598449557
    * Halstead effort: 1370.4030359069734
* Function: **Groups.existsBySlug**
    * Line No.: 240
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 2.6666666666666665
    * Halstead volume: 25.26619429851844
    * Halstead effort: 67.3765181293825

## src/groups/invite.js

* Physical LOC: 117
* Logical LOC: 58
* Mean parameter count: 1.9
* Cyclomatic complexity: 10
* Cyclomatic complexity density: 17.24137931034483%
* Maintainability index: 121.81436930277746
* Dependency count: 6
* Function: **module.exports**
    * Line No.: 11
    * Physical LOC: 107
    * Logical LOC: 9
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 11.11111111111111%
    * Halstead difficulty: 3.2727272727272725
    * Halstead volume: 178.94568133670737
    * Halstead effort: 585.6404116474059
* Function: **Groups.requestMembership**
    * Line No.: 12
    * Physical LOC: 18
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 1
    * Halstead volume: 12
    * Halstead effort: 12
* Function: **Groups.acceptMembership**
    * Line No.: 31
    * Physical LOC: 12
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 1
    * Halstead volume: 11.60964047443681
    * Halstead effort: 11.60964047443681
* Function: **Groups.rejectMembership**
    * Line No.: 44
    * Physical LOC: 8
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 6
    * Halstead volume: 87.56916320732489
    * Halstead effort: 525.4149792439493
* Function: **Groups.invite**
    * Line No.: 53
    * Physical LOC: 14
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 5.5
    * Halstead volume: 68.11428751370197
    * Halstead effort: 374.6285813253608
* Function: **inviteOrRequestMembership**
    * Line No.: 68
    * Physical LOC: 25
    * Logical LOC: 13
    * Parameter count: 3
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 38.46153846153847%
    * Halstead difficulty: 14
    * Halstead volume: 340
    * Halstead effort: 4760
* Function: **Groups.isInvited**
    * Line No.: 94
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **Groups.isPending**
    * Line No.: 98
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **checkInvitePending**
    * Line No.: 102
    * Physical LOC: 8
    * Logical LOC: 6
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 8.666666666666666
    * Halstead volume: 220.4183328392555
    * Halstead effort: 1910.2922179402142
* Function: **Groups.getPending**
    * Line No.: 111
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 3
    * Halstead volume: 20.67970000576925
    * Halstead effort: 62.039100017307746

## src/groups/join.js

* Physical LOC: 109
* Logical LOC: 48
* Mean parameter count: 1.5
* Cyclomatic complexity: 12
* Cyclomatic complexity density: 25%
* Maintainability index: 105.41172383063447
* Dependency count: 5
* Function: **module.exports**
    * Line No.: 10
    * Physical LOC: 100
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 1.7999999999999998
    * Halstead volume: 33
    * Halstead effort: 59.39999999999999
* Function: **Groups.join**
    * Line No.: 11
    * Physical LOC: 60
    * Logical LOC: 28
    * Parameter count: 2
    * Cyclomatic complexity: 8
    * Cyclomatic complexity density: 28.57142857142857%
    * Halstead difficulty: 14.18181818181818
    * Halstead volume: 811.963607540381
    * Halstead effort: 11515.120252390856
* Function: **createNonExistingGroups**
    * Line No.: 72
    * Physical LOC: 20
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 3
    * Halstead volume: 18.094737505048094
    * Halstead effort: 54.28421251514428
* Function: **setGroupTitleIfNotSet**
    * Line No.: 93
    * Physical LOC: 16
    * Logical LOC: 8
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 6.923076923076923
    * Halstead volume: 158.32466846199546
    * Halstead effort: 1096.0938585830456

## src/groups/leave.js

* Physical LOC: 100
* Logical LOC: 54
* Mean parameter count: 1.8
* Cyclomatic complexity: 12
* Cyclomatic complexity density: 22.22222222222222%
* Maintainability index: 107.95699172758825
* Dependency count: 4
* Function: **module.exports**
    * Line No.: 8
    * Physical LOC: 93
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 2.75
    * Halstead volume: 66.56842503028857
    * Halstead effort: 183.06316883329356
* Function: **Groups.leave**
    * Line No.: 9
    * Physical LOC: 54
    * Logical LOC: 26
    * Parameter count: 2
    * Cyclomatic complexity: 7
    * Cyclomatic complexity density: 26.923076923076923%
    * Halstead difficulty: 13.037037037037036
    * Halstead volume: 676.9826492342224
    * Halstead effort: 8825.84787149801
* Function: **clearGroupTitleIfSet**
    * Line No.: 64
    * Physical LOC: 17
    * Logical LOC: 11
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 36.36363636363637%
    * Halstead difficulty: 8.571428571428571
    * Halstead volume: 136.74117084629816
    * Halstead effort: 1172.0671786825556
* Function: **Groups.leaveAllGroups**
    * Line No.: 82
    * Physical LOC: 7
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1
    * Halstead volume: 8
    * Halstead effort: 8
* Function: **Groups.kick**
    * Line No.: 90
    * Physical LOC: 10
    * Logical LOC: 5
    * Parameter count: 3
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 60%
    * Halstead difficulty: 3.8571428571428577
    * Halstead volume: 59.207035490257475
    * Halstead effort: 228.3699940338503

## src/groups/membership.js

* Physical LOC: 175
* Logical LOC: 95
* Mean parameter count: 1.8666666666666667
* Cyclomatic complexity: 21
* Cyclomatic complexity density: 22.105263157894736%
* Maintainability index: 117.98174306350765
* Dependency count: 4
* Function: **module.exports**
    * Line No.: 9
    * Physical LOC: 167
    * Logical LOC: 13
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 7.6923076923076925%
    * Halstead difficulty: 3.5999999999999996
    * Halstead volume: 296.0646751024042
    * Halstead effort: 1065.8328303686549
* Function: **Groups.getMembers**
    * Line No.: 10
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 8
    * Halstead effort: 4
* Function: **Groups.getMemberUsers**
    * Line No.: 14
    * Physical LOC: 7
    * Logical LOC: 2
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1
    * Halstead volume: 15.509775004326936
    * Halstead effort: 15.509775004326936
* Function: **get**
    * Line No.: 15
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.5
    * Halstead volume: 11.60964047443681
    * Halstead effort: 17.414460711655217
* Function: **Groups.getMembersOfGroups**
    * Line No.: 22
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1
* Function: **Groups.isMember**
    * Line No.: 26
    * Physical LOC: 14
    * Logical LOC: 9
    * Parameter count: 2
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 55.55555555555556%
    * Halstead difficulty: 10.576923076923077
    * Halstead volume: 220.07820003461552
    * Halstead effort: 2327.7501926738178
* Function: **Groups.isMembers**
    * Line No.: 41
    * Physical LOC: 23
    * Logical LOC: 11
    * Parameter count: 2
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 45.45454545454545%
    * Halstead difficulty: 11.363636363636365
    * Halstead volume: 254.75441052116813
    * Halstead effort: 2894.936483195093
* Function: **Groups.isMemberOfGroups**
    * Line No.: 65
    * Physical LOC: 19
    * Logical LOC: 10
    * Parameter count: 2
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 10
    * Halstead volume: 288.8526375454329
    * Halstead effort: 2888.5263754543294
* Function: **filterNonCached**
    * Line No.: 85
    * Physical LOC: 8
    * Logical LOC: 5
    * Parameter count: 3
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 6.222222222222222
    * Halstead volume: 110.36149671375918
    * Halstead effort: 686.6937573300571
* Function: **Groups.isMemberOfAny**
    * Line No.: 94
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 4.5
    * Halstead volume: 68.53238859703687
    * Halstead effort: 308.3957486866659
* Function: **Groups.getMemberCount**
    * Line No.: 102
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 2.5
    * Halstead volume: 27
    * Halstead effort: 67.5
* Function: **Groups.isMemberOfGroupList**
    * Line No.: 107
    * Physical LOC: 10
    * Logical LOC: 6
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 5.6
    * Halstead volume: 116.75790004038474
    * Halstead effort: 653.8442402261545
* Function: **Groups.isMemberOfGroupsList**
    * Line No.: 118
    * Physical LOC: 11
    * Logical LOC: 6
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 16.666666666666664%
    * Halstead difficulty: 4.846153846153847
    * Halstead volume: 174.165028051187
    * Halstead effort: 844.0305205557524
* Function: **Groups.isMembersOfGroupList**
    * Line No.: 130
    * Physical LOC: 19
    * Logical LOC: 8
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 6.8
    * Halstead volume: 145.94737505048093
    * Halstead effort: 992.4421503432703
* Function: **getGroupNames**
    * Line No.: 150
    * Physical LOC: 25
    * Logical LOC: 9
    * Parameter count: 1
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 55.55555555555556%
    * Halstead difficulty: 13.333333333333332
    * Halstead volume: 289.86305521142435
    * Halstead effort: 3864.8407361523246

## src/groups/ownership.js

* Physical LOC: 39
* Logical LOC: 27
* Mean parameter count: 1.8
* Cyclomatic complexity: 4
* Cyclomatic complexity density: 14.814814814814813%
* Maintainability index: 125.0785101567275
* Dependency count: 2
* Function: **module.exports**
    * Line No.: 6
    * Physical LOC: 34
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 5.714285714285714
    * Halstead volume: 134.91783312685462
    * Halstead effort: 770.9590464391692
* Function: **&lt;anonymous>.isOwner**
    * Line No.: 9
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 2.916666666666667
    * Halstead volume: 44.97261104228487
    * Halstead effort: 131.17011553999754
* Function: **&lt;anonymous>.isOwners**
    * Line No.: 16
    * Physical LOC: 7
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 3.5999999999999996
    * Halstead volume: 44.97261104228487
    * Halstead effort: 161.9013997522255
* Function: **&lt;anonymous>.grant**
    * Line No.: 24
    * Physical LOC: 4
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 2.75
    * Halstead volume: 60.94436251225966
    * Halstead effort: 167.59699690871406
* Function: **&lt;anonymous>.rescind**
    * Line No.: 29
    * Physical LOC: 10
    * Logical LOC: 8
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 7.615384615384615
    * Halstead volume: 151.30376252379818
    * Halstead effort: 1152.23634537354

## src/groups/posts.js

* Physical LOC: 44
* Logical LOC: 27
* Mean parameter count: 1.5
* Cyclomatic complexity: 3
* Cyclomatic complexity density: 11.11111111111111%
* Maintainability index: 123.78069180309365
* Dependency count: 4
* Function: **module.exports**
    * Line No.: 8
    * Physical LOC: 37
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 2.4000000000000004
    * Halstead volume: 45
    * Halstead effort: 108.00000000000001
* Function: **Groups.onNewPostMade**
    * Line No.: 9
    * Physical LOC: 19
    * Logical LOC: 9
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 22.22222222222222%
    * Halstead difficulty: 6.4
    * Halstead volume: 141.7774500490386
    * Halstead effort: 907.3756803138472
* Function: **truncateMemberPosts**
    * Line No.: 29
    * Physical LOC: 9
    * Logical LOC: 6
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 6
    * Halstead volume: 72.33974351909447
    * Halstead effort: 434.0384611145668
* Function: **Groups.getLatestMemberPosts**
    * Line No.: 39
    * Physical LOC: 5
    * Logical LOC: 3
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 1.875
    * Halstead volume: 25.26619429851844
    * Halstead effort: 47.374114309722074

## src/groups/update.js

* Physical LOC: 291
* Logical LOC: 148
* Mean parameter count: 1.8571428571428572
* Cyclomatic complexity: 41
* Cyclomatic complexity density: 27.7027027027027%
* Maintainability index: 107.24491082826994
* Dependency count: 12
* Function: **module.exports**
    * Line No.: 15
    * Physical LOC: 277
    * Logical LOC: 13
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 7.6923076923076925%
    * Halstead difficulty: 2.1999999999999997
    * Halstead volume: 179.30677506201943
    * Halstead effort: 394.4749051364427
* Function: **Groups.update**
    * Line No.: 16
    * Physical LOC: 76
    * Logical LOC: 38
    * Parameter count: 2
    * Cyclomatic complexity: 23
    * Cyclomatic complexity density: 60.526315789473685%
    * Halstead difficulty: 17.097826086956523
    * Halstead volume: 1317.7120430570526
    * Halstead effort: 22530.01134487765
* Function: **updateVisibility**
    * Line No.: 93
    * Physical LOC: 16
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 2.6666666666666665
    * Halstead volume: 22.458839376460833
    * Halstead effort: 59.89023833722889
* Function: **Groups.hide**
    * Line No.: 110
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **Groups.show**
    * Line No.: 114
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **showHide**
    * Line No.: 118
    * Physical LOC: 7
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.6666666666666667
    * Halstead volume: 16.253496664211536
    * Halstead effort: 27.089161107019226
* Function: **updatePrivacy**
    * Line No.: 126
    * Physical LOC: 19
    * Logical LOC: 9
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 44.44444444444444%
    * Halstead difficulty: 6.75
    * Halstead volume: 144.4295354570819
    * Halstead effort: 974.8993643353028
* Function: **checkNameChange**
    * Line No.: 146
    * Physical LOC: 27
    * Logical LOC: 14
    * Parameter count: 2
    * Cyclomatic complexity: 7
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 10.3125
    * Halstead volume: 290.0481376319716
    * Halstead effort: 2991.121419329707
* Function: **Groups.renameGroup**
    * Line No.: 174
    * Physical LOC: 43
    * Logical LOC: 31
    * Parameter count: 2
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 19.35483870967742%
    * Halstead difficulty: 9.608695652173912
    * Halstead volume: 361.89475010096186
    * Halstead effort: 3477.336511839677
* Function: **updateMemberGroupTitles**
    * Line No.: 218
    * Physical LOC: 13
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 2
    * Halstead effort: 0
* Function: **renameGroupsMember**
    * Line No.: 232
    * Physical LOC: 10
    * Logical LOC: 7
    * Parameter count: 3
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 28.57142857142857%
    * Halstead difficulty: 5
    * Halstead volume: 79.95445336320968
    * Halstead effort: 399.7722668160484
* Function: **updateNavigationItems**
    * Line No.: 243
    * Physical LOC: 11
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 2.75
    * Halstead volume: 71.69925001442313
    * Halstead effort: 197.1729375396636
* Function: **updateWidgets**
    * Line No.: 255
    * Physical LOC: 21
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 2.4
    * Halstead volume: 87.56916320732489
    * Halstead effort: 210.16599169757973
* Function: **updateConfig**
    * Line No.: 277
    * Physical LOC: 14
    * Logical LOC: 6
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 5.1
    * Halstead volume: 222.02638308846554
    * Halstead effort: 1132.334553751174

## src/groups/user.js

* Physical LOC: 67
* Logical LOC: 41
* Mean parameter count: 1.5714285714285714
* Cyclomatic complexity: 4
* Cyclomatic complexity density: 9.75609756097561%
* Maintainability index: 119.8839255849173
* Dependency count: 2
* Function: **module.exports**
    * Line No.: 6
    * Physical LOC: 62
    * Logical LOC: 6
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 16.666666666666664%
    * Halstead difficulty: 3.1875
    * Halstead volume: 114.16124341503082
    * Halstead effort: 363.88896338541076
* Function: **Groups.getUsersFromSet**
    * Line No.: 7
    * Physical LOC: 8
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 2.6666666666666665
    * Halstead volume: 25.26619429851844
    * Halstead effort: 67.3765181293825
* Function: **Groups.getUserGroups**
    * Line No.: 16
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1
* Function: **Groups.getUserGroupsFromSet**
    * Line No.: 20
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.5
    * Halstead volume: 15.509775004326936
    * Halstead effort: 23.264662506490403
* Function: **Groups.getUserGroupMembership**
    * Line No.: 25
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.5
    * Halstead volume: 15.509775004326936
    * Halstead effort: 23.264662506490403
* Function: **findUserGroups**
    * Line No.: 30
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3.125
    * Halstead volume: 31.699250014423125
    * Halstead effort: 99.06015629507226
* Function: **Groups.getUserInviteGroups**
    * Line No.: 35
    * Physical LOC: 32
    * Logical LOC: 20
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 15%
    * Halstead difficulty: 16.15625
    * Halstead volume: 456.469200207693
    * Halstead effort: 7374.83051585554

## src/messaging/create.js

* Physical LOC: 102
* Logical LOC: 12
* Mean parameter count: 1
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 8.333333333333332%
* Maintainability index: 124.90214606835355
* Dependency count: 4
* Function: **module.exports**
    * Line No.: 8
    * Physical LOC: 95
    * Logical LOC: 6
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 16.666666666666664%
    * Halstead difficulty: 1.8571428571428572
    * Halstead volume: 79.24812503605781
    * Halstead effort: 147.1750893526788

## src/messaging/data.js

* Physical LOC: 156
* Logical LOC: 24
* Mean parameter count: 2
* Cyclomatic complexity: 4
* Cyclomatic complexity density: 16.666666666666664%
* Maintainability index: 115.18700263664894
* Dependency count: 5
* Function: **module.exports**
    * Line No.: 12
    * Physical LOC: 125
    * Logical LOC: 7
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 14.285714285714285%
    * Halstead difficulty: 2.4545454545454546
    * Halstead volume: 129.45006734995852
    * Halstead effort: 317.7410744044436
* Function: **modifyMessage**
    * Line No.: 138
    * Physical LOC: 19
    * Logical LOC: 8
    * Parameter count: 3
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 5.625
    * Halstead volume: 236.34987578777677
    * Halstead effort: 1329.4680513062442

## src/messaging/delete.js

* Physical LOC: 33
* Logical LOC: 13
* Mean parameter count: 2
* Cyclomatic complexity: 3
* Cyclomatic complexity density: 23.076923076923077%
* Maintainability index: 125.02428435790966
* Dependency count: 1
* Function: **module.exports**
    * Line No.: 5
    * Physical LOC: 29
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 2.25
    * Halstead volume: 30.880904142633646
    * Halstead effort: 69.4820343209257
* Function: **doDeleteRestore**
    * Line No.: 9
    * Physical LOC: 24
    * Logical LOC: 7
    * Parameter count: 3
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 42.857142857142854%
    * Halstead difficulty: 5.3999999999999995
    * Halstead volume: 106.19818783608963
    * Halstead effort: 573.470214314884

## src/messaging/edit.js

* Physical LOC: 92
* Logical LOC: 11
* Mean parameter count: 1
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 9.090909090909092%
* Maintainability index: 132.30842081080246
* Dependency count: 5
* Function: **module.exports**
    * Line No.: 11
    * Physical LOC: 82
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 2.4000000000000004
    * Halstead volume: 48
    * Halstead effort: 115.20000000000002

## src/messaging/index.js

* Physical LOC: 306
* Logical LOC: 37
* Mean parameter count: 2
* Cyclomatic complexity: 4
* Cyclomatic complexity density: 10.81081081081081%
* Maintainability index: 133.3095906993872
* Dependency count: 15
* Function: **canGet**
    * Line No.: 58
    * Physical LOC: 9
    * Logical LOC: 2
    * Parameter count: 3
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 3.333333333333333
    * Halstead volume: 44.97261104228487
    * Halstead effort: 149.90870347428287
* Function: **checkReputation**
    * Line No.: 256
    * Physical LOC: 8
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 75%
    * Halstead difficulty: 5.5
    * Halstead volume: 87.56916320732489
    * Halstead effort: 481.6303976402869

## src/messaging/notifications.js

* Physical LOC: 82
* Logical LOC: 20
* Mean parameter count: 2.5
* Cyclomatic complexity: 2
* Cyclomatic complexity density: 10%
* Maintainability index: 120.11819297480284
* Dependency count: 6
* Function: **module.exports**
    * Line No.: 11
    * Physical LOC: 72
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 2.8
    * Halstead volume: 41.20902501875006
    * Halstead effort: 115.38527005250016
* Function: **sendNotifications**
    * Line No.: 59
    * Physical LOC: 23
    * Logical LOC: 9
    * Parameter count: 4
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 22.22222222222222%
    * Halstead difficulty: 5.714285714285714
    * Halstead volume: 182.83669636412918
    * Halstead effort: 1044.7811220807382

## src/messaging/rooms.js

* Physical LOC: 261
* Logical LOC: 60
* Mean parameter count: 1.5714285714285714
* Cyclomatic complexity: 6
* Cyclomatic complexity density: 10%
* Maintainability index: 115.97678990006509
* Dependency count: 6
* Function: **module.exports**
    * Line No.: 11
    * Physical LOC: 251
    * Logical LOC: 20
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 5%
    * Halstead difficulty: 2.7954545454545454
    * Halstead volume: 376.1523513717527
    * Halstead effort: 1051.5168004255813
* Function: **modifyRoomData**
    * Line No.: 28
    * Physical LOC: 11
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.5
    * Halstead volume: 10
    * Halstead effort: 15
* Function: **Messaging.addUsersToRoom**
    * Line No.: 87
    * Physical LOC: 14
    * Logical LOC: 9
    * Parameter count: 3
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 22.22222222222222%
    * Halstead difficulty: 5.818181818181818
    * Halstead volume: 144.4295354570819
    * Halstead effort: 840.3172972048402
* Function: **Messaging.isGroupChat**
    * Line No.: 116
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1
    * Halstead volume: 8
    * Halstead effort: 8
* Function: **updateGroupChatField**
    * Line No.: 120
    * Physical LOC: 9
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 3.2
    * Halstead volume: 57.058650025961626
    * Halstead effort: 182.5876800830772
* Function: **updateOwner**
    * Line No.: 168
    * Physical LOC: 5
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 3
    * Halstead volume: 36
    * Halstead effort: 108
* Function: **Messaging.renameRoom**
    * Line No.: 189
    * Physical LOC: 27
    * Logical LOC: 14
    * Parameter count: 3
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 28.57142857142857%
    * Halstead difficulty: 9.705882352941176
    * Halstead volume: 278.826585479341
    * Halstead effort: 2706.2580355347804

## src/messaging/unread.js

* Physical LOC: 39
* Logical LOC: 9
* Mean parameter count: 1
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 11.11111111111111%
* Maintainability index: 128.68460060609806
* Dependency count: 2
* Function: **module.exports**
    * Line No.: 6
    * Physical LOC: 34
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 1.8333333333333333
    * Halstead volume: 63
    * Halstead effort: 115.5

## src/meta/aliases.js

* Physical LOC: 43
* Logical LOC: 20
* Mean parameter count: 0
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 5%
* Maintainability index: 132.39216607123606
* Dependency count: 2
* Function: **buildTargets**
    * Line No.: 25
    * Physical LOC: 17
    * Logical LOC: 3
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 3.230769230769231
    * Halstead volume: 135.93368043019473
    * Halstead effort: 439.17035215909067

## src/meta/blacklist.js

* Physical LOC: 171
* Logical LOC: 74
* Mean parameter count: 0.6666666666666666
* Cyclomatic complexity: 7
* Cyclomatic complexity density: 9.45945945945946%
* Maintainability index: 107.5775873658865
* Dependency count: 8
* Function: **Blacklist.load**
    * Line No.: 16
    * Physical LOC: 16
    * Logical LOC: 10
    * Parameter count: 0
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 6.75
    * Halstead volume: 219.61587113893805
    * Halstead effort: 1482.4071301878319
* Function: **Blacklist.save**
    * Line No.: 35
    * Physical LOC: 5
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 1
    * Halstead volume: 15.509775004326936
    * Halstead effort: 15.509775004326936
* Function: **Blacklist.get**
    * Line No.: 41
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 5
    * Halstead volume: 25.26619429851844
    * Halstead effort: 126.3309714925922
* Function: **Blacklist.test**
    * Line No.: 46
    * Physical LOC: 44
    * Logical LOC: 14
    * Parameter count: 1
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 28.57142857142857%
    * Halstead difficulty: 12.25
    * Halstead volume: 446.07383864270474
    * Halstead effort: 5464.404523373133
* Function: **Blacklist.validate**
    * Line No.: 91
    * Physical LOC: 71
    * Logical LOC: 21
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 9.523809523809524%
    * Halstead difficulty: 14.999999999999998
    * Halstead volume: 591.9650485125719
    * Halstead effort: 8879.475727688578
* Function: **Blacklist.addRule**
    * Line No.: 163
    * Physical LOC: 9
    * Logical LOC: 6
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 5.625
    * Halstead volume: 89.92418250750748
    * Halstead effort: 505.8235266047296

## src/meta/build.js

* Physical LOC: 264
* Logical LOC: 133
* Mean parameter count: 0.9375
* Cyclomatic complexity: 19
* Cyclomatic complexity density: 14.285714285714285%
* Maintainability index: 116.6685449099828
* Dependency count: 21
* Function: **&lt;anonymous>**
    * Line No.: 19
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **&lt;anonymous>**
    * Line No.: 22
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **&lt;anonymous>**
    * Line No.: 25
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **&lt;anonymous>**
    * Line No.: 28
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **&lt;anonymous>**
    * Line No.: 37
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **&lt;anonymous>**
    * Line No.: 40
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **templates**
    * Line No.: 47
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **languages**
    * Line No.: 50
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **beforeBuild**
    * Line No.: 64
    * Physical LOC: 15
    * Logical LOC: 9
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 11.11111111111111%
    * Halstead difficulty: 2.3636363636363638
    * Halstead volume: 93.76537429460444
    * Halstead effort: 221.6272483327014
* Function: **buildTargets**
    * Line No.: 82
    * Physical LOC: 39
    * Logical LOC: 13
    * Parameter count: 3
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 30.76923076923077%
    * Halstead difficulty: 5.777777777777778
    * Halstead volume: 249.1233050614779
    * Halstead effort: 1439.3790959107612
* Function: **buildJSTargets**
    * Line No.: 93
    * Physical LOC: 11
    * Logical LOC: 3
    * Parameter count: 0
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 2
    * Halstead volume: 20.67970000576925
    * Halstead effort: 41.3594000115385
* Function: **step**
    * Line No.: 122
    * Physical LOC: 13
    * Logical LOC: 6
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 16.666666666666664%
    * Halstead difficulty: 4.5
    * Halstead volume: 116
    * Halstead effort: 522
* Function: **exports.build**
    * Line No.: 136
    * Physical LOC: 77
    * Logical LOC: 33
    * Parameter count: 2
    * Cyclomatic complexity: 9
    * Cyclomatic complexity density: 27.27272727272727%
    * Halstead difficulty: 13.977272727272727
    * Halstead volume: 952.9881739966183
    * Halstead effort: 13320.17561381637
* Function: **getWebpackConfig**
    * Line No.: 214
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 200%
    * Halstead difficulty: 2.5
    * Halstead volume: 46.604512509375034
    * Halstead effort: 116.51128127343759
* Function: **exports.webpack**
    * Line No.: 218
    * Physical LOC: 41
    * Logical LOC: 25
    * Parameter count: 1
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 7.615384615384615
    * Halstead volume: 765.1398625987983
    * Halstead effort: 5826.834338252387
* Function: **exports.buildAll**
    * Line No.: 260
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0

## src/meta/cacheBuster.js

* Physical LOC: 41
* Logical LOC: 23
* Mean parameter count: 0
* Cyclomatic complexity: 4
* Cyclomatic complexity density: 17.391304347826086%
* Maintainability index: 128.34613567664022
* Dependency count: 5
* Function: **generate**
    * Line No.: 13
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 2
    * Halstead volume: 57.359400011538504
    * Halstead effort: 114.71880002307701
* Function: **write**
    * Line No.: 17
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **read**
    * Line No.: 22
    * Physical LOC: 18
    * Logical LOC: 9
    * Parameter count: 0
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 44.44444444444444%
    * Halstead difficulty: 8.357142857142858
    * Halstead volume: 112
    * Halstead effort: 936

## src/meta/css.js

* Physical LOC: 154
* Logical LOC: 64
* Mean parameter count: 1.7142857142857142
* Cyclomatic complexity: 9
* Cyclomatic complexity density: 14.0625%
* Maintainability index: 115.13881199971019
* Dependency count: 10
* Function: **client**
    * Line No.: 26
    * Physical LOC: 18
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1
* Function: **admin**
    * Line No.: 44
    * Physical LOC: 15
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1
* Function: **filterMissingFiles**
    * Line No.: 61
    * Physical LOC: 12
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3.333333333333333
    * Halstead volume: 27
    * Halstead effort: 89.99999999999999
* Function: **getImports**
    * Line No.: 74
    * Physical LOC: 19
    * Logical LOC: 5
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 4.375
    * Halstead volume: 70.32403072095333
    * Halstead effort: 307.6676344041708
* Function: **getBundleMetadata**
    * Line No.: 94
    * Physical LOC: 47
    * Logical LOC: 24
    * Parameter count: 1
    * Cyclomatic complexity: 8
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 16.18421052631579
    * Halstead volume: 882.0997500027328
    * Halstead effort: 14276.088059254756
* Function: **filterGetImports**
    * Line No.: 131
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.5
    * Halstead volume: 19.651484454403228
    * Halstead effort: 29.47722668160484
* Function: **CSS.buildBundle**
    * Line No.: 142
    * Physical LOC: 13
    * Logical LOC: 8
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 4.083333333333334
    * Halstead volume: 123.18989788986397
    * Halstead effort: 503.0254163836113

## src/meta/dependencies.js

* Physical LOC: 72
* Logical LOC: 40
* Mean parameter count: 1.25
* Cyclomatic complexity: 7
* Cyclomatic complexity density: 17.5%
* Maintainability index: 117.74195239897348
* Dependency count: 7
* Function: **Dependencies.check**
    * Line No.: 18
    * Physical LOC: 13
    * Logical LOC: 8
    * Parameter count: 0
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 37.5%
    * Halstead difficulty: 5.3125
    * Halstead volume: 159.81495041679716
    * Halstead effort: 849.0169240892349
* Function: **Dependencies.checkModule**
    * Line No.: 32
    * Physical LOC: 15
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 5.625
    * Halstead volume: 102.7985828955553
    * Halstead effort: 578.2420287874986
* Function: **Dependencies.parseModuleData**
    * Line No.: 48
    * Physical LOC: 10
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 3.5
    * Halstead volume: 33
    * Halstead effort: 115.5
* Function: **Dependencies.doesSatisfy**
    * Line No.: 59
    * Physical LOC: 14
    * Logical LOC: 9
    * Parameter count: 2
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 55.55555555555556%
    * Halstead difficulty: 8.15625
    * Halstead volume: 264.6998028171593
    * Halstead effort: 2158.9577667274557

## src/meta/index.js

* Physical LOC: 73
* Logical LOC: 46
* Mean parameter count: 0.25
* Cyclomatic complexity: 7
* Cyclomatic complexity density: 15.217391304347828%
* Maintainability index: 124.62806139719892
* Dependency count: 20
* Function: **Meta.userOrGroupExists**
    * Line No.: 29
    * Physical LOC: 13
    * Logical LOC: 7
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 42.857142857142854%
    * Halstead difficulty: 6.136363636363636
    * Halstead volume: 133.97977094150824
    * Halstead effort: 822.1485944138004
* Function: **Meta.restart**
    * Line No.: 51
    * Physical LOC: 4
    * Logical LOC: 3
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 2.2857142857142856
    * Halstead volume: 51.89147427955947
    * Halstead effort: 118.6090840675645
* Function: **restart**
    * Line No.: 56
    * Physical LOC: 9
    * Logical LOC: 5
    * Parameter count: 0
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 3.75
    * Halstead volume: 72.33974351909447
    * Halstead effort: 271.27403819660424
* Function: **Meta.getSessionTTLSeconds**
    * Line No.: 66
    * Physical LOC: 6
    * Logical LOC: 4
    * Parameter count: 0
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 75%
    * Halstead difficulty: 4.800000000000001
    * Halstead volume: 128
    * Halstead effort: 614.4000000000001

## src/meta/js.js

* Physical LOC: 140
* Logical LOC: 50
* Mean parameter count: 0.42857142857142855
* Cyclomatic complexity: 2
* Cyclomatic complexity density: 4%
* Maintainability index: 133.13235002756772
* Dependency count: 9
* Function: **linkModules**
    * Line No.: 36
    * Physical LOC: 22
    * Logical LOC: 3
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 1.5
    * Halstead volume: 11.60964047443681
    * Halstead effort: 17.414460711655217
* Function: **clearModules**
    * Line No.: 61
    * Physical LOC: 8
    * Logical LOC: 2
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 2
    * Halstead volume: 19.651484454403228
    * Halstead effort: 39.302968908806456
* Function: **JS.buildModules**
    * Line No.: 70
    * Physical LOC: 11
    * Logical LOC: 4
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 1.5
    * Halstead volume: 15.509775004326936
    * Halstead effort: 23.264662506490403
* Function: **JS.linkStatics**
    * Line No.: 82
    * Physical LOC: 11
    * Logical LOC: 2
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **getBundleScriptList**
    * Line No.: 94
    * Physical LOC: 30
    * Logical LOC: 7
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 28.57142857142857%
    * Halstead difficulty: 6.230769230769231
    * Halstead volume: 164.99896988958
    * Halstead effort: 1028.0705046966139
* Function: **JS.buildBundle**
    * Line No.: 125
    * Physical LOC: 12
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 2.1818181818181817
    * Halstead volume: 85.95159310338741
    * Halstead effort: 187.53074858920888
* Function: **JS.killMinifier**
    * Line No.: 138
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1
    * Halstead volume: 8
    * Halstead effort: 8

## src/meta/languages.js

* Physical LOC: 143
* Logical LOC: 63
* Mean parameter count: 1.8571428571428572
* Cyclomatic complexity: 6
* Cyclomatic complexity density: 9.523809523809524%
* Maintainability index: 116.92698307748749
* Dependency count: 10
* Function: **getTranslationMetadata**
    * Line No.: 22
    * Physical LOC: 39
    * Logical LOC: 15
    * Parameter count: 0
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 13.333333333333334%
    * Halstead difficulty: 12.25
    * Halstead volume: 501.4827251399043
    * Halstead effort: 6143.163382963828
* Function: **writeLanguageFile**
    * Line No.: 62
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 2.708333333333333
    * Halstead volume: 89.92418250750748
    * Halstead effort: 243.54466095783275
* Function: **buildTranslations**
    * Line No.: 73
    * Physical LOC: 15
    * Logical LOC: 6
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 16.666666666666664%
    * Halstead difficulty: 2.9545454545454546
    * Halstead volume: 116
    * Halstead effort: 342.72727272727275
* Function: **buildNamespaceLanguage**
    * Line No.: 89
    * Physical LOC: 11
    * Logical LOC: 5
    * Parameter count: 3
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 3.375
    * Halstead volume: 60.91767875292166
    * Halstead effort: 205.5971657911106
* Function: **addPlugin**
    * Line No.: 101
    * Physical LOC: 26
    * Logical LOC: 5
    * Parameter count: 4
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 60%
    * Halstead difficulty: 10
    * Halstead volume: 446.24762247421205
    * Halstead effort: 4462.47622474212
* Function: **assignFileToTranslations**
    * Line No.: 128
    * Physical LOC: 10
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 2.5714285714285716
    * Halstead volume: 51.89147427955947
    * Halstead effort: 133.43521957601007
* Function: **buildLanguages**
    * Line No.: 139
    * Physical LOC: 5
    * Logical LOC: 3
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 1
    * Halstead volume: 4.754887502163468
    * Halstead effort: 4.754887502163468

## src/meta/logs.js

* Physical LOC: 16
* Logical LOC: 9
* Mean parameter count: 0
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 11.11111111111111%
* Maintainability index: 171
* Dependency count: 2
* Function: **Logs.get**
    * Line No.: 10
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **Logs.clear**
    * Line No.: 14
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0

## src/meta/minifier.js

* Physical LOC: 256
* Logical LOC: 97
* Mean parameter count: 1.25
* Cyclomatic complexity: 10
* Cyclomatic complexity density: 10.309278350515463%
* Maintainability index: 130.8833547067032
* Dependency count: 12
* Function: **get**
    * Line No.: 24
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1
* Function: **set**
    * Line No.: 27
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 2.8571428571428568
    * Halstead volume: 53.77443751081735
    * Halstead effort: 153.6412500309067
* Function: **Minifier.killAll**
    * Line No.: 39
    * Physical LOC: 8
    * Logical LOC: 3
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 2.4000000000000004
    * Halstead volume: 42
    * Halstead effort: 100.80000000000001
* Function: **getChild**
    * Line No.: 48
    * Physical LOC: 15
    * Logical LOC: 8
    * Parameter count: 0
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 6.107142857142858
    * Halstead volume: 162.84823041805248
    * Halstead effort: 994.5374071959634
* Function: **freeChild**
    * Line No.: 64
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.5
    * Halstead volume: 25.84962500721156
    * Halstead effort: 38.77443751081734
* Function: **removeChild**
    * Line No.: 69
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 6.416666666666666
    * Halstead volume: 74.00879436282185
    * Halstead effort: 474.8897638281068
* Function: **forkAction**
    * Line No.: 76
    * Physical LOC: 26
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1
    * Halstead volume: 8
    * Halstead effort: 8
* Function: **executeAction**
    * Line No.: 132
    * Physical LOC: 9
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 60%
    * Halstead difficulty: 6.25
    * Halstead volume: 138.24238017775622
    * Halstead effort: 864.0148761109764
* Function: **concat**
    * Line No.: 142
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 5.5
    * Halstead volume: 78.86917501586544
    * Halstead effort: 433.7804625872599
* Function: **minifyJS_batch**
    * Line No.: 150
    * Physical LOC: 18
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **minifyJS**
    * Line No.: 169
    * Physical LOC: 15
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1
    * Halstead volume: 8
    * Halstead effort: 8
* Function: **minifyAndSave**
    * Line No.: 185
    * Physical LOC: 25
    * Logical LOC: 11
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 18.181818181818183%
    * Halstead difficulty: 6.352941176470589
    * Halstead volume: 216.22022703449025
    * Halstead effort: 1373.6343835132323
* Function: **&lt;anonymous>.bundle**
    * Line No.: 212
    * Physical LOC: 8
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 8
    * Halstead effort: 4
* Function: **&lt;anonymous>.minifyBatch**
    * Line No.: 221
    * Physical LOC: 6
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **buildCSS**
    * Line No.: 228
    * Physical LOC: 17
    * Logical LOC: 8
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 6.576923076923077
    * Halstead volume: 169.4584015082173
    * Halstead effort: 1114.5148714578906
* Function: **&lt;anonymous>.bundle**
    * Line No.: 247
    * Physical LOC: 8
    * Logical LOC: 1
    * Parameter count: 4
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 11.60964047443681
    * Halstead effort: 5.804820237218405

## src/meta/tags.js

* Physical LOC: 269
* Logical LOC: 31
* Mean parameter count: 2
* Cyclomatic complexity: 6
* Cyclomatic complexity density: 19.35483870967742%
* Maintainability index: 118.04203796911574
* Dependency count: 5
* Function: **addIfNotExists**
    * Line No.: 189
    * Physical LOC: 16
    * Logical LOC: 7
    * Parameter count: 4
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 28.57142857142857%
    * Halstead difficulty: 8.214285714285714
    * Halstead volume: 187.98346252956745
    * Halstead effort: 1544.1498707785895
* Function: **stripRelativePath**
    * Line No.: 206
    * Physical LOC: 7
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 3.6
    * Halstead volume: 53.88872502451932
    * Halstead effort: 193.99941008826954
* Function: **addSiteOGImage**
    * Line No.: 214
    * Physical LOC: 56
    * Logical LOC: 7
    * Parameter count: 1
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 57.14285714285714%
    * Halstead difficulty: 8.181818181818182
    * Halstead volume: 279.8104562687687
    * Halstead effort: 2289.3582785626527

## src/meta/templates.js

* Physical LOC: 139
* Logical LOC: 70
* Mean parameter count: 1.4
* Cyclomatic complexity: 6
* Cyclomatic complexity density: 8.571428571428571%
* Maintainability index: 108.80353445264569
* Dependency count: 14
* Function: **processImports**
    * Line No.: 24
    * Physical LOC: 21
    * Logical LOC: 12
    * Parameter count: 3
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 9.964285714285715
    * Halstead volume: 266.89015540736375
    * Halstead effort: 2659.369762809089
* Function: **getTemplateDirs**
    * Line No.: 47
    * Physical LOC: 34
    * Logical LOC: 17
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 17.647058823529413%
    * Halstead difficulty: 10.2
    * Halstead volume: 676.5314840143678
    * Halstead effort: 6900.621136946552
* Function: **getTemplateFiles**
    * Line No.: 82
    * Physical LOC: 19
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 4.199999999999999
    * Halstead volume: 51.89147427955947
    * Halstead effort: 217.94419197414973
* Function: **compileTemplate**
    * Line No.: 102
    * Physical LOC: 11
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 4.285714285714286
    * Halstead volume: 77.70923408096293
    * Halstead effort: 333.03957463269825
* Function: **compile**
    * Line No.: 115
    * Physical LOC: 24
    * Logical LOC: 8
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 12.5%
    * Halstead difficulty: 3.125
    * Halstead volume: 74.00879436282185
    * Halstead effort: 231.27748238381827

## src/meta/themes.js

* Physical LOC: 167
* Logical LOC: 29
* Mean parameter count: 1
* Cyclomatic complexity: 3
* Cyclomatic complexity density: 10.344827586206897%
* Maintainability index: 116.31454246037819
* Dependency count: 10
* Function: **getThemes**
    * Line No.: 60
    * Physical LOC: 26
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 4.166666666666667
    * Halstead volume: 33
    * Halstead effort: 137.5
* Function: **Themes.setPath**
    * Line No.: 154
    * Physical LOC: 14
    * Logical LOC: 9
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 8.944444444444443
    * Halstead volume: 371.50849518197793
    * Halstead effort: 3322.9370957943574

## src/middleware/admin.js

* Physical LOC: 176
* Logical LOC: 29
* Mean parameter count: 1
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 3.4482758620689653%
* Maintainability index: 144.5239183178141
* Dependency count: 13
* Function: **getAdminScripts**
    * Line No.: 98
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3.75
    * Halstead volume: 22.458839376460833
    * Halstead effort: 84.22064766172812
* Function: **getLatestVersion**
    * Line No.: 103
    * Physical LOC: 9
    * Logical LOC: 4
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 2.25
    * Halstead volume: 16.253496664211536
    * Halstead effort: 36.57036749447595
* Function: **middleware.renderFooter**
    * Line No.: 113
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 8
    * Halstead effort: 4

## src/middleware/assert.js

* Physical LOC: 141
* Logical LOC: 23
* Mean parameter count: 0
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 4.3478260869565215%
* Maintainability index: 92.4730700692055
* Dependency count: 12

## src/middleware/header.js

* Physical LOC: 264
* Logical LOC: 141
* Mean parameter count: 1.6
* Cyclomatic complexity: 35
* Cyclomatic complexity density: 24.822695035460992%
* Maintainability index: 86.00283346448985
* Dependency count: 19
* Function: **renderHeader**
    * Line No.: 56
    * Physical LOC: 104
    * Logical LOC: 65
    * Parameter count: 3
    * Cyclomatic complexity: 23
    * Cyclomatic complexity density: 35.38461538461539%
    * Halstead difficulty: 24.161290322580644
    * Halstead volume: 4031.3972578678854
    * Halstead effort: 97403.75955300148
* Function: **appendUnreadCounts**
    * Line No.: 161
    * Physical LOC: 71
    * Logical LOC: 27
    * Parameter count: 1
    * Cyclomatic complexity: 8
    * Cyclomatic complexity density: 29.629629629629626%
    * Halstead difficulty: 8.884615384615385
    * Halstead volume: 815.4045251052888
    * Halstead effort: 7244.555588435451
* Function: **&lt;anonymous>**
    * Line No.: 167
    * Physical LOC: 13
    * Logical LOC: 8
    * Parameter count: 0
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 37.5%
    * Halstead difficulty: 5.884615384615385
    * Halstead volume: 151.6206750336681
    * Halstead effort: 892.2293569288931
* Function: **renderFooter**
    * Line No.: 233
    * Physical LOC: 17
    * Logical LOC: 7
    * Parameter count: 3
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 28.57142857142857%
    * Halstead difficulty: 9.142857142857142
    * Halstead volume: 272.0253287368751
    * Halstead effort: 2487.088719880001
* Function: **modifyTitle**
    * Line No.: 251
    * Physical LOC: 14
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 60%
    * Halstead difficulty: 5.25
    * Halstead volume: 144.4295354570819
    * Halstead effort: 758.2550611496799

## src/middleware/headers.js

* Physical LOC: 116
* Logical LOC: 16
* Mean parameter count: 0.5
* Cyclomatic complexity: 2
* Cyclomatic complexity density: 12.5%
* Maintainability index: 131.28446615595465
* Dependency count: 7
* Function: **module.exports**
    * Line No.: 12
    * Physical LOC: 105
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 3.3333333333333335
    * Halstead volume: 63.11663380285989
    * Halstead effort: 210.3887793428663
* Function: **listCodes**
    * Line No.: 106
    * Physical LOC: 10
    * Logical LOC: 4
    * Parameter count: 0
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 4.375
    * Halstead volume: 82.0447025077789
    * Halstead effort: 358.94557347153267

## src/middleware/helpers.js

* Physical LOC: 68
* Logical LOC: 30
* Mean parameter count: 2.5
* Cyclomatic complexity: 5
* Cyclomatic complexity density: 16.666666666666664%
* Maintainability index: 119.4546710566993
* Dependency count: 4
* Function: **helpers.try**
    * Line No.: 11
    * Physical LOC: 18
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 6
    * Halstead volume: 72.64806399138325
    * Halstead effort: 435.8883839482995
* Function: **&lt;anonymous>**
    * Line No.: 13
    * Physical LOC: 7
    * Logical LOC: 2
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 0
    * Halstead volume: 4.754887502163468
    * Halstead effort: 0
* Function: **&lt;anonymous>**
    * Line No.: 21
    * Physical LOC: 7
    * Logical LOC: 2
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 0.875
    * Halstead volume: 18.575424759098897
    * Halstead effort: 16.253496664211536
* Function: **helpers.buildBodyClass**
    * Line No.: 30
    * Physical LOC: 39
    * Logical LOC: 15
    * Parameter count: 3
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 26.666666666666668%
    * Halstead difficulty: 7.555555555555555
    * Halstead volume: 492.41116962671674
    * Halstead effort: 3720.439948290749

## src/middleware/maintenance.js

* Physical LOC: 46
* Logical LOC: 9
* Mean parameter count: 1
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 11.11111111111111%
* Maintainability index: 157.80538018971862
* Dependency count: 6
* Function: **module.exports**
    * Line No.: 10
    * Physical LOC: 37
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.875
    * Halstead volume: 25.26619429851844
    * Halstead effort: 47.374114309722074

## src/middleware/ratelimit.js

* Physical LOC: 32
* Logical LOC: 20
* Mean parameter count: 1
* Cyclomatic complexity: 6
* Cyclomatic complexity density: 30%
* Maintainability index: 96.24619847335936
* Dependency count: 1
* Function: **ratelimit.isFlooding**
    * Line No.: 10
    * Physical LOC: 23
    * Logical LOC: 14
    * Parameter count: 1
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 42.857142857142854%
    * Halstead difficulty: 23.214285714285715
    * Halstead volume: 442.20453770120264
    * Halstead effort: 10265.462482349347

## src/middleware/render.js

* Physical LOC: 137
* Logical LOC: 78
* Mean parameter count: 2.875
* Cyclomatic complexity: 18
* Cyclomatic complexity density: 23.076923076923077%
* Maintainability index: 108.4196493190555
* Dependency count: 8
* Function: **module.exports**
    * Line No.: 15
    * Physical LOC: 123
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 2
    * Halstead volume: 47.548875021634686
    * Halstead effort: 95.09775004326937
* Function: **processRender**
    * Line No.: 16
    * Physical LOC: 87
    * Logical LOC: 3
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 4
    * Halstead volume: 46.50699332842308
    * Halstead effort: 186.0279733136923
* Function: **renderOverride**
    * Line No.: 20
    * Physical LOC: 80
    * Logical LOC: 5
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 1.75
    * Halstead volume: 38.03910001730775
    * Halstead effort: 66.56842503028857
* Function: **renderMethod**
    * Line No.: 23
    * Physical LOC: 70
    * Logical LOC: 38
    * Parameter count: 3
    * Cyclomatic complexity: 12
    * Cyclomatic complexity density: 31.57894736842105%
    * Halstead difficulty: 17
    * Halstead volume: 1397.493398574963
    * Halstead effort: 23757.387775774372
* Function: **renderContent**
    * Line No.: 104
    * Physical LOC: 8
    * Logical LOC: 1
    * Parameter count: 5
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1
    * Halstead volume: 24
    * Halstead effort: 24
* Function: **renderHeaderFooter**
    * Line No.: 113
    * Physical LOC: 11
    * Logical LOC: 9
    * Parameter count: 4
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 5.333333333333333
    * Halstead volume: 117.20671786825557
    * Halstead effort: 625.102495297363
* Function: **getLang**
    * Line No.: 125
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 125%
    * Halstead difficulty: 10.607142857142858
    * Halstead volume: 280.4608412755348
    * Halstead effort: 2974.888209244066
* Function: **translate**
    * Line No.: 133
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3
    * Halstead volume: 36.541209043760986
    * Halstead effort: 109.62362713128296

## src/middleware/uploads.js

* Physical LOC: 28
* Logical LOC: 10
* Mean parameter count: 0
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 10%
* Maintainability index: 163.88830992745497
* Dependency count: 4
* Function: **exports.clearCache**
    * Line No.: 12
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1
    * Halstead volume: 8
    * Halstead effort: 8

## src/middleware/user.js

* Physical LOC: 245
* Logical LOC: 85
* Mean parameter count: 2.4285714285714284
* Cyclomatic complexity: 20
* Cyclomatic complexity density: 23.52941176470588%
* Maintainability index: 106.46610013947063
* Dependency count: 13
* Function: **passportAuthenticateAsync**
    * Line No.: 21
    * Physical LOC: 12
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1
    * Halstead volume: 11.60964047443681
    * Halstead effort: 11.60964047443681
* Function: **module.exports**
    * Line No.: 34
    * Physical LOC: 212
    * Logical LOC: 14
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 7.142857142857142%
    * Halstead difficulty: 5.444444444444445
    * Halstead volume: 432.56486700781784
    * Halstead effort: 2355.0753870425638
* Function: **authenticate**
    * Line No.: 35
    * Physical LOC: 49
    * Logical LOC: 26
    * Parameter count: 2
    * Cyclomatic complexity: 12
    * Cyclomatic complexity density: 46.15384615384615%
    * Halstead difficulty: 17.22222222222222
    * Halstead volume: 695.6089475384601
    * Halstead effort: 11979.93187427348
* Function: **finishLogin**
    * Line No.: 36
    * Physical LOC: 8
    * Logical LOC: 6
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 16.666666666666664%
    * Halstead difficulty: 5.181818181818182
    * Halstead volume: 138.97373660251156
    * Halstead effort: 720.1366351221053
* Function: **ensureSelfOrMethod**
    * Line No.: 114
    * Physical LOC: 18
    * Logical LOC: 8
    * Parameter count: 4
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 8.307692307692308
    * Halstead volume: 228.40050598449557
    * Halstead effort: 1897.481126640425
* Function: **middleware.requireUser**
    * Line No.: 218
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 3
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3.8181818181818183
    * Halstead volume: 98.09910819000817
    * Halstead effort: 374.5602312709403
* Function: **registrationComplete**
    * Line No.: 226
    * Physical LOC: 19
    * Logical LOC: 9
    * Parameter count: 3
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 55.55555555555556%
    * Halstead difficulty: 9.761904761904761
    * Halstead volume: 386.4273122101763
    * Halstead effort: 3772.2666191945777

## src/navigation/index.js

* Physical LOC: 34
* Logical LOC: 13
* Mean parameter count: 1
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 7.6923076923076925%
* Maintainability index: 128.11770347364518
* Dependency count: 5
* Function: **navigation.get**
    * Line No.: 12
    * Physical LOC: 21
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 5.4
    * Halstead volume: 72.64806399138325
    * Halstead effort: 392.2995455534696

## src/plugins/data.js

* Physical LOC: 265
* Logical LOC: 126
* Mean parameter count: 1
* Cyclomatic complexity: 22
* Cyclomatic complexity density: 17.46031746031746%
* Maintainability index: 112.69910816218976
* Dependency count: 9
* Function: **getActiveIds**
    * Line No.: 19
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 0
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 4
    * Halstead volume: 36.49561398674886
    * Halstead effort: 145.98245594699543
* Function: **Data.getPluginPaths**
    * Line No.: 26
    * Physical LOC: 12
    * Logical LOC: 5
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 4.166666666666667
    * Halstead volume: 86.48579046593244
    * Halstead effort: 360.3574602747185
* Function: **Data.loadPluginInfo**
    * Line No.: 39
    * Physical LOC: 29
    * Logical LOC: 15
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 6.666666666666667%
    * Halstead difficulty: 8.0625
    * Halstead volume: 343.3762346350719
    * Halstead effort: 2768.470891745267
* Function: **parseLicense**
    * Line No.: 69
    * Physical LOC: 12
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 5
    * Halstead volume: 72.33974351909447
    * Halstead effort: 361.6987175954723
* Function: **Data.getActive**
    * Line No.: 82
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.5
    * Halstead volume: 8
    * Halstead effort: 12
* Function: **Data.getStaticDirectories**
    * Line No.: 88
    * Physical LOC: 49
    * Logical LOC: 11
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 27.27272727272727%
    * Halstead difficulty: 6.75
    * Halstead volume: 175.69269691115042
    * Halstead effort: 1185.9257041502653
* Function: **processDir**
    * Line No.: 102
    * Physical LOC: 30
    * Logical LOC: 13
    * Parameter count: 1
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 30.76923076923077%
    * Halstead difficulty: 6.611111111111111
    * Halstead volume: 168
    * Halstead effort: 1110.6666666666665
* Function: **Data.getFiles**
    * Line No.: 139
    * Physical LOC: 9
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 75%
    * Halstead difficulty: 5.25
    * Halstead volume: 114.22064766172811
    * Halstead effort: 599.6584002240726
* Function: **resolveModulePath**
    * Line No.: 153
    * Physical LOC: 21
    * Logical LOC: 13
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 30.76923076923077%
    * Halstead difficulty: 7.6923076923076925
    * Halstead volume: 228.40050598449557
    * Halstead effort: 1756.9269691115044
* Function: **getScripts**
    * Line No.: 176
    * Physical LOC: 22
    * Logical LOC: 8
    * Parameter count: 2
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 62.5%
    * Halstead difficulty: 9.307692307692308
    * Halstead volume: 201.7383500317309
    * Halstead effort: 1877.71848875688
* Function: **getModules**
    * Line No.: 200
    * Physical LOC: 37
    * Logical LOC: 12
    * Parameter count: 1
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 41.66666666666667%
    * Halstead difficulty: 8.642857142857142
    * Halstead volume: 340
    * Halstead effort: 2938.5714285714284
* Function: **processModule**
    * Line No.: 224
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 3.75
    * Halstead volume: 55.350905898196764
    * Halstead effort: 207.56589711823787
* Function: **getLanguageData**
    * Line No.: 238
    * Physical LOC: 28
    * Logical LOC: 10
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 10.633333333333333
    * Halstead volume: 277.32594337032447
    * Halstead effort: 2948.8991978377835

## src/plugins/index.js

* Physical LOC: 320
* Logical LOC: 137
* Mean parameter count: 0.9090909090909091
* Cyclomatic complexity: 10
* Cyclomatic complexity density: 7.2992700729927%
* Maintainability index: 112.11029585365415
* Dependency count: 21
* Function: **Plugins.requireLibrary**
    * Line No.: 47
    * Physical LOC: 24
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 3.3333333333333335
    * Halstead volume: 96.21143267166839
    * Halstead effort: 320.70477557222796
* Function: **Plugins.init**
    * Line No.: 72
    * Physical LOC: 21
    * Logical LOC: 11
    * Parameter count: 2
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 45.45454545454545%
    * Halstead difficulty: 4.800000000000001
    * Halstead volume: 184.47733175670794
    * Halstead effort: 885.4911924321982
* Function: **Plugins.reload**
    * Line No.: 94
    * Physical LOC: 55
    * Logical LOC: 26
    * Parameter count: 0
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 11.538461538461538%
    * Halstead difficulty: 13.297297297297298
    * Halstead volume: 859.0506061496269
    * Halstead effort: 11423.05130339504
* Function: **Plugins.reloadRoutes**
    * Line No.: 150
    * Physical LOC: 5
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 2
    * Halstead volume: 41.51317942364757
    * Halstead effort: 83.02635884729514
* Function: **Plugins.get**
    * Line No.: 156
    * Physical LOC: 10
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 5.25
    * Halstead volume: 97.67226489021297
    * Halstead effort: 512.7793906736181
* Function: **Plugins.list**
    * Line No.: 167
    * Physical LOC: 16
    * Logical LOC: 7
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 28.57142857142857%
    * Halstead difficulty: 4.375
    * Halstead volume: 85.95159310338741
    * Halstead effort: 376.0382198273199
* Function: **Plugins.normalise**
    * Line No.: 191
    * Physical LOC: 59
    * Logical LOC: 10
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 8.1
    * Halstead volume: 252.17293753966362
    * Halstead effort: 2042.6007940712752
* Function: **Plugins.showInstalled**
    * Line No.: 253
    * Physical LOC: 23
    * Logical LOC: 6
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 16.666666666666664%
    * Halstead difficulty: 5
    * Halstead volume: 87.56916320732489
    * Halstead effort: 437.84581603662446
* Function: **load**
    * Line No.: 259
    * Physical LOC: 14
    * Logical LOC: 9
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 11.11111111111111%
    * Halstead difficulty: 4.25
    * Halstead volume: 125.0204990594726
    * Halstead effort: 531.3371210027585
* Function: **findNodeBBModules**
    * Line No.: 277
    * Physical LOC: 30
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 2.6666666666666665
    * Halstead volume: 22.458839376460833
    * Halstead effort: 59.89023833722889
* Function: **isDirectory**
    * Line No.: 308
    * Physical LOC: 11
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 3.333333333333333
    * Halstead volume: 27
    * Halstead effort: 89.99999999999999

## src/plugins/install.js

* Physical LOC: 180
* Logical LOC: 105
* Mean parameter count: 1.6666666666666667
* Cyclomatic complexity: 13
* Cyclomatic complexity density: 12.380952380952381%
* Maintainability index: 119.0453826264603
* Dependency count: 13
* Function: **module.exports**
    * Line No.: 43
    * Physical LOC: 138
    * Logical LOC: 16
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 12.5%
    * Halstead difficulty: 5.863636363636363
    * Halstead volume: 399.01045853078114
    * Halstead effort: 2339.6522341123073
* Function: **Plugins.toggleActive**
    * Line No.: 58
    * Physical LOC: 17
    * Logical LOC: 16
    * Parameter count: 1
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 8.863636363636363
    * Halstead volume: 297.4984149828081
    * Halstead effort: 2636.9177691657987
* Function: **Plugins.checkWhitelist**
    * Line No.: 76
    * Physical LOC: 13
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 75%
    * Halstead difficulty: 8
    * Halstead volume: 142.7018117963935
    * Halstead effort: 1141.614494371148
* Function: **Plugins.suggest**
    * Line No.: 90
    * Physical LOC: 8
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 2
    * Halstead volume: 18.094737505048094
    * Halstead effort: 36.18947501009619
* Function: **Plugins.toggleInstall**
    * Line No.: 99
    * Physical LOC: 4
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 4.0625
    * Halstead volume: 81.40967379910403
    * Halstead effort: 330.7267998088601
* Function: **toggleInstall**
    * Line No.: 106
    * Physical LOC: 14
    * Logical LOC: 10
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 30%
    * Halstead difficulty: 6.375
    * Halstead volume: 140.55415752892034
    * Halstead effort: 896.0327542468672
* Function: **runPackageManagerCommand**
    * Line No.: 121
    * Physical LOC: 14
    * Logical LOC: 1
    * Parameter count: 4
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 200%
    * Halstead difficulty: 3.6923076923076925
    * Halstead volume: 101.95026032264605
    * Halstead effort: 376.43173042207775
* Function: **Plugins.upgrade**
    * Line No.: 137
    * Physical LOC: 4
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 4.0625
    * Halstead volume: 81.40967379910403
    * Halstead effort: 330.7267998088601
* Function: **upgrade**
    * Line No.: 142
    * Physical LOC: 6
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 2.8
    * Halstead volume: 38.03910001730775
    * Halstead effort: 106.5094800484617
* Function: **Plugins.isInstalled**
    * Line No.: 149
    * Physical LOC: 9
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 3.125
    * Halstead volume: 74.00879436282185
    * Halstead effort: 231.27748238381827
* Function: **Plugins.isActive**
    * Line No.: 159
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 3.6
    * Halstead volume: 57.058650025961626
    * Halstead effort: 205.41114009346185
* Function: **Plugins.getActive**
    * Line No.: 166
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 0
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 4
    * Halstead volume: 36.49561398674886
    * Halstead effort: 145.98245594699543

## src/plugins/load.js

* Physical LOC: 171
* Logical LOC: 89
* Mean parameter count: 1.0625
* Cyclomatic complexity: 11
* Cyclomatic complexity density: 12.359550561797752%
* Maintainability index: 119.65153584397208
* Dependency count: 7
* Function: **module.exports**
    * Line No.: 12
    * Physical LOC: 160
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 2.142857142857143
    * Halstead volume: 63.11663380285989
    * Halstead effort: 135.24992957755688
* Function: **registerPluginAssets**
    * Line No.: 13
    * Physical LOC: 57
    * Logical LOC: 28
    * Parameter count: 2
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 17.857142857142858%
    * Halstead difficulty: 19.25
    * Halstead volume: 1034.00753689129
    * Halstead effort: 19904.645085157335
* Function: **add**
    * Line No.: 14
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.3333333333333333
    * Halstead volume: 13.931568569324174
    * Halstead effort: 18.575424759098897
* Function: **staticDirs**
    * Line No.: 19
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.2
    * Halstead volume: 25.26619429851844
    * Halstead effort: 30.319433158222125
* Function: **cssFiles**
    * Line No.: 22
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.1666666666666667
    * Halstead volume: 30
    * Halstead effort: 35
* Function: **lessFiles**
    * Line No.: 25
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.1666666666666667
    * Halstead volume: 30
    * Halstead effort: 35
* Function: **acpLessFiles**
    * Line No.: 28
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.1666666666666667
    * Halstead volume: 30
    * Halstead effort: 35
* Function: **clientScripts**
    * Line No.: 31
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.1666666666666667
    * Halstead volume: 30
    * Halstead effort: 35
* Function: **acpScripts**
    * Line No.: 34
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.1666666666666667
    * Halstead volume: 30
    * Halstead effort: 35
* Function: **modules**
    * Line No.: 37
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.2
    * Halstead volume: 25.26619429851844
    * Halstead effort: 30.319433158222125
* Function: **languageData**
    * Line No.: 40
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.2
    * Halstead volume: 25.26619429851844
    * Halstead effort: 30.319433158222125
* Function: **Plugins.prepareForBuild**
    * Line No.: 71
    * Physical LOC: 35
    * Logical LOC: 13
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 7.6923076923076925%
    * Halstead difficulty: 5.115384615384615
    * Halstead volume: 337.9744059970164
    * Halstead effort: 1728.8690768308913
* Function: **Plugins.loadPlugin**
    * Line No.: 107
    * Physical LOC: 33
    * Logical LOC: 12
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 16.666666666666664%
    * Halstead difficulty: 6.461538461538462
    * Halstead volume: 166.9080620655929
    * Halstead effort: 1078.4828625776772
* Function: **checkVersion**
    * Line No.: 141
    * Physical LOC: 15
    * Logical LOC: 6
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 7.700000000000001
    * Halstead volume: 179.84836501501496
    * Halstead effort: 1384.8324106156153
* Function: **add**
    * Line No.: 142
    * Physical LOC: 5
    * Logical LOC: 2
    * Parameter count: 0
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 3.3333333333333335
    * Halstead volume: 66.43856189774725
    * Halstead effort: 221.46187299249084
* Function: **registerHooks**
    * Line No.: 157
    * Physical LOC: 14
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 60%
    * Halstead difficulty: 3.3333333333333335
    * Halstead volume: 107.31275182609167
    * Halstead effort: 357.70917275363894

## src/plugins/usage.js

* Physical LOC: 48
* Logical LOC: 23
* Mean parameter count: 0.5
* Cyclomatic complexity: 5
* Cyclomatic complexity density: 21.73913043478261%
* Maintainability index: 127.45377726118357
* Dependency count: 7
* Function: **module.exports**
    * Line No.: 13
    * Physical LOC: 36
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 2.625
    * Halstead volume: 36.49561398674886
    * Halstead effort: 95.80098671521576
* Function: **Plugins.startJobs**
    * Line No.: 14
    * Physical LOC: 5
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 11.60964047443681
    * Halstead effort: 5.804820237218405
* Function: **Plugins.submitUsageData**
    * Line No.: 20
    * Physical LOC: 28
    * Logical LOC: 11
    * Parameter count: 1
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 45.45454545454545%
    * Halstead difficulty: 8
    * Halstead volume: 415.2084415539646
    * Halstead effort: 3321.6675324317166
* Function: **&lt;anonymous>**
    * Line No.: 21
    * Physical LOC: 1
    * Logical LOC: 0
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: Infinity%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0

## src/posts/bookmarks.js

* Physical LOC: 85
* Logical LOC: 58
* Mean parameter count: 1.2941176470588236
* Cyclomatic complexity: 15
* Cyclomatic complexity density: 25.862068965517242%
* Maintainability index: 132.7240095189398
* Dependency count: 2
* Function: **&lt;anonymous>**
    * Line No.: 3
    * Physical LOC: 9
    * Logical LOC: 2
    * Parameter count: 4
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 3.2142857142857144
    * Halstead volume: 53.77443751081735
    * Halstead effort: 172.84640628477007
* Function: **adopt**
    * Line No.: 4
    * Physical LOC: 1
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 200%
    * Halstead difficulty: 5
    * Halstead volume: 33
    * Halstead effort: 165
* Function: **&lt;anonymous>**
    * Line No.: 4
    * Physical LOC: 1
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.75
    * Halstead volume: 6.339850002884624
    * Halstead effort: 4.754887502163468
* Function: **&lt;anonymous>**
    * Line No.: 5
    * Physical LOC: 6
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3.545454545454546
    * Halstead volume: 98.09910819000817
    * Halstead effort: 347.8059290373017
* Function: **fulfilled**
    * Line No.: 6
    * Physical LOC: 1
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.25
    * Halstead volume: 20.67970000576925
    * Halstead effort: 25.84962500721156
* Function: **rejected**
    * Line No.: 7
    * Physical LOC: 1
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.25
    * Halstead volume: 20.67970000576925
    * Halstead effort: 25.84962500721156
* Function: **step**
    * Line No.: 8
    * Physical LOC: 1
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 200%
    * Halstead difficulty: 2.25
    * Halstead volume: 69.18863237274596
    * Halstead effort: 155.6744228386784
* Function: **&lt;anonymous>**
    * Line No.: 12
    * Physical LOC: 3
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 6
    * Halstead volume: 46.50699332842308
    * Halstead effort: 279.04195997053847
* Function: **module.exports**
    * Line No.: 17
    * Physical LOC: 69
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 2.75
    * Halstead volume: 66.56842503028857
    * Halstead effort: 183.06316883329356
* Function: **toggleBookmark**
    * Line No.: 18
    * Physical LOC: 41
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 2.2857142857142856
    * Halstead volume: 44.97261104228487
    * Halstead effort: 102.79453952522255
* Function: **&lt;anonymous>**
    * Line No.: 19
    * Physical LOC: 39
    * Logical LOC: 19
    * Parameter count: 0
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 26.31578947368421%
    * Halstead difficulty: 11.029411764705884
    * Halstead volume: 265
    * Halstead effort: 2922.7941176470595
* Function: **Posts.bookmark**
    * Line No.: 59
    * Physical LOC: 5
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 2.3333333333333335
    * Halstead volume: 39.863137138648355
    * Halstead effort: 93.01398665684617
* Function: **&lt;anonymous>**
    * Line No.: 60
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **Posts.unbookmark**
    * Line No.: 64
    * Physical LOC: 5
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 2.3333333333333335
    * Halstead volume: 39.863137138648355
    * Halstead effort: 93.01398665684617
* Function: **&lt;anonymous>**
    * Line No.: 65
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **Posts.hasBookmarked**
    * Line No.: 69
    * Physical LOC: 16
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 2.3333333333333335
    * Halstead volume: 39.863137138648355
    * Halstead effort: 93.01398665684617
* Function: **&lt;anonymous>**
    * Line No.: 70
    * Physical LOC: 14
    * Logical LOC: 8
    * Parameter count: 0
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 7.2727272727272725
    * Halstead volume: 178.41295556463058
    * Halstead effort: 1297.5487677427677

## src/posts/cache.js

* Physical LOC: 12
* Logical LOC: 10
* Mean parameter count: 1
* Cyclomatic complexity: 2
* Cyclomatic complexity density: 20%
* Maintainability index: 158.56698845652102
* Dependency count: 2
* Function: **sizeCalculation**
    * Line No.: 9
    * Physical LOC: 1
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 200%
    * Halstead difficulty: 2
    * Halstead volume: 18.094737505048094
    * Halstead effort: 36.18947501009619

## src/posts/category.js

* Physical LOC: 40
* Logical LOC: 25
* Mean parameter count: 1.4
* Cyclomatic complexity: 4
* Cyclomatic complexity density: 16%
* Maintainability index: 128.4336772812024
* Dependency count: 3
* Function: **module.exports**
    * Line No.: 10
    * Physical LOC: 32
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 2.75
    * Halstead volume: 66.56842503028857
    * Halstead effort: 183.06316883329356
* Function: **Posts.getCidByPid**
    * Line No.: 11
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.5
    * Halstead volume: 11.60964047443681
    * Halstead effort: 17.414460711655217
* Function: **Posts.getCidsByPids**
    * Line No.: 16
    * Physical LOC: 8
    * Logical LOC: 6
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 16.666666666666664%
    * Halstead difficulty: 3.958333333333333
    * Halstead volume: 163.4985136500136
    * Halstead effort: 647.1816165313038
* Function: **Posts.filterPidsByCid**
    * Line No.: 25
    * Physical LOC: 11
    * Logical LOC: 6
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 6.5
    * Halstead volume: 120.92782504182705
    * Halstead effort: 786.0308627718758
* Function: **filterPidsBySingleCid**
    * Line No.: 37
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3.125
    * Halstead volume: 31.699250014423125
    * Halstead effort: 99.06015629507226

## src/posts/create.js

* Physical LOC: 83
* Logical LOC: 49
* Mean parameter count: 1.3333333333333333
* Cyclomatic complexity: 9
* Cyclomatic complexity density: 18.367346938775512%
* Maintainability index: 99.45983796693238
* Dependency count: 9
* Function: **module.exports**
    * Line No.: 14
    * Physical LOC: 70
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.875
    * Halstead volume: 25.26619429851844
    * Halstead effort: 47.374114309722074
* Function: **Posts.create**
    * Line No.: 15
    * Physical LOC: 58
    * Logical LOC: 33
    * Parameter count: 1
    * Cyclomatic complexity: 8
    * Cyclomatic complexity density: 24.242424242424242%
    * Halstead difficulty: 19.054054054054053
    * Halstead volume: 1043.18046841982
    * Halstead effort: 19876.817033404677
* Function: **addReplyTo**
    * Line No.: 74
    * Physical LOC: 9
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 2.6666666666666665
    * Halstead volume: 22.458839376460833
    * Halstead effort: 59.89023833722889

## src/posts/delete.js

* Physical LOC: 232
* Logical LOC: 100
* Mean parameter count: 1.4285714285714286
* Cyclomatic complexity: 4
* Cyclomatic complexity density: 4%
* Maintainability index: 118.05864763488215
* Dependency count: 8
* Function: **module.exports**
    * Line No.: 13
    * Physical LOC: 220
    * Logical LOC: 13
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 7.6923076923076925%
    * Halstead difficulty: 2
    * Halstead volume: 162.62707505625016
    * Halstead effort: 325.2541501125003
* Function: **Posts.delete**
    * Line No.: 14
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **Posts.restore**
    * Line No.: 18
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **deleteOrRestore**
    * Line No.: 22
    * Physical LOC: 24
    * Logical LOC: 14
    * Parameter count: 3
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 14.285714285714285%
    * Halstead difficulty: 7.5
    * Halstead volume: 210.90827503317323
    * Halstead effort: 1581.8120627487992
* Function: **Posts.purge**
    * Line No.: 47
    * Physical LOC: 49
    * Logical LOC: 19
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 15.789473684210526%
    * Halstead difficulty: 11.25
    * Halstead volume: 444.61355012403885
    * Halstead effort: 5001.902438895437
* Function: **deleteFromTopicUserNotification**
    * Line No.: 97
    * Physical LOC: 49
    * Logical LOC: 11
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 9.090909090909092%
    * Halstead difficulty: 7.2
    * Halstead volume: 257.84303149524976
    * Halstead effort: 1856.4698267657984
* Function: **deleteFromCategoryRecentPosts**
    * Line No.: 147
    * Physical LOC: 6
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 3
    * Halstead volume: 63.11663380285989
    * Halstead effort: 189.34990140857965
* Function: **deleteFromUsersBookmarks**
    * Line No.: 154
    * Physical LOC: 11
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 3
    * Halstead volume: 43.18506523353572
    * Halstead effort: 129.55519570060716
* Function: **deleteFromUsersVotes**
    * Line No.: 166
    * Physical LOC: 23
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 3.125
    * Halstead volume: 38.03910001730775
    * Halstead effort: 118.87218755408672
* Function: **deleteFromReplies**
    * Line No.: 190
    * Physical LOC: 19
    * Logical LOC: 10
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 10%
    * Halstead difficulty: 4.375
    * Halstead volume: 339.0015018535549
    * Halstead effort: 1483.1315706093026
* Function: **deleteFromGroups**
    * Line No.: 210
    * Physical LOC: 5
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 2.5
    * Halstead volume: 33
    * Halstead effort: 82.5
* Function: **deleteDiffs**
    * Line No.: 216
    * Physical LOC: 7
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1
    * Halstead volume: 8
    * Halstead effort: 8
* Function: **deleteFromUploads**
    * Line No.: 224
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **resolveFlags**
    * Line No.: 228
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 2.5
    * Halstead volume: 27
    * Halstead effort: 67.5

## src/posts/diffs.js

* Physical LOC: 175
* Logical LOC: 94
* Mean parameter count: 2
* Cyclomatic complexity: 20
* Cyclomatic complexity density: 21.27659574468085%
* Maintainability index: 109.11769204873313
* Dependency count: 7
* Function: **module.exports**
    * Line No.: 12
    * Physical LOC: 164
    * Logical LOC: 12
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 8.333333333333332%
    * Halstead difficulty: 5.357142857142857
    * Halstead volume: 250.62772329317153
    * Halstead effort: 1342.6485176419903
* Function: **Diffs.exists**
    * Line No.: 15
    * Physical LOC: 8
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 4
    * Halstead volume: 68.53238859703687
    * Halstead effort: 274.1295543881475
* Function: **Diffs.get**
    * Line No.: 24
    * Physical LOC: 11
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 5
    * Halstead volume: 83.76180828526728
    * Halstead effort: 418.8090414263364
* Function: **Diffs.list**
    * Line No.: 36
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1
* Function: **Diffs.save**
    * Line No.: 40
    * Physical LOC: 21
    * Logical LOC: 12
    * Parameter count: 1
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 41.66666666666667%
    * Halstead difficulty: 7.241379310344827
    * Halstead volume: 422.8321775089799
    * Halstead effort: 3061.8881819615785
* Function: **Diffs.load**
    * Line No.: 62
    * Physical LOC: 9
    * Logical LOC: 6
    * Parameter count: 3
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 6
    * Halstead volume: 183.47670006346175
    * Halstead effort: 1100.8602003807705
* Function: **Diffs.restore**
    * Line No.: 72
    * Physical LOC: 14
    * Logical LOC: 3
    * Parameter count: 4
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 2.6666666666666665
    * Halstead volume: 43.18506523353572
    * Halstead effort: 115.16017395609524
* Function: **Diffs.delete**
    * Line No.: 87
    * Physical LOC: 45
    * Logical LOC: 23
    * Parameter count: 3
    * Cyclomatic complexity: 8
    * Cyclomatic complexity density: 34.78260869565217%
    * Halstead difficulty: 29.135135135135137
    * Halstead volume: 1105.9368932800262
    * Halstead effort: 32221.62083664509
* Function: **postDiffLoad**
    * Line No.: 133
    * Physical LOC: 22
    * Logical LOC: 10
    * Parameter count: 3
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 30%
    * Halstead difficulty: 9.91304347826087
    * Halstead volume: 559.824183073717
    * Halstead effort: 5549.5614669916295
* Function: **getValidatedTimestamp**
    * Line No.: 156
    * Physical LOC: 9
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 5
    * Halstead volume: 60.94436251225966
    * Halstead effort: 304.7218125612983
* Function: **applyPatch**
    * Line No.: 166
    * Physical LOC: 9
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 60%
    * Halstead difficulty: 11.399999999999999
    * Halstead volume: 151.6206750336681
    * Halstead effort: 1728.4756953838162

## src/posts/index.js

* Physical LOC: 104
* Logical LOC: 74
* Mean parameter count: 2.5714285714285716
* Cyclomatic complexity: 20
* Cyclomatic complexity density: 27.027027027027028%
* Maintainability index: 116.48799543222447
* Dependency count: 23
* Function: **Posts.exists**
    * Line No.: 30
    * Physical LOC: 5
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1
* Function: **Posts.getPidsFromSet**
    * Line No.: 36
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 4
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 3.75
    * Halstead volume: 55.350905898196764
    * Halstead effort: 207.56589711823787
* Function: **Posts.getPostsByPids**
    * Line No.: 43
    * Physical LOC: 12
    * Logical LOC: 8
    * Parameter count: 2
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 62.5%
    * Halstead difficulty: 10.5
    * Halstead volume: 207.45254855459342
    * Halstead effort: 2178.2517598232307
* Function: **Posts.getPostSummariesFromSet**
    * Line No.: 56
    * Physical LOC: 6
    * Logical LOC: 6
    * Parameter count: 4
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 16.666666666666664%
    * Halstead difficulty: 5.055555555555555
    * Halstead volume: 92
    * Halstead effort: 465.1111111111111
* Function: **Posts.getPidIndex**
    * Line No.: 63
    * Physical LOC: 9
    * Logical LOC: 6
    * Parameter count: 3
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 83.33333333333334%
    * Halstead difficulty: 9.428571428571429
    * Halstead volume: 213.6173847296373
    * Halstead effort: 2014.106770308009
* Function: **Posts.getPostIndices**
    * Line No.: 73
    * Physical LOC: 21
    * Logical LOC: 14
    * Parameter count: 2
    * Cyclomatic complexity: 7
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 10.846153846153847
    * Halstead volume: 503.8010412905842
    * Halstead effort: 5464.303601690182
* Function: **Posts.modifyPostByPrivilege**
    * Line No.: 95
    * Physical LOC: 8
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 5.4
    * Halstead volume: 132
    * Halstead effort: 712.8000000000001

## src/posts/recent.js

* Physical LOC: 33
* Logical LOC: 21
* Mean parameter count: 2.3333333333333335
* Cyclomatic complexity: 3
* Cyclomatic complexity density: 14.285714285714285%
* Maintainability index: 120.33272497103584
* Dependency count: 3
* Function: **module.exports**
    * Line No.: 9
    * Physical LOC: 25
    * Logical LOC: 6
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 16.666666666666664%
    * Halstead difficulty: 4.090909090909091
    * Halstead volume: 110.36149671375918
    * Halstead effort: 451.4788501926512
* Function: **Posts.getRecentPosts**
    * Line No.: 16
    * Physical LOC: 11
    * Logical LOC: 7
    * Parameter count: 4
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 42.857142857142854%
    * Halstead difficulty: 10.285714285714285
    * Halstead volume: 211.51978731634918
    * Halstead effort: 2175.63209811102
* Function: **Posts.getRecentPosterUids**
    * Line No.: 28
    * Physical LOC: 5
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 2.8125
    * Halstead volume: 74.00879436282185
    * Halstead effort: 208.14973414543644

## src/posts/summary.js

* Physical LOC: 104
* Logical LOC: 50
* Mean parameter count: 1.6666666666666667
* Cyclomatic complexity: 8
* Cyclomatic complexity density: 16%
* Maintainability index: 113.75548187022517
* Dependency count: 7
* Function: **module.exports**
    * Line No.: 13
    * Physical LOC: 93
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 1.7142857142857142
    * Halstead volume: 49.82892142331044
    * Halstead effort: 85.42100815424646
* Function: **Posts.getPostSummaryByPids**
    * Line No.: 14
    * Physical LOC: 49
    * Logical LOC: 21
    * Parameter count: 3
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 28.57142857142857%
    * Halstead difficulty: 10.180851063829786
    * Halstead volume: 948.9929212106666
    * Halstead effort: 9661.555591474553
* Function: **parsePosts**
    * Line No.: 64
    * Physical LOC: 13
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **getTopicAndCategories**
    * Line No.: 78
    * Physical LOC: 12
    * Logical LOC: 6
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 16.666666666666664%
    * Halstead difficulty: 4.55
    * Halstead volume: 110.36149671375918
    * Halstead effort: 502.14481004760427
* Function: **toObject**
    * Line No.: 91
    * Physical LOC: 7
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 10.125
    * Halstead volume: 134.8862737612612
    * Halstead effort: 1365.7235218327696
* Function: **stripTags**
    * Line No.: 99
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 4
    * Halstead volume: 42
    * Halstead effort: 168

## src/posts/tools.js

* Physical LOC: 44
* Logical LOC: 27
* Mean parameter count: 2
* Cyclomatic complexity: 6
* Cyclomatic complexity density: 22.22222222222222%
* Maintainability index: 118.11738016473925
* Dependency count: 2
* Function: **module.exports**
    * Line No.: 5
    * Physical LOC: 40
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 4.333333333333333
    * Halstead volume: 83.04820237218406
    * Halstead effort: 359.87554361279757
* Function: **&lt;anonymous>.delete**
    * Line No.: 8
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **&lt;anonymous>.restore**
    * Line No.: 12
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **togglePostDelete**
    * Line No.: 16
    * Physical LOC: 28
    * Logical LOC: 18
    * Parameter count: 3
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 11.625
    * Halstead volume: 317.28542485580186
    * Halstead effort: 3688.443063948697

## src/posts/topics.js

* Physical LOC: 53
* Logical LOC: 28
* Mean parameter count: 2.1666666666666665
* Cyclomatic complexity: 4
* Cyclomatic complexity density: 14.285714285714285%
* Maintainability index: 128.88757981910487
* Dependency count: 3
* Function: **module.exports**
    * Line No.: 8
    * Physical LOC: 47
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 3.4285714285714284
    * Halstead volume: 102.97977094150824
    * Halstead effort: 353.07350037088537
* Function: **Posts.getPostsFromSet**
    * Line No.: 9
    * Physical LOC: 5
    * Logical LOC: 3
    * Parameter count: 5
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 1.5
    * Halstead volume: 39.863137138648355
    * Halstead effort: 59.79470570797253
* Function: **Posts.isMain**
    * Line No.: 15
    * Physical LOC: 8
    * Logical LOC: 6
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 7.388888888888889
    * Halstead volume: 148
    * Halstead effort: 1093.5555555555557
* Function: **Posts.getTopicFields**
    * Line No.: 24
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.5
    * Halstead volume: 15.509775004326936
    * Halstead effort: 23.264662506490403
* Function: **Posts.generatePostPath**
    * Line No.: 29
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 4.8125
    * Halstead volume: 78.13781191217038
    * Halstead effort: 376.03821982731995
* Function: **Posts.generatePostPaths**
    * Line No.: 34
    * Physical LOC: 20
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 4.166666666666667
    * Halstead volume: 79.56692722865785
    * Halstead effort: 331.52886345274106

## src/posts/user.js

* Physical LOC: 261
* Logical LOC: 101
* Mean parameter count: 1.7857142857142858
* Cyclomatic complexity: 15
* Cyclomatic complexity density: 14.85148514851485%
* Maintainability index: 116.99939491714291
* Dependency count: 10
* Function: **module.exports**
    * Line No.: 15
    * Physical LOC: 247
    * Logical LOC: 13
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 7.6923076923076925%
    * Halstead difficulty: 2.4000000000000004
    * Halstead volume: 195.98647506778866
    * Halstead effort: 470.3675401626929
* Function: **Posts.getUserInfoForPosts**
    * Line No.: 16
    * Physical LOC: 41
    * Logical LOC: 7
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 14.285714285714285%
    * Halstead difficulty: 3.25
    * Halstead volume: 125.09775004326937
    * Halstead effort: 406.5676876406255
* Function: **Posts.overrideGuestHandle**
    * Line No.: 58
    * Physical LOC: 9
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 60%
    * Halstead difficulty: 6.166666666666666
    * Halstead volume: 311.7774500490387
    * Halstead effort: 1922.6276086357384
* Function: **checkGroupMembership**
    * Line No.: 68
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 4
    * Halstead volume: 60.94436251225966
    * Halstead effort: 243.77745004903863
* Function: **parseSignature**
    * Line No.: 75
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 3
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 6.8
    * Halstead volume: 141.7774500490386
    * Halstead effort: 964.0866603334625
* Function: **getGroupsMap**
    * Line No.: 83
    * Physical LOC: 18
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 4.199999999999999
    * Halstead volume: 120
    * Halstead effort: 503.9999999999999
* Function: **getUserData**
    * Line No.: 102
    * Physical LOC: 14
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 2
    * Halstead volume: 119.20902501875008
    * Halstead effort: 238.41805003750017
* Function: **Posts.isOwner**
    * Line No.: 117
    * Physical LOC: 11
    * Logical LOC: 8
    * Parameter count: 2
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 62.5%
    * Halstead difficulty: 10.875
    * Halstead volume: 232.7928234072743
    * Halstead effort: 2531.621954554108
* Function: **Posts.isModerator**
    * Line No.: 129
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 4.5
    * Halstead volume: 68.53238859703687
    * Halstead effort: 308.3957486866659
* Function: **Posts.changeOwner**
    * Line No.: 137
    * Physical LOC: 53
    * Logical LOC: 18
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 11.11111111111111%
    * Halstead difficulty: 10.173913043478262
    * Halstead volume: 382.5744501067311
    * Halstead effort: 3892.2791880423947
* Function: **reduceCounters**
    * Line No.: 191
    * Physical LOC: 9
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **updateTopicPosters**
    * Line No.: 201
    * Physical LOC: 10
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 2.4
    * Halstead volume: 31.699250014423125
    * Halstead effort: 76.07820003461549
* Function: **handleMainPidOwnerChange**
    * Line No.: 212
    * Physical LOC: 39
    * Logical LOC: 15
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 13.333333333333334%
    * Halstead difficulty: 8.333333333333334
    * Halstead volume: 422.2594158237782
    * Halstead effort: 3518.828465198152
* Function: **reduceTopicCounts**
    * Line No.: 252
    * Physical LOC: 9
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0

## src/posts/votes.js

* Physical LOC: 293
* Logical LOC: 177
* Mean parameter count: 2.4444444444444446
* Cyclomatic complexity: 39
* Cyclomatic complexity density: 22.033898305084744%
* Maintainability index: 108.94151116643542
* Dependency count: 8
* Function: **module.exports**
    * Line No.: 12
    * Physical LOC: 282
    * Logical LOC: 18
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 5.555555555555555%
    * Halstead difficulty: 4.473684210526316
    * Halstead volume: 311.7774500490387
    * Halstead effort: 1394.7938554825416
* Function: **Posts.upvote**
    * Line No.: 15
    * Physical LOC: 20
    * Logical LOC: 10
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 7.125
    * Halstead volume: 158.12342722003538
    * Halstead effort: 1126.6294189427522
* Function: **Posts.downvote**
    * Line No.: 36
    * Physical LOC: 24
    * Logical LOC: 12
    * Parameter count: 2
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 41.66666666666667%
    * Halstead difficulty: 7.7142857142857135
    * Halstead volume: 208.0838499786226
    * Halstead effort: 1605.21827126366
* Function: **Posts.unvote**
    * Line No.: 61
    * Physical LOC: 13
    * Logical LOC: 6
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 5.5
    * Halstead volume: 72.33974351909447
    * Halstead effort: 397.8685893550196
* Function: **Posts.hasVoted**
    * Line No.: 75
    * Physical LOC: 7
    * Logical LOC: 8
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 7.7727272727272725
    * Halstead volume: 146.94555522617034
    * Halstead effort: 1142.1677247125058
* Function: **Posts.getVoteStatusByPostIDs**
    * Line No.: 83
    * Physical LOC: 13
    * Logical LOC: 11
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 18.181818181818183%
    * Halstead difficulty: 12
    * Halstead volume: 320.426077094456
    * Halstead effort: 3845.112925133472
* Function: **Posts.getUpvotedUidsByPids**
    * Line No.: 97
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1
* Function: **voteInProgress**
    * Line No.: 101
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 3
    * Halstead volume: 75.28421251514429
    * Halstead effort: 225.85263754543286
* Function: **putVoteInProgress**
    * Line No.: 105
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 4.642857142857143
    * Halstead volume: 78.86917501586544
    * Halstead effort: 366.178312573661
* Function: **clearVoteProgress**
    * Line No.: 110
    * Physical LOC: 8
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 75%
    * Halstead difficulty: 6.363636363636363
    * Halstead volume: 150.11730005192322
    * Halstead effort: 955.2919094213296
* Function: **toggleVote**
    * Line No.: 119
    * Physical LOC: 5
    * Logical LOC: 3
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 1.5
    * Halstead volume: 19.651484454403228
    * Halstead effort: 29.47722668160484
* Function: **unvote**
    * Line No.: 125
    * Physical LOC: 16
    * Logical LOC: 8
    * Parameter count: 4
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 75%
    * Halstead difficulty: 10.153846153846153
    * Halstead volume: 204.32967235008786
    * Halstead effort: 2074.7320577085843
* Function: **checkVoteLimitation**
    * Line No.: 142
    * Physical LOC: 27
    * Logical LOC: 13
    * Parameter count: 3
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 38.46153846153847%
    * Halstead difficulty: 9.0625
    * Halstead volume: 305.528581679171
    * Halstead effort: 2768.852771467487
* Function: **vote**
    * Line No.: 170
    * Physical LOC: 36
    * Logical LOC: 23
    * Parameter count: 5
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 21.73913043478261%
    * Halstead difficulty: 14.26086956521739
    * Halstead volume: 417.54677529011764
    * Halstead effort: 5954.580099789503
* Function: **fireVoteHook**
    * Line No.: 207
    * Physical LOC: 18
    * Logical LOC: 11
    * Parameter count: 5
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 27.27272727272727%
    * Halstead difficulty: 8.205882352941176
    * Halstead volume: 239.7224256251957
    * Halstead effort: 1967.134022042047
* Function: **adjustPostVotes**
    * Line No.: 226
    * Physical LOC: 18
    * Logical LOC: 11
    * Parameter count: 4
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 27.27272727272727%
    * Halstead difficulty: 8.8
    * Halstead volume: 162.62707505625016
    * Halstead effort: 1431.1182604950016
* Function: **Posts.updatePostVoteCount**
    * Line No.: 245
    * Physical LOC: 21
    * Logical LOC: 11
    * Parameter count: 1
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 45.45454545454545%
    * Halstead difficulty: 9.176470588235295
    * Halstead volume: 260.0652015672515
    * Halstead effort: 2386.480673205367
* Function: **updateTopicVoteCount**
    * Line No.: 267
    * Physical LOC: 26
    * Logical LOC: 14
    * Parameter count: 1
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 35.714285714285715%
    * Halstead difficulty: 12.857142857142858
    * Halstead volume: 423.72910602611006
    * Halstead effort: 5447.94564890713

## src/privileges/admin.js

* Physical LOC: 211
* Logical LOC: 121
* Mean parameter count: 1.5
* Cyclomatic complexity: 5
* Cyclomatic complexity density: 4.132231404958678%
* Maintainability index: 124.54283395697014
* Dependency count: 6
* Function: **privsAdmin.list**
    * Line No.: 129
    * Physical LOC: 32
    * Logical LOC: 15
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 13.333333333333334%
    * Halstead difficulty: 9
    * Halstead volume: 388.6384796102058
    * Halstead effort: 3497.746316491852
* Function: **privsAdmin.get**
    * Line No.: 162
    * Physical LOC: 13
    * Logical LOC: 6
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 16.666666666666664%
    * Halstead difficulty: 3.25
    * Halstead volume: 109.39293667703852
    * Halstead effort: 355.5270442003752
* Function: **privsAdmin.can**
    * Line No.: 176
    * Physical LOC: 7
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 2.5
    * Halstead volume: 33.219280948873624
    * Halstead effort: 83.04820237218406
* Function: **privsAdmin.canGroup**
    * Line No.: 184
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **privsAdmin.give**
    * Line No.: 188
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 4.800000000000001
    * Halstead volume: 104
    * Halstead effort: 499.20000000000005
* Function: **privsAdmin.rescind**
    * Line No.: 196
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 4.800000000000001
    * Halstead volume: 104
    * Halstead effort: 499.20000000000005
* Function: **privsAdmin.userPrivileges**
    * Line No.: 204
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.5
    * Halstead volume: 11.60964047443681
    * Halstead effort: 17.414460711655217
* Function: **privsAdmin.groupPrivileges**
    * Line No.: 209
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.5
    * Halstead volume: 11.60964047443681
    * Halstead effort: 17.414460711655217

## src/privileges/global.js

* Physical LOC: 135
* Logical LOC: 69
* Mean parameter count: 1.3
* Cyclomatic complexity: 4
* Cyclomatic complexity density: 5.797101449275362%
* Maintainability index: 133.587350957844
* Dependency count: 7
* Function: **privsGlobal.list**
    * Line No.: 55
    * Physical LOC: 26
    * Logical LOC: 7
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 14.285714285714285%
    * Halstead difficulty: 6.300000000000001
    * Halstead volume: 164
    * Halstead effort: 1033.2
* Function: **getLabels**
    * Line No.: 56
    * Physical LOC: 7
    * Logical LOC: 2
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 2.5
    * Halstead volume: 51.89147427955947
    * Halstead effort: 129.72868569889866
* Function: **privsGlobal.get**
    * Line No.: 82
    * Physical LOC: 12
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 3.125
    * Halstead volume: 85.11011351724513
    * Halstead effort: 265.969104741391
* Function: **privsGlobal.can**
    * Line No.: 95
    * Physical LOC: 7
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 2.5
    * Halstead volume: 33.219280948873624
    * Halstead effort: 83.04820237218406
* Function: **privsGlobal.canGroup**
    * Line No.: 103
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **privsGlobal.filterUids**
    * Line No.: 107
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 2
    * Halstead volume: 28.529325012980813
    * Halstead effort: 57.058650025961626
* Function: **privsGlobal.give**
    * Line No.: 112
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 4.800000000000001
    * Halstead volume: 104
    * Halstead effort: 499.20000000000005
* Function: **privsGlobal.rescind**
    * Line No.: 120
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 4.800000000000001
    * Halstead volume: 104
    * Halstead effort: 499.20000000000005
* Function: **privsGlobal.userPrivileges**
    * Line No.: 128
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.5
    * Halstead volume: 11.60964047443681
    * Halstead effort: 17.414460711655217
* Function: **privsGlobal.groupPrivileges**
    * Line No.: 133
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.5
    * Halstead volume: 11.60964047443681
    * Halstead effort: 17.414460711655217

## src/privileges/helpers.js

* Physical LOC: 191
* Logical LOC: 94
* Mean parameter count: 2.769230769230769
* Cyclomatic complexity: 15
* Cyclomatic complexity density: 15.957446808510639%
* Maintainability index: 120.09400891829875
* Dependency count: 7
* Function: **helpers.isUsersAllowedTo**
    * Line No.: 19
    * Physical LOC: 9
    * Logical LOC: 4
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 3.75
    * Halstead volume: 65.72920075410866
    * Halstead effort: 246.48450282790748
* Function: **helpers.isAllowedTo**
    * Line No.: 29
    * Physical LOC: 13
    * Logical LOC: 10
    * Parameter count: 3
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 15.125
    * Halstead volume: 191.15673810496133
    * Halstead effort: 2891.24566383754
* Function: **isAllowedToCids**
    * Line No.: 43
    * Physical LOC: 20
    * Logical LOC: 9
    * Parameter count: 3
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 55.55555555555556%
    * Halstead difficulty: 9.583333333333334
    * Halstead volume: 214.05271769459029
    * Halstead effort: 2051.338544573157
* Function: **isAllowedToPrivileges**
    * Line No.: 64
    * Physical LOC: 15
    * Logical LOC: 7
    * Parameter count: 3
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 57.14285714285714%
    * Halstead difficulty: 7.5
    * Halstead volume: 175.69269691115042
    * Halstead effort: 1317.695226833628
* Function: **checkIfAllowedUser**
    * Line No.: 80
    * Physical LOC: 7
    * Logical LOC: 2
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3.125
    * Halstead volume: 31.699250014423125
    * Halstead effort: 99.06015629507226
* Function: **checkIfAllowedGroup**
    * Line No.: 88
    * Physical LOC: 7
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3.125
    * Halstead volume: 31.699250014423125
    * Halstead effort: 99.06015629507226
* Function: **isSystemGroupAllowedToCids**
    * Line No.: 96
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3
    * Halstead volume: 36.541209043760986
    * Halstead effort: 109.62362713128296
* Function: **isSystemGroupAllowedToPrivileges**
    * Line No.: 101
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3
    * Halstead volume: 36.541209043760986
    * Halstead effort: 109.62362713128296
* Function: **helpers.getUserPrivileges**
    * Line No.: 106
    * Physical LOC: 16
    * Logical LOC: 6
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 16.666666666666664%
    * Halstead difficulty: 4.800000000000001
    * Halstead volume: 128
    * Halstead effort: 614.4000000000001
* Function: **helpers.getGroupPrivileges**
    * Line No.: 123
    * Physical LOC: 38
    * Logical LOC: 15
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 13.333333333333334%
    * Halstead difficulty: 7.833333333333333
    * Halstead volume: 439.44362512259653
    * Halstead effort: 3442.3083967936727
* Function: **moveToFront**
    * Line No.: 162
    * Physical LOC: 8
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 10
    * Halstead volume: 140
    * Halstead effort: 1400
* Function: **helpers.giveOrRescind**
    * Line No.: 171
    * Physical LOC: 14
    * Logical LOC: 2
    * Parameter count: 4
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 150%
    * Halstead difficulty: 6.428571428571429
    * Halstead volume: 100.37895002019238
    * Halstead effort: 645.2932501298081
* Function: **helpers.userOrGroupPrivileges**
    * Line No.: 186
    * Physical LOC: 5
    * Logical LOC: 3
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 3.4375
    * Halstead volume: 74.00879436282185
    * Halstead effort: 254.4052306222001

## src/privileges/index.js

* Physical LOC: 17
* Logical LOC: 10
* Mean parameter count: 0
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 10%
* Maintainability index: 110.39096342252914
* Dependency count: 7

## src/privileges/posts.js

* Physical LOC: 233
* Logical LOC: 121
* Mean parameter count: 2.2222222222222223
* Cyclomatic complexity: 23
* Cyclomatic complexity density: 19.00826446280992%
* Maintainability index: 101.86859587538612
* Dependency count: 10
* Function: **privsPosts.get**
    * Line No.: 18
    * Physical LOC: 45
    * Logical LOC: 14
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 21.428571428571427%
    * Halstead difficulty: 14.523809523809524
    * Halstead volume: 574.6867720048776
    * Halstead effort: 8346.641212451794
* Function: **privsPosts.can**
    * Line No.: 64
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.5
    * Halstead volume: 19.651484454403228
    * Halstead effort: 29.47722668160484
* Function: **privsPosts.filter**
    * Line No.: 69
    * Physical LOC: 47
    * Logical LOC: 17
    * Parameter count: 3
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 23.52941176470588%
    * Halstead difficulty: 13.5
    * Halstead volume: 686.5287242404697
    * Halstead effort: 9268.137777246342
* Function: **privsPosts.canEdit**
    * Line No.: 117
    * Physical LOC: 46
    * Logical LOC: 28
    * Parameter count: 2
    * Cyclomatic complexity: 7
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 22.5
    * Halstead volume: 1134.1713885112722
    * Halstead effort: 25518.856241503625
* Function: **privsPosts.canDelete**
    * Line No.: 164
    * Physical LOC: 26
    * Logical LOC: 20
    * Parameter count: 2
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 30%
    * Halstead difficulty: 16.8
    * Halstead volume: 606.6998028171594
    * Halstead effort: 10192.556687328277
* Function: **privsPosts.canFlag**
    * Line No.: 191
    * Physical LOC: 17
    * Logical LOC: 8
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 37.5%
    * Halstead difficulty: 7.199999999999999
    * Halstead volume: 175.93083758004835
    * Halstead effort: 1266.702030576348
* Function: **privsPosts.canMove**
    * Line No.: 209
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3.5999999999999996
    * Halstead volume: 41.51317942364757
    * Halstead effort: 149.44744592513123
* Function: **privsPosts.canPurge**
    * Line No.: 217
    * Physical LOC: 10
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 4.5
    * Halstead volume: 91.37651812938249
    * Halstead effort: 411.1943315822212
* Function: **isAdminOrMod**
    * Line No.: 228
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3.4285714285714284
    * Halstead volume: 55.506595772116384
    * Halstead effort: 190.30832836154187

## src/privileges/topics.js

* Physical LOC: 191
* Logical LOC: 84
* Mean parameter count: 2.5
* Cyclomatic complexity: 22
* Cyclomatic complexity density: 26.190476190476193%
* Maintainability index: 115.70050897819713
* Dependency count: 8
* Function: **privsTopics.get**
    * Line No.: 16
    * Physical LOC: 46
    * Logical LOC: 11
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 36.36363636363637%
    * Halstead difficulty: 8.333333333333334
    * Halstead volume: 474.9705508214449
    * Halstead effort: 3958.087923512041
* Function: **privsTopics.can**
    * Line No.: 63
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.5
    * Halstead volume: 19.651484454403228
    * Halstead effort: 29.47722668160484
* Function: **privsTopics.filterTids**
    * Line No.: 68
    * Physical LOC: 30
    * Logical LOC: 12
    * Parameter count: 3
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 10.282608695652174
    * Halstead volume: 457.8716557125306
    * Halstead effort: 4708.115068522326
* Function: **privsTopics.filterUids**
    * Line No.: 99
    * Physical LOC: 21
    * Logical LOC: 9
    * Parameter count: 3
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 44.44444444444444%
    * Halstead difficulty: 7.615384615384615
    * Halstead volume: 214.05271769459029
    * Halstead effort: 1630.093773212649
* Function: **privsTopics.canPurge**
    * Line No.: 121
    * Physical LOC: 10
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 2.5
    * Halstead volume: 53.77443751081735
    * Halstead effort: 134.43609377704337
* Function: **privsTopics.canDelete**
    * Line No.: 132
    * Physical LOC: 24
    * Logical LOC: 10
    * Parameter count: 2
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 60%
    * Halstead difficulty: 12.083333333333334
    * Halstead volume: 312.7524354002241
    * Halstead effort: 3779.091927752708
* Function: **privsTopics.canEdit**
    * Line No.: 157
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **privsTopics.isOwnerOrAdminOrMod**
    * Line No.: 161
    * Physical LOC: 7
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 2
    * Halstead volume: 24
    * Halstead effort: 48
* Function: **privsTopics.isAdminOrMod**
    * Line No.: 169
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3.4285714285714284
    * Halstead volume: 55.506595772116384
    * Halstead effort: 190.30832836154187
* Function: **privsTopics.canViewDeletedScheduled**
    * Line No.: 177
    * Physical LOC: 16
    * Logical LOC: 10
    * Parameter count: 4
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 3.75
    * Halstead volume: 87.56916320732489
    * Halstead effort: 328.38436202746834

## src/privileges/users.js

* Physical LOC: 153
* Logical LOC: 79
* Mean parameter count: 1.9230769230769231
* Cyclomatic complexity: 11
* Cyclomatic complexity density: 13.924050632911392%
* Maintainability index: 126.23951196037392
* Dependency count: 9
* Function: **privsUsers.isAdministrator**
    * Line No.: 14
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1
* Function: **privsUsers.isGlobalModerator**
    * Line No.: 18
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1
* Function: **isGroupMember**
    * Line No.: 22
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **privsUsers.isModerator**
    * Line No.: 26
    * Physical LOC: 8
    * Logical LOC: 6
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 5
    * Halstead volume: 57.058650025961626
    * Halstead effort: 285.29325012980814
* Function: **isModeratorOfCategories**
    * Line No.: 35
    * Physical LOC: 16
    * Logical LOC: 10
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 30%
    * Halstead difficulty: 5.25
    * Halstead volume: 193.26196660226546
    * Halstead effort: 1014.6253246618936
* Function: **isModeratorsOfCategory**
    * Line No.: 52
    * Physical LOC: 9
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 3.125
    * Halstead volume: 38.03910001730775
    * Halstead effort: 118.87218755408672
* Function: **isModeratorOfCategory**
    * Line No.: 62
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 3.5
    * Halstead volume: 39.863137138648355
    * Halstead effort: 139.52097998526924
* Function: **filterIsModerator**
    * Line No.: 67
    * Physical LOC: 8
    * Logical LOC: 4
    * Parameter count: 3
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 75%
    * Halstead difficulty: 12.375
    * Halstead volume: 148.67746297052548
    * Halstead effort: 1839.883604260253
* Function: **privsUsers.canEdit**
    * Line No.: 76
    * Physical LOC: 20
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 6
    * Halstead volume: 87.56916320732489
    * Halstead effort: 525.4149792439493
* Function: **privsUsers.canBanUser**
    * Line No.: 97
    * Physical LOC: 14
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 2.8571428571428568
    * Halstead volume: 60.94436251225966
    * Halstead effort: 174.12675003502758
* Function: **privsUsers.canMuteUser**
    * Line No.: 112
    * Physical LOC: 14
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 2.8571428571428568
    * Halstead volume: 60.94436251225966
    * Halstead effort: 174.12675003502758
* Function: **privsUsers.canFlag**
    * Line No.: 127
    * Physical LOC: 15
    * Logical LOC: 7
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 42.857142857142854%
    * Halstead difficulty: 7.846153846153847
    * Halstead volume: 157.89111045234063
    * Halstead effort: 1238.8379435491343
* Function: **hasGlobalPrivilege**
    * Line No.: 147
    * Physical LOC: 8
    * Logical LOC: 7
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 14.285714285714285%
    * Halstead difficulty: 5.846153846153846
    * Halstead volume: 171.30037948837168
    * Halstead effort: 1001.4483723935574

## src/rewards/admin.js

* Physical LOC: 81
* Logical LOC: 42
* Mean parameter count: 0.7142857142857143
* Cyclomatic complexity: 4
* Cyclomatic complexity density: 9.523809523809524%
* Maintainability index: 127.52675512078889
* Dependency count: 4
* Function: **rewards.save**
    * Line No.: 9
    * Physical LOC: 20
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 1.5
    * Halstead volume: 10
    * Halstead effort: 15
* Function: **save**
    * Line No.: 10
    * Physical LOC: 14
    * Logical LOC: 10
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 30%
    * Halstead difficulty: 7.555555555555555
    * Halstead volume: 143.0611994437619
    * Halstead effort: 1080.9068402417565
* Function: **rewards.delete**
    * Line No.: 30
    * Physical LOC: 7
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **rewards.get**
    * Line No.: 38
    * Physical LOC: 8
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **saveConditions**
    * Line No.: 47
    * Physical LOC: 15
    * Logical LOC: 6
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 16.666666666666664%
    * Halstead difficulty: 4.199999999999999
    * Halstead volume: 51.89147427955947
    * Halstead effort: 217.94419197414973
* Function: **getActiveRewards**
    * Line No.: 63
    * Physical LOC: 17
    * Logical LOC: 4
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 3.5999999999999996
    * Halstead volume: 48.43204266092217
    * Halstead effort: 174.3553535793198
* Function: **load**
    * Line No.: 64
    * Physical LOC: 11
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 6.6000000000000005
    * Halstead volume: 72.64806399138325
    * Halstead effort: 479.4772223431295

## src/rewards/index.js

* Physical LOC: 80
* Logical LOC: 45
* Mean parameter count: 1.375
* Cyclomatic complexity: 6
* Cyclomatic complexity density: 13.333333333333334%
* Maintainability index: 128.57959035459243
* Dependency count: 4
* Function: **rewards.checkConditionAndRewardUser**
    * Line No.: 10
    * Physical LOC: 17
    * Logical LOC: 13
    * Parameter count: 1
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 30.76923076923077%
    * Halstead difficulty: 9
    * Halstead volume: 187.64662506490404
    * Halstead effort: 1688.8196255841365
* Function: **isConditionActive**
    * Line No.: 28
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1
* Function: **getIDsByCondition**
    * Line No.: 32
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1
* Function: **filterCompletedRewards**
    * Line No.: 36
    * Physical LOC: 17
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 3.8571428571428577
    * Halstead volume: 70.30835464468075
    * Halstead effort: 271.1893679151972
* Function: **getRewardDataByIDs**
    * Line No.: 54
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1
* Function: **getRewardsByRewardData**
    * Line No.: 58
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1
* Function: **checkCondition**
    * Line No.: 62
    * Physical LOC: 8
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 6.666666666666667
    * Halstead volume: 118.53642239625987
    * Halstead effort: 790.2428159750658
* Function: **giveRewards**
    * Line No.: 71
    * Physical LOC: 8
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 5.25
    * Halstead volume: 62.907475208398566
    * Halstead effort: 330.26424484409245

## src/routes/admin.js

* Physical LOC: 85
* Logical LOC: 61
* Mean parameter count: 4
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 1.639344262295082%
* Maintainability index: 81.43300344732413
* Dependency count: 2
* Function: **module.exports**
    * Line No.: 5
    * Physical LOC: 58
    * Logical LOC: 42
    * Parameter count: 4
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 2.380952380952381%
    * Halstead difficulty: 15.462962962962962
    * Halstead volume: 3176.6272466553946
    * Halstead effort: 49120.06946217138
* Function: **apiRoutes**
    * Line No.: 65
    * Physical LOC: 21
    * Logical LOC: 15
    * Parameter count: 4
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 6.666666666666667%
    * Halstead difficulty: 9.558823529411764
    * Halstead volume: 1215.6425103383172
    * Halstead effort: 11620.11223117509

## src/routes/api.js

* Physical LOC: 56
* Logical LOC: 28
* Mean parameter count: 3
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 3.571428571428571%
* Maintainability index: 87.53499522015466
* Dependency count: 5
* Function: **module.exports**
    * Line No.: 9
    * Physical LOC: 48
    * Logical LOC: 22
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 4.545454545454546%
    * Halstead difficulty: 7.757352941176471
    * Halstead volume: 2240.7164903145663
    * Halstead effort: 17382.02865648432

## src/routes/authentication.js

* Physical LOC: 187
* Logical LOC: 69
* Mean parameter count: 1.2
* Cyclomatic complexity: 8
* Cyclomatic complexity density: 11.594202898550725%
* Maintainability index: 105.63147601744565
* Dependency count: 10
* Function: **Auth.initialize**
    * Line No.: 18
    * Physical LOC: 25
    * Logical LOC: 7
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 14.285714285714285%
    * Halstead difficulty: 5.111111111111111
    * Halstead volume: 155.41846816192586
    * Halstead effort: 794.3610594942877
* Function: **setAuthVars**
    * Line No.: 44
    * Physical LOC: 11
    * Logical LOC: 9
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 12.5
    * Halstead volume: 212.66617507355792
    * Halstead effort: 2658.327188419474
* Function: **Auth.getLoginStrategies**
    * Line No.: 56
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1
* Function: **Auth.verifyToken**
    * Line No.: 60
    * Physical LOC: 19
    * Logical LOC: 12
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 10.266666666666667
    * Halstead volume: 244.4228653433368
    * Halstead effort: 2509.4080841915916
* Function: **Auth.reloadRoutes**
    * Line No.: 80
    * Physical LOC: 98
    * Logical LOC: 21
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 14.285714285714285%
    * Halstead difficulty: 11.478260869565217
    * Halstead volume: 985.7584123938415
    * Halstead effort: 11314.792211824963

## src/routes/debug.js

* Physical LOC: 35
* Logical LOC: 10
* Mean parameter count: 1
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 10%
* Maintainability index: 129.42116283619296
* Dependency count: 4
* Function: **module.exports**
    * Line No.: 9
    * Physical LOC: 27
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 3.25
    * Halstead volume: 82.4541375165866
    * Halstead effort: 267.97594692890647

## src/routes/feeds.js

* Physical LOC: 423
* Logical LOC: 214
* Mean parameter count: 2.7777777777777777
* Cyclomatic complexity: 47
* Cyclomatic complexity density: 21.962616822429908%
* Maintainability index: 105.98217650258711
* Dependency count: 13
* Function: **module.exports**
    * Line No.: 25
    * Physical LOC: 14
    * Logical LOC: 12
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 8.333333333333332%
    * Halstead difficulty: 2.8461538461538463
    * Halstead volume: 528.8090414263364
    * Halstead effort: 1505.0718871364961
* Function: **validateTokenIfRequiresLogin**
    * Line No.: 40
    * Physical LOC: 22
    * Logical LOC: 14
    * Parameter count: 4
    * Cyclomatic complexity: 7
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 11.5625
    * Halstead volume: 338.43165970615865
    * Halstead effort: 3913.1160653524594
* Function: **generateForTopic**
    * Line No.: 63
    * Physical LOC: 54
    * Logical LOC: 22
    * Parameter count: 3
    * Cyclomatic complexity: 8
    * Cyclomatic complexity density: 36.36363636363637%
    * Halstead difficulty: 10.875
    * Halstead volume: 968.730057679797
    * Halstead effort: 10534.939377267792
* Function: **generateForCategory**
    * Line No.: 118
    * Physical LOC: 35
    * Logical LOC: 12
    * Parameter count: 3
    * Cyclomatic complexity: 8
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 7.342105263157895
    * Halstead volume: 317.28542485580186
    * Halstead effort: 2329.5429877570714
* Function: **generateForTopics**
    * Line No.: 154
    * Physical LOC: 17
    * Logical LOC: 6
    * Parameter count: 3
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 5.6000000000000005
    * Halstead volume: 122.6238852375102
    * Halstead effort: 686.6937573300571
* Function: **generateForRecent**
    * Line No.: 172
    * Physical LOC: 11
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 4.754887502163468
    * Halstead effort: 0
* Function: **generateForTop**
    * Line No.: 184
    * Physical LOC: 11
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 4.754887502163468
    * Halstead effort: 0
* Function: **generateForPopular**
    * Line No.: 196
    * Physical LOC: 11
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 4.754887502163468
    * Halstead effort: 0
* Function: **generateSorted**
    * Line No.: 208
    * Physical LOC: 41
    * Logical LOC: 21
    * Parameter count: 4
    * Cyclomatic complexity: 7
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 17.77777777777778
    * Halstead volume: 652.4704081562301
    * Halstead effort: 11599.473922777424
* Function: **sendTopicsFeed**
    * Line No.: 250
    * Physical LOC: 7
    * Logical LOC: 5
    * Parameter count: 4
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 60%
    * Halstead difficulty: 4.107142857142857
    * Halstead volume: 169.9171005377434
    * Halstead effort: 697.8738057800175
* Function: **generateTopicsFeed**
    * Line No.: 258
    * Physical LOC: 47
    * Logical LOC: 9
    * Parameter count: 3
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 22.22222222222222%
    * Halstead difficulty: 9.75
    * Halstead volume: 348.3892322882048
    * Halstead effort: 3396.795014809997
* Function: **addFeedItem**
    * Line No.: 271
    * Physical LOC: 27
    * Logical LOC: 18
    * Parameter count: 1
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 22.22222222222222%
    * Halstead difficulty: 13.291666666666666
    * Halstead volume: 579.6089809147812
    * Halstead effort: 7703.969371325634
* Function: **generateForRecentPosts**
    * Line No.: 306
    * Physical LOC: 18
    * Logical LOC: 13
    * Parameter count: 3
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 23.076923076923077%
    * Halstead difficulty: 8.322580645161292
    * Halstead volume: 417.82238611206157
    * Halstead effort: 3477.360503771352
* Function: **generateForCategoryRecentPosts**
    * Line No.: 325
    * Physical LOC: 30
    * Logical LOC: 17
    * Parameter count: 2
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 29.411764705882355%
    * Halstead difficulty: 9.953125
    * Halstead volume: 516.2341910549894
    * Halstead effort: 5138.143432844192
* Function: **generateForPostsFeed**
    * Line No.: 356
    * Physical LOC: 23
    * Logical LOC: 8
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 8.325000000000001
    * Halstead volume: 330.34270766867496
    * Halstead effort: 2750.1030413417193
* Function: **generateForUserTopics**
    * Line No.: 380
    * Physical LOC: 19
    * Logical LOC: 8
    * Parameter count: 3
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 37.5%
    * Halstead difficulty: 5.055555555555555
    * Halstead volume: 116
    * Halstead effort: 586.4444444444445
* Function: **generateForTag**
    * Line No.: 400
    * Physical LOC: 19
    * Logical LOC: 8
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 8.125
    * Halstead volume: 371.38478741127483
    * Halstead effort: 3017.501397716608
* Function: **sendFeed**
    * Line No.: 420
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3
    * Halstead volume: 102.7985828955553
    * Halstead effort: 308.3957486866659

## src/routes/helpers.js

* Physical LOC: 84
* Logical LOC: 34
* Mean parameter count: 1.6
* Cyclomatic complexity: 7
* Cyclomatic complexity density: 20.588235294117645%
* Maintainability index: 118.5145354738188
* Dependency count: 3
* Function: **helpers.setupPageRoute**
    * Line No.: 9
    * Physical LOC: 27
    * Logical LOC: 8
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 37.5%
    * Halstead difficulty: 11.229166666666666
    * Halstead volume: 446.24762247421205
    * Halstead effort: 5010.988927366672
* Function: **helpers.setupAdminPageRoute**
    * Line No.: 38
    * Physical LOC: 10
    * Logical LOC: 7
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 42.857142857142854%
    * Halstead difficulty: 9.473684210526315
    * Halstead volume: 325.48472667354736
    * Halstead effort: 3083.539515854659
* Function: **helpers.setupApiRoute**
    * Line No.: 50
    * Physical LOC: 17
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 8
    * Halstead volume: 275.78347512548123
    * Halstead effort: 2206.26780100385
* Function: **helpers.tryRoute**
    * Line No.: 68
    * Physical LOC: 17
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 5.5
    * Halstead volume: 75.28421251514429
    * Halstead effort: 414.0631688332936
* Function: **&lt;anonymous>**
    * Line No.: 71
    * Physical LOC: 11
    * Logical LOC: 2
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 0
    * Halstead volume: 4.754887502163468
    * Halstead effort: 0

## src/routes/index.js

* Physical LOC: 231
* Logical LOC: 82
* Mean parameter count: 2.75
* Cyclomatic complexity: 5
* Cyclomatic complexity density: 6.097560975609756%
* Maintainability index: 100.82182980839721
* Dependency count: 18
* Function: **module.exports**
    * Line No.: 110
    * Physical LOC: 47
    * Logical LOC: 17
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 5.88235294117647%
    * Halstead difficulty: 5.341463414634147
    * Halstead volume: 666.5506622013165
    * Halstead effort: 3560.3559761484958
* Function: **router.render**
    * Line No.: 112
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1
    * Halstead volume: 8
    * Halstead effort: 8
* Function: **addCoreRoutes**
    * Line No.: 158
    * Physical LOC: 52
    * Logical LOC: 30
    * Parameter count: 4
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 16.666666666666664%
    * Halstead difficulty: 14.222222222222221
    * Halstead volume: 1281.4115533039922
    * Halstead effort: 18224.51986921233
* Function: **addRemountableRoutes**
    * Line No.: 211
    * Physical LOC: 21
    * Logical LOC: 1
    * Parameter count: 4
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.1428571428571428
    * Halstead volume: 38.03910001730775
    * Halstead effort: 43.47325716263743

## src/routes/meta.js

* Physical LOC: 18
* Logical LOC: 13
* Mean parameter count: 3
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 7.6923076923076925%
* Maintainability index: 112.16865611945032
* Dependency count: 2
* Function: **module.exports**
    * Line No.: 6
    * Physical LOC: 13
    * Logical LOC: 9
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 11.11111111111111%
    * Halstead difficulty: 2.2083333333333335
    * Halstead volume: 404.23781576013397
    * Halstead effort: 892.6918431369626

## src/routes/user.js

* Physical LOC: 53
* Logical LOC: 37
* Mean parameter count: 4
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 2.7027027027027026%
* Maintainability index: 79.83565260411534
* Dependency count: 1
* Function: **module.exports**
    * Line No.: 7
    * Physical LOC: 47
    * Logical LOC: 33
    * Parameter count: 4
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 3.0303030303030303%
    * Halstead difficulty: 11.132075471698112
    * Halstead volume: 2173.310949192329
    * Halstead effort: 24193.46150987687

## src/socket.io/admin.js

* Physical LOC: 121
* Logical LOC: 73
* Mean parameter count: 2.1818181818181817
* Cyclomatic complexity: 7
* Cyclomatic complexity density: 9.58904109589041%
* Maintainability index: 134.74054671985942
* Dependency count: 29
* Function: **SocketAdmin.before**
    * Line No.: 35
    * Physical LOC: 18
    * Logical LOC: 9
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 44.44444444444444%
    * Halstead difficulty: 7.815789473684211
    * Halstead volume: 274.78587335407707
    * Halstead effort: 2147.668536477918
* Function: **SocketAdmin.restart**
    * Line No.: 54
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1
    * Halstead volume: 11.60964047443681
    * Halstead effort: 11.60964047443681
* Function: **logRestart**
    * Line No.: 59
    * Physical LOC: 12
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **SocketAdmin.reload**
    * Line No.: 72
    * Physical LOC: 11
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 1
    * Halstead volume: 11.60964047443681
    * Halstead effort: 11.60964047443681
* Function: **SocketAdmin.fireEvent**
    * Line No.: 84
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 3
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 2.6666666666666665
    * Halstead volume: 74.00879436282185
    * Halstead effort: 197.3567849675249
* Function: **SocketAdmin.deleteEvents**
    * Line No.: 89
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.4
    * Halstead volume: 25.26619429851844
    * Halstead effort: 35.372672017925815
* Function: **SocketAdmin.deleteAllEvents**
    * Line No.: 93
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.2
    * Halstead volume: 22.458839376460833
    * Halstead effort: 26.950607251753
* Function: **SocketAdmin.getSearchDict**
    * Line No.: 97
    * Physical LOC: 5
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 2.8125
    * Halstead volume: 70.30835464468075
    * Halstead effort: 197.7422474381646
* Function: **SocketAdmin.deleteAllSessions**
    * Line No.: 103
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.1666666666666667
    * Halstead volume: 30
    * Halstead effort: 35
* Function: **SocketAdmin.reloadAllSessions**
    * Line No.: 107
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.1428571428571428
    * Halstead volume: 41.20902501875006
    * Halstead effort: 47.09602859285721
* Function: **SocketAdmin.getServerTime**
    * Line No.: 112
    * Physical LOC: 8
    * Logical LOC: 4
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 4.454545454545454
    * Halstead volume: 104.2481250360578
    * Halstead effort: 464.37801152425743

## src/socket.io/blacklist.js

* Physical LOC: 35
* Logical LOC: 18
* Mean parameter count: 2.25
* Cyclomatic complexity: 2
* Cyclomatic complexity density: 11.11111111111111%
* Maintainability index: 145.86728689193646
* Dependency count: 4
* Function: **SocketBlacklist.validate**
    * Line No.: 10
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.75
    * Halstead volume: 38.03910001730775
    * Halstead effort: 66.56842503028857
* Function: **SocketBlacklist.save**
    * Line No.: 14
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 2
    * Halstead effort: 0
* Function: **SocketBlacklist.addRule**
    * Line No.: 18
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 2
    * Halstead effort: 0
* Function: **blacklist**
    * Line No.: 22
    * Physical LOC: 13
    * Logical LOC: 5
    * Parameter count: 3
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 3.5
    * Halstead volume: 46.604512509375034
    * Halstead effort: 163.11579378281263

## src/socket.io/categories.js

* Physical LOC: 167
* Logical LOC: 90
* Mean parameter count: 1.7333333333333334
* Cyclomatic complexity: 17
* Cyclomatic complexity density: 18.88888888888889%
* Maintainability index: 121.62224139226214
* Dependency count: 6
* Function: **SocketCategories.getRecentReplies**
    * Line No.: 12
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **SocketCategories.get**
    * Line No.: 16
    * Physical LOC: 11
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 3
    * Halstead volume: 33.219280948873624
    * Halstead effort: 99.65784284662087
* Function: **getCategories**
    * Line No.: 17
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.5
    * Halstead volume: 8
    * Halstead effort: 12
* Function: **SocketCategories.getWatchedCategories**
    * Line No.: 28
    * Physical LOC: 7
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 2.5
    * Halstead volume: 24
    * Halstead effort: 60
* Function: **SocketCategories.loadMore**
    * Line No.: 36
    * Physical LOC: 48
    * Logical LOC: 21
    * Parameter count: 2
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 28.57142857142857%
    * Halstead difficulty: 17.727272727272727
    * Halstead volume: 692.0358917205225
    * Halstead effort: 12267.90898959108
* Function: **SocketCategories.getTopicCount**
    * Line No.: 85
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **SocketCategories.getCategoriesByPrivilege**
    * Line No.: 89
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **SocketCategories.getMoveCategories**
    * Line No.: 93
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **SocketCategories.getSelectCategories**
    * Line No.: 97
    * Physical LOC: 7
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 2.5
    * Halstead volume: 24
    * Halstead effort: 60
* Function: **SocketCategories.setWatchState**
    * Line No.: 105
    * Physical LOC: 8
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 133.33333333333331%
    * Halstead difficulty: 5.25
    * Halstead volume: 74.00879436282185
    * Halstead effort: 388.5461704048147
* Function: **SocketCategories.watch**
    * Line No.: 114
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **SocketCategories.ignore**
    * Line No.: 118
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **ignoreOrWatch**
    * Line No.: 122
    * Physical LOC: 23
    * Logical LOC: 16
    * Parameter count: 3
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 31.25%
    * Halstead difficulty: 9.5
    * Halstead volume: 353.2961228838133
    * Halstead effort: 3356.3131673962266
* Function: **SocketCategories.isModerator**
    * Line No.: 146
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **SocketCategories.loadMoreSubCategories**
    * Line No.: 150
    * Physical LOC: 16
    * Logical LOC: 12
    * Parameter count: 2
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 41.66666666666667%
    * Halstead difficulty: 12.31578947368421
    * Halstead volume: 360
    * Halstead effort: 4433.684210526316

## src/socket.io/helpers.js

* Physical LOC: 200
* Logical LOC: 98
* Mean parameter count: 1.8
* Cyclomatic complexity: 22
* Cyclomatic complexity density: 22.448979591836736%
* Maintainability index: 120.96492083504242
* Dependency count: 13
* Function: **SocketHelpers.notifyNew**
    * Line No.: 19
    * Physical LOC: 9
    * Logical LOC: 3
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 2.8
    * Halstead volume: 38.03910001730775
    * Halstead effort: 106.5094800484617
* Function: **notifyUids**
    * Line No.: 29
    * Physical LOC: 32
    * Logical LOC: 14
    * Parameter count: 4
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 7.142857142857142%
    * Halstead difficulty: 3.9047619047619047
    * Halstead volume: 357.5769266126538
    * Halstead effort: 1396.2527610589339
* Function: **getWatchStates**
    * Line No.: 62
    * Physical LOC: 7
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 8
    * Halstead effort: 4
* Function: **filterTidCidIgnorers**
    * Line No.: 70
    * Physical LOC: 5
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 2
    * Halstead volume: 18.094737505048094
    * Halstead effort: 36.18947501009619
* Function: **SocketHelpers.sendNotificationToPostOwner**
    * Line No.: 76
    * Physical LOC: 39
    * Logical LOC: 13
    * Parameter count: 4
    * Cyclomatic complexity: 8
    * Cyclomatic complexity density: 61.53846153846154%
    * Halstead difficulty: 7.6923076923076925
    * Halstead volume: 434.2737001211542
    * Halstead effort: 3340.5669240088787
* Function: **SocketHelpers.sendNotificationToTopicOwner**
    * Line No.: 117
    * Physical LOC: 33
    * Logical LOC: 13
    * Parameter count: 4
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 46.15384615384615%
    * Halstead difficulty: 8.26086956521739
    * Halstead volume: 378.329558951884
    * Halstead effort: 3125.331139167737
* Function: **SocketHelpers.upvote**
    * Line No.: 151
    * Physical LOC: 37
    * Logical LOC: 17
    * Parameter count: 2
    * Cyclomatic complexity: 9
    * Cyclomatic complexity density: 52.94117647058824%
    * Halstead difficulty: 13.25
    * Halstead volume: 570.0165354875053
    * Halstead effort: 7552.719095209445
* Function: **all**
    * Line No.: 162
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1
    * Halstead volume: 8
    * Halstead effort: 8
* Function: **first**
    * Line No.: 165
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1
    * Halstead volume: 8
    * Halstead effort: 8
* Function: **everyTen**
    * Line No.: 168
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 4.166666666666667
    * Halstead volume: 30
    * Halstead effort: 125.00000000000001
* Function: **threshold**
    * Line No.: 171
    * Physical LOC: 3
    * Logical LOC: 2
    * Parameter count: 0
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 6
    * Halstead volume: 87.56842503028855
    * Halstead effort: 525.4105501817313
* Function: **logarithmic**
    * Line No.: 174
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 4.8999999999999995
    * Halstead volume: 50.18947501009619
    * Halstead effort: 245.9284275494713
* Function: **disabled**
    * Line No.: 177
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1
* Function: **SocketHelpers.rescindUpvoteNotification**
    * Line No.: 189
    * Physical LOC: 6
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 2.25
    * Halstead volume: 60.94436251225966
    * Halstead effort: 137.12481565258423
* Function: **SocketHelpers.emitToUids**
    * Line No.: 196
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.25
    * Halstead volume: 18.094737505048094
    * Halstead effort: 22.61842188131012

## src/socket.io/index.js

* Physical LOC: 278
* Logical LOC: 144
* Mean parameter count: 1.0769230769230769
* Cyclomatic complexity: 30
* Cyclomatic complexity density: 20.833333333333336%
* Maintainability index: 107.2391197001711
* Dependency count: 15
* Function: **Sockets.init**
    * Line No.: 20
    * Physical LOC: 43
    * Logical LOC: 24
    * Parameter count: 1
    * Cyclomatic complexity: 7
    * Cyclomatic complexity density: 29.166666666666668%
    * Halstead difficulty: 9.91304347826087
    * Halstead volume: 820.1173393178601
    * Halstead effort: 8129.858841933569
* Function: **onConnection**
    * Line No.: 64
    * Physical LOC: 16
    * Logical LOC: 6
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3.5555555555555554
    * Halstead volume: 254.18760226232595
    * Halstead effort: 903.7781413771589
* Function: **onDisconnect**
    * Line No.: 81
    * Physical LOC: 4
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 2.6
    * Halstead volume: 83.76180828526728
    * Halstead effort: 217.78070154169492
* Function: **onConnect**
    * Line No.: 86
    * Physical LOC: 23
    * Logical LOC: 12
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 16.666666666666664%
    * Halstead difficulty: 6
    * Halstead volume: 232.7928234072743
    * Halstead effort: 1396.7569404436458
* Function: **onMessage**
    * Line No.: 110
    * Physical LOC: 62
    * Logical LOC: 33
    * Parameter count: 2
    * Cyclomatic complexity: 13
    * Cyclomatic complexity density: 39.39393939393939%
    * Halstead difficulty: 23.617021276595747
    * Halstead volume: 1377.0022462339143
    * Halstead effort: 32520.69134722649
* Function: **&lt;anonymous>**
    * Line No.: 117
    * Physical LOC: 1
    * Logical LOC: 0
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: Infinity%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **requireModules**
    * Line No.: 173
    * Physical LOC: 11
    * Logical LOC: 2
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 2.6666666666666665
    * Halstead volume: 90.76048999263462
    * Halstead effort: 242.0279733136923
* Function: **checkMaintenance**
    * Line No.: 185
    * Physical LOC: 12
    * Logical LOC: 8
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 37.5%
    * Halstead difficulty: 5.8500000000000005
    * Halstead volume: 127.43782540330756
    * Halstead effort: 745.5112786093492
* Function: **validateSession**
    * Line No.: 202
    * Physical LOC: 23
    * Logical LOC: 8
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 37.5%
    * Halstead difficulty: 5.714285714285714
    * Halstead volume: 93.76537429460444
    * Halstead effort: 535.8021388263111
* Function: **authorize**
    * Line No.: 228
    * Physical LOC: 25
    * Logical LOC: 13
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 23.076923076923077%
    * Halstead difficulty: 12.307692307692308
    * Halstead volume: 284.98440323159184
    * Halstead effort: 3507.500347465746
* Function: **Sockets.in**
    * Line No.: 254
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 3.5
    * Halstead volume: 39
    * Halstead effort: 136.5
* Function: **Sockets.getUserSocketCount**
    * Line No.: 258
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.5
    * Halstead volume: 15.509775004326936
    * Halstead effort: 23.264662506490403
* Function: **Sockets.getCountInRoom**
    * Line No.: 262
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 75%
    * Halstead difficulty: 6.4
    * Halstead volume: 129.26767504471167
    * Halstead effort: 827.3131202861547

## src/socket.io/meta.js

* Physical LOC: 63
* Logical LOC: 35
* Mean parameter count: 2
* Cyclomatic complexity: 11
* Cyclomatic complexity density: 31.428571428571427%
* Maintainability index: 120.36546732593158
* Dependency count: 2
* Function: **SocketMeta.reconnected**
    * Line No.: 11
    * Physical LOC: 8
    * Logical LOC: 5
    * Parameter count: 3
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 60%
    * Halstead difficulty: 5.4
    * Halstead volume: 124
    * Halstead effort: 669.6
* Function: **&lt;anonymous>**
    * Line No.: 12
    * Physical LOC: 1
    * Logical LOC: 0
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: Infinity%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **&lt;anonymous>.enter**
    * Line No.: 22
    * Physical LOC: 25
    * Logical LOC: 13
    * Parameter count: 3
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 46.15384615384615%
    * Halstead difficulty: 13.178571428571427
    * Halstead volume: 361.88495648456103
    * Halstead effort: 4769.12674795725
* Function: **&lt;anonymous>.leaveCurrent**
    * Line No.: 48
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 3
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 75%
    * Halstead difficulty: 5.5
    * Halstead volume: 75.28421251514429
    * Halstead effort: 414.0631688332936
* Function: **leaveCurrentRoom**
    * Line No.: 56
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 5
    * Halstead volume: 51
    * Halstead effort: 255

## src/socket.io/modules.js

* Physical LOC: 254
* Logical LOC: 136
* Mean parameter count: 1.95
* Cyclomatic complexity: 48
* Cyclomatic complexity density: 35.294117647058826%
* Maintainability index: 121.22261849422452
* Dependency count: 10
* Function: **&lt;anonymous>.getRaw**
    * Line No.: 21
    * Physical LOC: 17
    * Logical LOC: 7
    * Parameter count: 2
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 71.42857142857143%
    * Halstead difficulty: 7
    * Halstead volume: 156.0801066523054
    * Halstead effort: 1092.5607465661378
* Function: **&lt;anonymous>.isDnD**
    * Line No.: 39
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 2.5
    * Halstead volume: 27
    * Halstead effort: 67.5
* Function: **&lt;anonymous>.newRoom**
    * Line No.: 44
    * Physical LOC: 12
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 6
    * Halstead volume: 91.73835003173087
    * Halstead effort: 550.4301001903852
* Function: **&lt;anonymous>.send**
    * Line No.: 57
    * Physical LOC: 14
    * Logical LOC: 7
    * Parameter count: 2
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 71.42857142857143%
    * Halstead difficulty: 7.857142857142857
    * Halstead volume: 201.7383500317309
    * Halstead effort: 1585.0870359635999
* Function: **&lt;anonymous>.loadRoom**
    * Line No.: 72
    * Physical LOC: 9
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 75%
    * Halstead difficulty: 5.5
    * Halstead volume: 84
    * Halstead effort: 462
* Function: **&lt;anonymous>.getUsersInRoom**
    * Line No.: 82
    * Physical LOC: 13
    * Logical LOC: 7
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 57.14285714285714%
    * Halstead difficulty: 7.6923076923076925
    * Halstead volume: 176.41891628622352
    * Halstead effort: 1357.068586817104
* Function: **&lt;anonymous>.addUserToRoom**
    * Line No.: 96
    * Physical LOC: 18
    * Logical LOC: 9
    * Parameter count: 2
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 55.55555555555556%
    * Halstead difficulty: 9.307692307692308
    * Halstead volume: 206.32331253245206
    * Halstead effort: 1920.3939089559
* Function: **&lt;anonymous>.removeUserFromRoom**
    * Line No.: 115
    * Physical LOC: 13
    * Logical LOC: 6
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 8.181818181818182
    * Halstead volume: 144.94647495169912
    * Halstead effort: 1185.9257041502656
* Function: **&lt;anonymous>.leave**
    * Line No.: 129
    * Physical LOC: 9
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 75%
    * Halstead difficulty: 4.8125
    * Halstead volume: 78.13781191217038
    * Halstead effort: 376.03821982731995
* Function: **&lt;anonymous>.edit**
    * Line No.: 139
    * Physical LOC: 9
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 80%
    * Halstead difficulty: 5.055555555555555
    * Halstead volume: 100
    * Halstead effort: 505.55555555555554
* Function: **&lt;anonymous>.delete**
    * Line No.: 149
    * Physical LOC: 9
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 80%
    * Halstead difficulty: 5.055555555555555
    * Halstead volume: 100
    * Halstead effort: 505.55555555555554
* Function: **&lt;anonymous>.restore**
    * Line No.: 159
    * Physical LOC: 9
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 80%
    * Halstead difficulty: 5.055555555555555
    * Halstead volume: 100
    * Halstead effort: 505.55555555555554
* Function: **&lt;anonymous>.canMessage**
    * Line No.: 169
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 2
    * Halstead effort: 0
* Function: **&lt;anonymous>.markRead**
    * Line No.: 173
    * Physical LOC: 23
    * Logical LOC: 11
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 36.36363636363637%
    * Halstead difficulty: 9
    * Halstead volume: 284.5996545452941
    * Halstead effort: 2561.3968909076466
* Function: **&lt;anonymous>.markAllRead**
    * Line No.: 197
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.25
    * Halstead volume: 20.67970000576925
    * Halstead effort: 25.84962500721156
* Function: **&lt;anonymous>.renameRoom**
    * Line No.: 202
    * Physical LOC: 11
    * Logical LOC: 6
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 8.549999999999999
    * Halstead volume: 152.92539048396907
    * Halstead effort: 1307.5120886379354
* Function: **&lt;anonymous>.getRecentChats**
    * Line No.: 214
    * Physical LOC: 8
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 80%
    * Halstead difficulty: 8.884615384615385
    * Halstead volume: 197.15338753100974
    * Halstead effort: 1751.6320199870481
* Function: **&lt;anonymous>.hasPrivateChat**
    * Line No.: 223
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 6.3
    * Halstead volume: 60.94436251225966
    * Halstead effort: 383.94948382723584
* Function: **&lt;anonymous>.getMessages**
    * Line No.: 230
    * Physical LOC: 15
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 125%
    * Halstead difficulty: 6.666666666666667
    * Halstead volume: 126.71134807876054
    * Halstead effort: 844.7423205250702
* Function: **&lt;anonymous>.getIP**
    * Line No.: 246
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 4.2
    * Halstead volume: 46.604512509375034
    * Halstead effort: 195.73895253937516

## src/socket.io/notifications.js

* Physical LOC: 42
* Logical LOC: 24
* Mean parameter count: 1.5
* Cyclomatic complexity: 3
* Cyclomatic complexity density: 12.5%
* Maintainability index: 143.6862518166735
* Dependency count: 3
* Function: **SocketNotifs.get**
    * Line No.: 8
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 3.75
    * Halstead volume: 62.26976913547136
    * Halstead effort: 233.51163425801758
* Function: **SocketNotifs.getCount**
    * Line No.: 15
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1
* Function: **SocketNotifs.deleteAll**
    * Line No.: 19
    * Physical LOC: 7
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 3.125
    * Halstead volume: 31.699250014423125
    * Halstead effort: 99.06015629507226
* Function: **SocketNotifs.markRead**
    * Line No.: 27
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.1666666666666667
    * Halstead volume: 33
    * Halstead effort: 38.5
* Function: **SocketNotifs.markUnread**
    * Line No.: 32
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.1666666666666667
    * Halstead volume: 33
    * Halstead effort: 38.5
* Function: **SocketNotifs.markAllRead**
    * Line No.: 37
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.2
    * Halstead volume: 28.07354922057604
    * Halstead effort: 33.688259064691245

## src/socket.io/plugins.js

* Physical LOC: 17
* Logical LOC: 3
* Mean parameter count: 0
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 33.33333333333333%
* Maintainability index: 138.06189489250244
* Dependency count: 0

## src/socket.io/posts.js

* Physical LOC: 184
* Logical LOC: 125
* Mean parameter count: 2.3076923076923075
* Cyclomatic complexity: 25
* Cyclomatic complexity density: 20%
* Maintainability index: 113.57960735527095
* Dependency count: 14
* Function: **SocketPosts.getRawPost**
    * Line No.: 21
    * Physical LOC: 14
    * Logical LOC: 9
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 7.2
    * Halstead volume: 154.28722505336555
    * Halstead effort: 1110.868020384232
* Function: **SocketPosts.getPostSummaryByIndex**
    * Line No.: 36
    * Physical LOC: 24
    * Logical LOC: 16
    * Parameter count: 2
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 37.5%
    * Halstead difficulty: 18
    * Halstead volume: 336.51484454403226
    * Halstead effort: 6057.267201792581
* Function: **SocketPosts.getPostSummaryByPid**
    * Line No.: 61
    * Physical LOC: 15
    * Logical LOC: 10
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 8.461538461538462
    * Halstead volume: 212.60741193467962
    * Halstead effort: 1798.9857932934428
* Function: **SocketPosts.getCategory**
    * Line No.: 77
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **SocketPosts.getPidIndex**
    * Line No.: 81
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 3.125
    * Halstead volume: 31.699250014423125
    * Halstead effort: 99.06015629507226
* Function: **SocketPosts.getReplies**
    * Line No.: 88
    * Physical LOC: 17
    * Logical LOC: 10
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 8
    * Halstead volume: 155.58941141594505
    * Halstead effort: 1244.7152913275604
* Function: **SocketPosts.accept**
    * Line No.: 106
    * Physical LOC: 8
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 5.833333333333334
    * Halstead volume: 66.60791492653966
    * Halstead effort: 388.54617040481475
* Function: **SocketPosts.reject**
    * Line No.: 115
    * Physical LOC: 8
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 5.833333333333334
    * Halstead volume: 66.60791492653966
    * Halstead effort: 388.54617040481475
* Function: **logQueueEvent**
    * Line No.: 124
    * Physical LOC: 19
    * Logical LOC: 14
    * Parameter count: 3
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 21.428571428571427%
    * Halstead difficulty: 11.466666666666667
    * Halstead volume: 348.31427061639
    * Halstead effort: 3994.0036364012717
* Function: **SocketPosts.notify**
    * Line No.: 144
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 2
    * Halstead volume: 18.094737505048094
    * Halstead effort: 36.18947501009619
* Function: **canEditQueue**
    * Line No.: 152
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 3
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 3.5
    * Halstead volume: 46.604512509375034
    * Halstead effort: 163.11579378281263
* Function: **sendQueueNotification**
    * Line No.: 159
    * Physical LOC: 13
    * Logical LOC: 9
    * Parameter count: 4
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 7.03125
    * Halstead volume: 204.32967235008786
    * Halstead effort: 1436.6930087115552
* Function: **SocketPosts.editQueuedContent**
    * Line No.: 173
    * Physical LOC: 10
    * Logical LOC: 7
    * Parameter count: 2
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 71.42857142857143%
    * Halstead difficulty: 9
    * Halstead volume: 172.8771237954945
    * Halstead effort: 1555.8941141594505

## src/socket.io/uploads.js

* Physical LOC: 53
* Logical LOC: 33
* Mean parameter count: 1.5
* Cyclomatic complexity: 12
* Cyclomatic complexity density: 36.36363636363637%
* Maintainability index: 97.85821982598017
* Dependency count: 4
* Function: **uploads.upload**
    * Line No.: 12
    * Physical LOC: 38
    * Logical LOC: 23
    * Parameter count: 2
    * Cyclomatic complexity: 12
    * Cyclomatic complexity density: 52.17391304347826%
    * Halstead difficulty: 23.384615384615387
    * Halstead volume: 1130.5903320596215
    * Halstead effort: 26438.42007277884
* Function: **uploads.clear**
    * Line No.: 51
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.5
    * Halstead volume: 10
    * Halstead effort: 15

## src/socket.io/user.js

* Physical LOC: 189
* Logical LOC: 103
* Mean parameter count: 1.6
* Cyclomatic complexity: 22
* Cyclomatic complexity density: 21.35922330097087%
* Maintainability index: 125.35095159508128
* Dependency count: 19
* Function: **SocketUser.emailConfirm**
    * Line No.: 28
    * Physical LOC: 9
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 4.5
    * Halstead volume: 64.72503367497926
    * Halstead effort: 291.26265153740667
* Function: **&lt;anonymous>.send**
    * Line No.: 41
    * Physical LOC: 30
    * Logical LOC: 9
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 3.666666666666667
    * Halstead volume: 82.0447025077789
    * Halstead effort: 300.83057586185595
* Function: **logEvent**
    * Line No.: 49
    * Physical LOC: 9
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **&lt;anonymous>.commit**
    * Line No.: 72
    * Physical LOC: 25
    * Logical LOC: 11
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 36.36363636363637%
    * Halstead difficulty: 7.236842105263158
    * Halstead volume: 255.15831097164298
    * Halstead effort: 1846.5404083474164
* Function: **SocketUser.isFollowing**
    * Line No.: 98
    * Physical LOC: 7
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 4.375
    * Halstead volume: 47.548875021634686
    * Halstead effort: 208.02632821965176
* Function: **SocketUser.getUnreadCount**
    * Line No.: 106
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 2.6666666666666665
    * Halstead volume: 25.26619429851844
    * Halstead effort: 67.3765181293825
* Function: **SocketUser.getUnreadChatCount**
    * Line No.: 113
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 2.6666666666666665
    * Halstead volume: 25.26619429851844
    * Halstead effort: 67.3765181293825
* Function: **SocketUser.getUnreadCounts**
    * Line No.: 120
    * Physical LOC: 15
    * Logical LOC: 8
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 7
    * Halstead volume: 216.09640474436813
    * Halstead effort: 1512.674833210577
* Function: **SocketUser.getUserByUID**
    * Line No.: 136
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **SocketUser.getUserByUsername**
    * Line No.: 140
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **SocketUser.getUserByEmail**
    * Line No.: 144
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **SocketUser.setModerationNote**
    * Line No.: 148
    * Physical LOC: 19
    * Logical LOC: 12
    * Parameter count: 2
    * Cyclomatic complexity: 7
    * Cyclomatic complexity density: 58.333333333333336%
    * Halstead difficulty: 12.923076923076923
    * Halstead volume: 278.63137138648347
    * Halstead effort: 3600.7746456099403
* Function: **SocketUser.deleteUpload**
    * Line No.: 168
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 133.33333333333331%
    * Halstead difficulty: 4.5
    * Halstead volume: 68.11428751370197
    * Halstead effort: 306.51429381165883
* Function: **&lt;anonymous>.consent**
    * Line No.: 177
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **&lt;anonymous>.check**
    * Line No.: 181
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 6
    * Halstead volume: 53.1508495181978
    * Halstead effort: 318.90509710918684

## src/topics/bookmarks.js

* Physical LOC: 65
* Logical LOC: 25
* Mean parameter count: 1.8333333333333333
* Cyclomatic complexity: 3
* Cyclomatic complexity density: 12%
* Maintainability index: 134.0367302596067
* Dependency count: 3
* Function: **module.exports**
    * Line No.: 9
    * Physical LOC: 58
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 3.4285714285714284
    * Halstead volume: 102.97977094150824
    * Halstead effort: 353.07350037088537
* Function: **Topics.getUserBookmark**
    * Line No.: 10
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 2.3333333333333335
    * Halstead volume: 39.863137138648355
    * Halstead effort: 93.01398665684617
* Function: **Topics.getUserBookmarks**
    * Line No.: 17
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 3.333333333333333
    * Halstead volume: 51.89147427955947
    * Halstead effort: 172.97158093186488
* Function: **Topics.setUserBookmark**
    * Line No.: 24
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 4.754887502163468
    * Halstead effort: 0
* Function: **Topics.getTopicBookmarks**
    * Line No.: 28
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1
* Function: **Topics.updateTopicBookmarks**
    * Line No.: 32
    * Physical LOC: 34
    * Logical LOC: 7
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 14.285714285714285%
    * Halstead difficulty: 2.5
    * Halstead volume: 140
    * Halstead effort: 350

## src/topics/create.js

* Physical LOC: 309
* Logical LOC: 181
* Mean parameter count: 1.6
* Cyclomatic complexity: 39
* Cyclomatic complexity density: 21.54696132596685%
* Maintainability index: 95.07337101673932
* Dependency count: 12
* Function: **module.exports**
    * Line No.: 18
    * Physical LOC: 293
    * Logical LOC: 9
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 11.11111111111111%
    * Halstead difficulty: 2.727272727272727
    * Halstead volume: 148.48684196024655
    * Halstead effort: 404.964114437036
* Function: **Topics.create**
    * Line No.: 19
    * Physical LOC: 59
    * Logical LOC: 29
    * Parameter count: 1
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 17.24137931034483%
    * Halstead difficulty: 13.557142857142859
    * Halstead volume: 753.9699375973561
    * Halstead effort: 10221.678153998442
* Function: **Topics.post**
    * Line No.: 79
    * Physical LOC: 78
    * Logical LOC: 48
    * Parameter count: 1
    * Cyclomatic complexity: 14
    * Cyclomatic complexity density: 29.166666666666668%
    * Halstead difficulty: 19.51851851851852
    * Halstead volume: 1475.9393086811237
    * Halstead effort: 28808.148728701934
* Function: **Topics.reply**
    * Line No.: 158
    * Physical LOC: 54
    * Logical LOC: 34
    * Parameter count: 1
    * Cyclomatic complexity: 9
    * Cyclomatic complexity density: 26.47058823529412%
    * Halstead difficulty: 14.074074074074074
    * Halstead volume: 1078.7538109823142
    * Halstead effort: 15182.461043454794
* Function: **onNewPost**
    * Line No.: 213
    * Physical LOC: 34
    * Logical LOC: 19
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 5.263157894736842%
    * Halstead difficulty: 6
    * Halstead volume: 508.746284125034
    * Halstead effort: 3052.477704750204
* Function: **Topics.checkTitle**
    * Line No.: 248
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.375
    * Halstead volume: 53.1508495181978
    * Halstead effort: 73.08241808752197
* Function: **Topics.checkContent**
    * Line No.: 252
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.375
    * Halstead volume: 53.1508495181978
    * Halstead effort: 73.08241808752197
* Function: **check**
    * Line No.: 256
    * Physical LOC: 12
    * Logical LOC: 7
    * Parameter count: 5
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 85.71428571428571%
    * Halstead difficulty: 11.2
    * Halstead volume: 252.00903761466387
    * Halstead effort: 2822.5012212842353
* Function: **guestHandleValid**
    * Line No.: 269
    * Physical LOC: 11
    * Logical LOC: 6
    * Parameter count: 1
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 7.666666666666667
    * Halstead volume: 208.9735285398626
    * Halstead effort: 1602.13038547228
* Function: **canReply**
    * Line No.: 281
    * Physical LOC: 29
    * Logical LOC: 13
    * Parameter count: 2
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 46.15384615384615%
    * Halstead difficulty: 6.192307692307692
    * Halstead volume: 233.38411712391758
    * Halstead effort: 1445.186263728874

## src/topics/data.js

* Physical LOC: 142
* Logical LOC: 70
* Mean parameter count: 1.6923076923076923
* Cyclomatic complexity: 24
* Cyclomatic complexity density: 34.285714285714285%
* Maintainability index: 121.40930904821035
* Dependency count: 6
* Function: **module.exports**
    * Line No.: 18
    * Physical LOC: 63
    * Logical LOC: 10
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 10%
    * Halstead difficulty: 3.875
    * Halstead volume: 238.32032633211963
    * Halstead effort: 923.4912645369636
* Function: **Topics.getTopicsFields**
    * Line No.: 19
    * Physical LOC: 21
    * Logical LOC: 9
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 44.44444444444444%
    * Halstead difficulty: 9
    * Halstead volume: 269.343659006934
    * Halstead effort: 2424.092931062406
* Function: **Topics.getTopicField**
    * Line No.: 41
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 4.375
    * Halstead volume: 38.03910001730775
    * Halstead effort: 166.4210625757214
* Function: **Topics.getTopicFields**
    * Line No.: 46
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 3.5
    * Halstead volume: 39.863137138648355
    * Halstead effort: 139.52097998526924
* Function: **Topics.getTopicData**
    * Line No.: 51
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 4.800000000000001
    * Halstead volume: 51.89147427955947
    * Halstead effort: 249.07907654188548
* Function: **Topics.getTopicsData**
    * Line No.: 56
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1
* Function: **Topics.getCategoryData**
    * Line No.: 60
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.5
    * Halstead volume: 11.60964047443681
    * Halstead effort: 17.414460711655217
* Function: **Topics.setTopicField**
    * Line No.: 65
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 4.754887502163468
    * Halstead effort: 0
* Function: **Topics.setTopicFields**
    * Line No.: 69
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 2
    * Halstead effort: 0
* Function: **Topics.deleteTopicField**
    * Line No.: 73
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 2
    * Halstead effort: 0
* Function: **Topics.deleteTopicFields**
    * Line No.: 77
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 2
    * Halstead effort: 0
* Function: **escapeTitle**
    * Line No.: 82
    * Physical LOC: 10
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 80%
    * Halstead difficulty: 6.666666666666667
    * Halstead volume: 122.91133951083242
    * Halstead effort: 819.4089300722162
* Function: **modifyTopic**
    * Line No.: 93
    * Physical LOC: 50
    * Logical LOC: 22
    * Parameter count: 2
    * Cyclomatic complexity: 15
    * Cyclomatic complexity density: 68.18181818181817%
    * Halstead difficulty: 12.500000000000002
    * Halstead volume: 1110.0210649967348
    * Halstead effort: 13875.263312459187

## src/topics/delete.js

* Physical LOC: 141
* Logical LOC: 57
* Mean parameter count: 1.3
* Cyclomatic complexity: 2
* Cyclomatic complexity density: 3.508771929824561%
* Maintainability index: 127.29780870958325
* Dependency count: 6
* Function: **module.exports**
    * Line No.: 12
    * Physical LOC: 130
    * Logical LOC: 9
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 11.11111111111111%
    * Halstead difficulty: 2.4545454545454546
    * Halstead volume: 133.25742227201613
    * Halstead effort: 327.0864001222214
* Function: **Topics.delete**
    * Line No.: 13
    * Physical LOC: 8
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 0
    * Halstead volume: 2
    * Halstead effort: 0
* Function: **removeTopicPidsFromCid**
    * Line No.: 22
    * Physical LOC: 8
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 1
    * Halstead volume: 4.754887502163468
    * Halstead effort: 4.754887502163468
* Function: **addTopicPidsToCid**
    * Line No.: 31
    * Physical LOC: 12
    * Logical LOC: 7
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 14.285714285714285%
    * Halstead difficulty: 4.583333333333333
    * Halstead volume: 89.94522208456974
    * Halstead effort: 412.2489345542779
* Function: **Topics.restore**
    * Line No.: 44
    * Physical LOC: 9
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **Topics.purgePostsAndTopic**
    * Line No.: 54
    * Physical LOC: 8
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 1
    * Halstead volume: 11.60964047443681
    * Halstead effort: 11.60964047443681
* Function: **Topics.purge**
    * Line No.: 63
    * Physical LOC: 37
    * Logical LOC: 10
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 6.75
    * Halstead volume: 118.94197037642039
    * Halstead effort: 802.8583000408375
* Function: **deleteFromFollowersIgnorers**
    * Line No.: 101
    * Physical LOC: 9
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 2.3333333333333335
    * Halstead volume: 56.472777613085164
    * Halstead effort: 131.76981443053205
* Function: **deleteTopicFromCategoryAndUser**
    * Line No.: 111
    * Physical LOC: 18
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 1
    * Halstead volume: 8
    * Halstead effort: 8
* Function: **reduceCounters**
    * Line No.: 130
    * Physical LOC: 11
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 3.333333333333333
    * Halstead volume: 58.81033751683406
    * Halstead effort: 196.03445838944685

## src/topics/events.js

* Physical LOC: 212
* Logical LOC: 74
* Mean parameter count: 1
* Cyclomatic complexity: 3
* Cyclomatic complexity density: 4.054054054054054%
* Maintainability index: 112.24908774468366
* Dependency count: 9
* Function: **getUserInfo**
    * Line No.: 94
    * Physical LOC: 10
    * Logical LOC: 6
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 16.666666666666664%
    * Halstead difficulty: 5.818181818181818
    * Halstead volume: 131.68575291675114
    * Halstead effort: 766.1716533338248
* Function: **getCategoryInfo**
    * Line No.: 105
    * Physical LOC: 5
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 4.166666666666667
    * Halstead volume: 65.72920075410866
    * Halstead effort: 273.8716698087861
* Function: **modifyEvent**
    * Line No.: 111
    * Physical LOC: 57
    * Logical LOC: 16
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 18.75%
    * Halstead difficulty: 8.571428571428571
    * Halstead volume: 303.2413500673362
    * Halstead effort: 2599.211572005739

## src/topics/fork.js

* Physical LOC: 158
* Logical LOC: 80
* Mean parameter count: 2.75
* Cyclomatic complexity: 20
* Cyclomatic complexity density: 25%
* Maintainability index: 93.0056072904837
* Dependency count: 6
* Function: **module.exports**
    * Line No.: 11
    * Physical LOC: 149
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 2.4000000000000004
    * Halstead volume: 45
    * Halstead effort: 108.00000000000001
* Function: **Topics.createTopicFromPosts**
    * Line No.: 12
    * Physical LOC: 68
    * Logical LOC: 31
    * Parameter count: 4
    * Cyclomatic complexity: 7
    * Cyclomatic complexity density: 22.58064516129032%
    * Halstead difficulty: 16.774193548387096
    * Halstead volume: 733.2057284214482
    * Halstead effort: 12298.934799327517
* Function: **Topics.movePostToTopic**
    * Line No.: 81
    * Physical LOC: 38
    * Logical LOC: 22
    * Parameter count: 4
    * Cyclomatic complexity: 7
    * Cyclomatic complexity density: 31.818181818181817%
    * Halstead difficulty: 13.282608695652176
    * Halstead volume: 475.63310013269273
    * Halstead effort: 6317.6483517625065
* Function: **updateCategory**
    * Line No.: 120
    * Physical LOC: 39
    * Logical LOC: 16
    * Parameter count: 2
    * Cyclomatic complexity: 8
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 21.89473684210526
    * Halstead volume: 620
    * Halstead effort: 13574.736842105262

## src/topics/merge.js

* Physical LOC: 82
* Logical LOC: 39
* Mean parameter count: 1.8
* Cyclomatic complexity: 5
* Cyclomatic complexity density: 12.82051282051282%
* Maintainability index: 114.88228833828342
* Dependency count: 2
* Function: **module.exports**
    * Line No.: 6
    * Physical LOC: 77
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 1.75
    * Halstead volume: 41.20902501875006
    * Halstead effort: 72.1157937828126
* Function: **Topics.merge**
    * Line No.: 7
    * Physical LOC: 48
    * Logical LOC: 19
    * Parameter count: 3
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 26.31578947368421%
    * Halstead difficulty: 13.65
    * Halstead volume: 403.5515295486763
    * Halstead effort: 5508.478378339431
* Function: **createNewTopic**
    * Line No.: 56
    * Physical LOC: 14
    * Logical LOC: 8
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 12.5%
    * Halstead difficulty: 5.333333333333333
    * Halstead volume: 121.11360846386408
    * Halstead effort: 645.9392451406084
* Function: **updateViewCount**
    * Line No.: 71
    * Physical LOC: 7
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 2.3333333333333335
    * Halstead volume: 43.18506523353572
    * Halstead effort: 100.76515221158334
* Function: **findOldestTopic**
    * Line No.: 79
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.7999999999999998
    * Halstead volume: 30
    * Halstead effort: 53.99999999999999

## src/topics/recent.js

* Physical LOC: 78
* Logical LOC: 47
* Mean parameter count: 2.2857142857142856
* Cyclomatic complexity: 8
* Cyclomatic complexity density: 17.02127659574468%
* Maintainability index: 119.31960985540289
* Dependency count: 3
* Function: **module.exports**
    * Line No.: 8
    * Physical LOC: 72
    * Logical LOC: 11
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 9.090909090909092%
    * Halstead difficulty: 5.117647058823529
    * Halstead volume: 244.2723456270787
    * Halstead effort: 1250.0996511503438
* Function: **Topics.getRecentTopics**
    * Line No.: 16
    * Physical LOC: 10
    * Logical LOC: 1
    * Parameter count: 5
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 15.509775004326936
    * Halstead effort: 7.754887502163468
* Function: **Topics.getLatestTopics**
    * Line No.: 28
    * Physical LOC: 6
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 5
    * Halstead volume: 76.14709844115208
    * Halstead effort: 380.7354922057604
* Function: **Topics.getLatestTidsFromSet**
    * Line No.: 35
    * Physical LOC: 9
    * Logical LOC: 5
    * Parameter count: 4
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 60%
    * Halstead difficulty: 11.454545454545455
    * Halstead volume: 167.37179237410948
    * Halstead effort: 1917.1678035579814
* Function: **Topics.updateLastPostTimeFromLastPid**
    * Line No.: 45
    * Physical LOC: 11
    * Logical LOC: 7
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 42.857142857142854%
    * Halstead difficulty: 4.166666666666667
    * Halstead volume: 45
    * Halstead effort: 187.5
* Function: **Topics.updateLastPostTime**
    * Line No.: 57
    * Physical LOC: 12
    * Logical LOC: 6
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 3.125
    * Halstead volume: 31.699250014423125
    * Halstead effort: 99.06015629507226
* Function: **Topics.updateRecent**
    * Line No.: 70
    * Physical LOC: 9
    * Logical LOC: 7
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 42.857142857142854%
    * Halstead difficulty: 9
    * Halstead volume: 132
    * Halstead effort: 1188

## src/topics/scheduled.js

* Physical LOC: 129
* Logical LOC: 46
* Mean parameter count: 1.375
* Cyclomatic complexity: 3
* Cyclomatic complexity density: 6.521739130434782%
* Maintainability index: 128.8346870634121
* Dependency count: 8
* Function: **Scheduled.startJobs**
    * Line No.: 15
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.5
    * Halstead volume: 46.604512509375034
    * Halstead effort: 69.90676876406255
* Function: **Scheduled.handleExpired**
    * Line No.: 20
    * Physical LOC: 27
    * Logical LOC: 9
    * Parameter count: 0
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 22.22222222222222%
    * Halstead difficulty: 6.4
    * Halstead volume: 162.62707505625016
    * Halstead effort: 1040.813280360001
* Function: **Scheduled.pin**
    * Line No.: 49
    * Physical LOC: 12
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 2.7142857142857144
    * Halstead volume: 133.437600046154
    * Halstead effort: 362.1877715538466
* Function: **Scheduled.reschedule**
    * Line No.: 62
    * Physical LOC: 12
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.5
    * Halstead volume: 15.509775004326936
    * Halstead effort: 23.264662506490403
* Function: **unpin**
    * Line No.: 75
    * Physical LOC: 13
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 200%
    * Halstead difficulty: 5.138888888888888
    * Halstead volume: 262.36659345130676
    * Halstead effort: 1348.2727719025486
* Function: **sendNotifications**
    * Line No.: 89
    * Physical LOC: 19
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 3.75
    * Halstead volume: 159.41105080876326
    * Halstead effort: 597.7914405328622
* Function: **updateUserLastposttimes**
    * Line No.: 109
    * Physical LOC: 14
    * Logical LOC: 6
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 16.666666666666664%
    * Halstead difficulty: 5.5
    * Halstead volume: 206.43891887060175
    * Halstead effort: 1135.4140537883097
* Function: **shiftPostTimes**
    * Line No.: 124
    * Physical LOC: 6
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 2.916666666666667
    * Halstead volume: 48.43204266092217
    * Halstead effort: 141.26012442768968

## src/topics/sorted.js

* Physical LOC: 219
* Logical LOC: 131
* Mean parameter count: 1.5625
* Cyclomatic complexity: 29
* Cyclomatic complexity density: 22.137404580152673%
* Maintainability index: 111.43079695281041
* Dependency count: 7
* Function: **module.exports**
    * Line No.: 13
    * Physical LOC: 208
    * Logical LOC: 14
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 7.142857142857142%
    * Halstead difficulty: 1.78125
    * Halstead volume: 157.17331799741265
    * Halstead effort: 279.9649726828913
* Function: **Topics.getSortedTopics**
    * Line No.: 14
    * Physical LOC: 25
    * Logical LOC: 19
    * Parameter count: 1
    * Cyclomatic complexity: 7
    * Cyclomatic complexity density: 36.84210526315789%
    * Halstead difficulty: 21.56818181818182
    * Halstead volume: 718.0996223722952
    * Halstead effort: 15488.10321889337
* Function: **getTids**
    * Line No.: 40
    * Physical LOC: 25
    * Logical LOC: 23
    * Parameter count: 1
    * Cyclomatic complexity: 8
    * Cyclomatic complexity density: 34.78260869565217%
    * Halstead difficulty: 11.323529411764705
    * Halstead volume: 365.3589740763779
    * Halstead effort: 4137.153088806043
* Function: **getTagTids**
    * Line No.: 66
    * Physical LOC: 17
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 5.055555555555555
    * Halstead volume: 100
    * Halstead effort: 505.55555555555554
* Function: **getCidTids**
    * Line No.: 84
    * Physical LOC: 26
    * Logical LOC: 10
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 30%
    * Halstead difficulty: 6.944444444444445
    * Halstead volume: 254.78981086905299
    * Halstead effort: 1769.3736865906458
* Function: **sortTids**
    * Line No.: 111
    * Physical LOC: 22
    * Logical LOC: 15
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 26.666666666666668%
    * Halstead difficulty: 11.846153846153847
    * Halstead volume: 452.36388806542584
    * Halstead effort: 5358.772212467353
* Function: **floatPinned**
    * Line No.: 134
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.3333333333333333
    * Halstead volume: 13.931568569324174
    * Halstead effort: 18.575424759098897
* Function: **sortRecent**
    * Line No.: 138
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 3
    * Halstead volume: 25.84962500721156
    * Halstead effort: 77.54887502163469
* Function: **sortOld**
    * Line No.: 142
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 3
    * Halstead volume: 25.84962500721156
    * Halstead effort: 77.54887502163469
* Function: **sortVotes**
    * Line No.: 146
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 8.75
    * Halstead volume: 82.41805003750012
    * Halstead effort: 721.157937828126
* Function: **sortPopular**
    * Line No.: 153
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 8.75
    * Halstead volume: 82.41805003750012
    * Halstead effort: 721.157937828126
* Function: **sortViews**
    * Line No.: 160
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 3
    * Halstead volume: 25.84962500721156
    * Halstead effort: 77.54887502163469
* Function: **filterTids**
    * Line No.: 164
    * Physical LOC: 41
    * Logical LOC: 20
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 15%
    * Halstead difficulty: 12.157894736842106
    * Halstead volume: 441.6201536047667
    * Halstead effort: 5369.171341194796
* Function: **getIgnoredCids**
    * Line No.: 180
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 0
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 133.33333333333331%
    * Halstead difficulty: 3
    * Halstead volume: 68.53238859703687
    * Halstead effort: 205.59716579111063
* Function: **getTopics**
    * Line No.: 206
    * Physical LOC: 6
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 9.450000000000001
    * Halstead volume: 157.17331799741265
    * Halstead effort: 1485.2878550755497
* Function: **Topics.calculateTopicIndices**
    * Line No.: 213
    * Physical LOC: 7
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.3333333333333333
    * Halstead volume: 13.931568569324174
    * Halstead effort: 18.575424759098897

## src/topics/suggested.js

* Physical LOC: 69
* Logical LOC: 37
* Mean parameter count: 2.6
* Cyclomatic complexity: 6
* Cyclomatic complexity density: 16.216216216216218%
* Maintainability index: 114.96053033090652
* Dependency count: 5
* Function: **module.exports**
    * Line No.: 11
    * Physical LOC: 60
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 1.75
    * Halstead volume: 41.20902501875006
    * Halstead effort: 72.1157937828126
* Function: **Topics.getSuggestedTopics**
    * Line No.: 12
    * Physical LOC: 25
    * Logical LOC: 15
    * Parameter count: 5
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 26.666666666666668%
    * Halstead difficulty: 19.040000000000003
    * Halstead volume: 571.5856468145487
    * Halstead effort: 10882.990715349008
* Function: **getTidsWithSameTags**
    * Line No.: 38
    * Physical LOC: 8
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 5.846153846153846
    * Halstead volume: 162.51574464281416
    * Halstead effort: 950.0920456041442
* Function: **getSearchTids**
    * Line No.: 47
    * Physical LOC: 15
    * Logical LOC: 4
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 3.3928571428571432
    * Halstead volume: 152.92539048396907
    * Halstead effort: 518.8540034277522
* Function: **getCategoryTids**
    * Line No.: 63
    * Physical LOC: 7
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 4.2
    * Halstead volume: 102.1865710312585
    * Halstead effort: 429.1835983312857

## src/topics/tags.js

* Physical LOC: 527
* Logical LOC: 259
* Mean parameter count: 1.7142857142857142
* Cyclomatic complexity: 45
* Cyclomatic complexity density: 17.374517374517374%
* Maintainability index: 114.63918037801378
* Dependency count: 11
* Function: **module.exports**
    * Line No.: 17
    * Physical LOC: 512
    * Logical LOC: 34
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 2.941176470588235%
    * Halstead difficulty: 3.7083333333333335
    * Halstead volume: 935.516192738618
    * Halstead effort: 3469.2058814057086
* Function: **Topics.createTags**
    * Line No.: 18
    * Physical LOC: 13
    * Logical LOC: 7
    * Parameter count: 3
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 42.857142857142854%
    * Halstead difficulty: 6
    * Halstead volume: 137.6075250475963
    * Halstead effort: 825.6451502855779
* Function: **Topics.filterTags**
    * Line No.: 32
    * Physical LOC: 8
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 3.5714285714285716
    * Halstead volume: 75.28421251514429
    * Halstead effort: 268.8721875540868
* Function: **Topics.updateCategoryTagsCount**
    * Line No.: 41
    * Physical LOC: 24
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 0
    * Halstead volume: 2
    * Halstead effort: 0
* Function: **Topics.validateTags**
    * Line No.: 66
    * Physical LOC: 30
    * Logical LOC: 16
    * Parameter count: 4
    * Cyclomatic complexity: 7
    * Cyclomatic complexity density: 43.75%
    * Halstead difficulty: 12.775862068965516
    * Halstead volume: 647.0780907334513
    * Halstead effort: 8266.980435060126
* Function: **filterCategoryTags**
    * Line No.: 97
    * Physical LOC: 8
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 60%
    * Halstead difficulty: 7.6499999999999995
    * Halstead volume: 152.92539048396907
    * Halstead effort: 1169.8792372023634
* Function: **Topics.createEmptyTag**
    * Line No.: 106
    * Physical LOC: 20
    * Logical LOC: 12
    * Parameter count: 1
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 41.66666666666667%
    * Halstead difficulty: 6.388888888888888
    * Halstead volume: 245.1751010249378
    * Halstead effort: 1566.3964787704358
* Function: **Topics.renameTags**
    * Line No.: 127
    * Physical LOC: 6
    * Logical LOC: 0
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: Infinity%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **renameTag**
    * Line No.: 134
    * Physical LOC: 40
    * Logical LOC: 9
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 7.777777777777778
    * Halstead volume: 114.6940428629768
    * Halstead effort: 892.0647778231529
* Function: **updateTagCount**
    * Line No.: 175
    * Physical LOC: 5
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 2
    * Halstead volume: 28.529325012980813
    * Halstead effort: 57.058650025961626
* Function: **Topics.getTagTids**
    * Line No.: 181
    * Physical LOC: 5
    * Logical LOC: 3
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 2.8
    * Halstead volume: 41.20902501875006
    * Halstead effort: 115.38527005250016
* Function: **Topics.getTagTidsByCids**
    * Line No.: 187
    * Physical LOC: 6
    * Logical LOC: 4
    * Parameter count: 4
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 3.4375
    * Halstead volume: 77.70923408096293
    * Halstead effort: 267.12549215331006
* Function: **Topics.getTagTopicCount**
    * Line No.: 194
    * Physical LOC: 13
    * Logical LOC: 7
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 28.57142857142857%
    * Halstead difficulty: 5.833333333333334
    * Halstead volume: 77.70923408096293
    * Halstead effort: 453.3038654722838
* Function: **Topics.deleteTags**
    * Line No.: 208
    * Physical LOC: 22
    * Logical LOC: 12
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 5.884615384615385
    * Halstead volume: 169.4584015082173
    * Halstead effort: 997.1975165675865
* Function: **removeTagsFromTopics**
    * Line No.: 231
    * Physical LOC: 13
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **Topics.deleteTag**
    * Line No.: 245
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **Topics.getTags**
    * Line No.: 249
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **Topics.getCategoryTags**
    * Line No.: 253
    * Physical LOC: 10
    * Logical LOC: 3
    * Parameter count: 3
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 2.4
    * Halstead volume: 34.86917501586544
    * Halstead effort: 83.68602003807705
* Function: **Topics.getCategoryTagsData**
    * Line No.: 264
    * Physical LOC: 7
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 8
    * Halstead effort: 4
* Function: **getFromSet**
    * Line No.: 272
    * Physical LOC: 18
    * Logical LOC: 7
    * Parameter count: 3
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 28.57142857142857%
    * Halstead difficulty: 5.714285714285714
    * Halstead volume: 78.13781191217038
    * Halstead effort: 446.5017823552593
* Function: **Topics.getTagData**
    * Line No.: 291
    * Physical LOC: 11
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 5.25
    * Halstead volume: 49.82892142331044
    * Halstead effort: 261.6018374723798
* Function: **Topics.getTopicTags**
    * Line No.: 303
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 4.166666666666667
    * Halstead volume: 30
    * Halstead effort: 125.00000000000001
* Function: **Topics.getTopicsTags**
    * Line No.: 308
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3.333333333333333
    * Halstead volume: 27
    * Halstead effort: 89.99999999999999
* Function: **Topics.getTopicTagsObjects**
    * Line No.: 313
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 5.714285714285714
    * Halstead volume: 78.13781191217038
    * Halstead effort: 446.5017823552593
* Function: **Topics.getTopicsTagsObjects**
    * Line No.: 318
    * Physical LOC: 16
    * Logical LOC: 7
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 14.285714285714285%
    * Halstead difficulty: 4.166666666666667
    * Halstead volume: 167.58597649126395
    * Halstead effort: 698.2749020469332
* Function: **Topics.addTags**
    * Line No.: 335
    * Physical LOC: 23
    * Logical LOC: 7
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 14.285714285714285%
    * Halstead difficulty: 3.2142857142857144
    * Halstead volume: 68.11428751370197
    * Halstead effort: 218.93878129404206
* Function: **Topics.removeTags**
    * Line No.: 359
    * Physical LOC: 24
    * Logical LOC: 7
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 14.285714285714285%
    * Halstead difficulty: 3.2142857142857144
    * Halstead volume: 68.11428751370197
    * Halstead effort: 218.93878129404206
* Function: **Topics.updateTopicTags**
    * Line No.: 384
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 1.3333333333333333
    * Halstead volume: 16.253496664211536
    * Halstead effort: 21.67132888561538
* Function: **Topics.deleteTopicTags**
    * Line No.: 392
    * Physical LOC: 13
    * Logical LOC: 8
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 12.5%
    * Halstead difficulty: 4.333333333333333
    * Halstead volume: 99.65784284662088
    * Halstead effort: 431.8506523353571
* Function: **Topics.searchTags**
    * Line No.: 406
    * Physical LOC: 13
    * Logical LOC: 9
    * Parameter count: 1
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 44.44444444444444%
    * Halstead difficulty: 8.333333333333334
    * Halstead volume: 140.1816079436383
    * Halstead effort: 1168.180066196986
* Function: **Topics.autocompleteTags**
    * Line No.: 420
    * Physical LOC: 12
    * Logical LOC: 8
    * Parameter count: 1
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 7.777777777777778
    * Halstead volume: 131.68575291675114
    * Halstead effort: 1024.2225226858423
* Function: **getAllTags**
    * Line No.: 433
    * Physical LOC: 9
    * Logical LOC: 6
    * Parameter count: 0
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 6.5
    * Halstead volume: 95.18387305144009
    * Halstead effort: 618.6951748343606
* Function: **findMatches**
    * Line No.: 443
    * Physical LOC: 43
    * Logical LOC: 24
    * Parameter count: 1
    * Cyclomatic complexity: 7
    * Cyclomatic complexity density: 29.166666666666668%
    * Halstead difficulty: 21.25
    * Halstead volume: 669.6940005772605
    * Halstead effort: 14230.997512266784
* Function: **Topics.searchAndLoadTags**
    * Line No.: 487
    * Physical LOC: 23
    * Logical LOC: 14
    * Parameter count: 1
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 28.57142857142857%
    * Halstead difficulty: 13.96153846153846
    * Halstead volume: 302.60752504759637
    * Halstead effort: 4224.866599702979
* Function: **Topics.getRelatedTopics**
    * Line No.: 511
    * Physical LOC: 17
    * Logical LOC: 11
    * Parameter count: 2
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 54.54545454545454%
    * Halstead difficulty: 8.9375
    * Halstead volume: 410.3426413555973
    * Halstead effort: 3667.437357115651

## src/topics/teaser.js

* Physical LOC: 175
* Logical LOC: 87
* Mean parameter count: 1.7
* Cyclomatic complexity: 16
* Cyclomatic complexity density: 18.39080459770115%
* Maintainability index: 111.7865178684678
* Dependency count: 7
* Function: **module.exports**
    * Line No.: 13
    * Physical LOC: 164
    * Logical LOC: 8
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 12.5%
    * Halstead difficulty: 2.55
    * Halstead volume: 122.11451069865605
    * Halstead effort: 311.3920022815729
* Function: **Topics.getTeasers**
    * Line No.: 14
    * Physical LOC: 79
    * Logical LOC: 26
    * Parameter count: 2
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 19.230769230769234%
    * Halstead difficulty: 12.790322580645162
    * Halstead volume: 737.0232685160352
    * Halstead effort: 9426.765353761546
* Function: **calcTeaserIndex**
    * Line No.: 94
    * Physical LOC: 10
    * Logical LOC: 5
    * Parameter count: 3
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 60%
    * Halstead difficulty: 3.75
    * Halstead volume: 74.00879436282185
    * Halstead effort: 277.5329788605819
* Function: **replaceImgWithAltText**
    * Line No.: 105
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.7999999999999998
    * Halstead volume: 30
    * Halstead effort: 53.99999999999999
* Function: **handleBlocks**
    * Line No.: 109
    * Physical LOC: 13
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 4.5
    * Halstead volume: 43.18506523353572
    * Halstead effort: 194.33279355091074
* Function: **getPreviousNonBlockedPost**
    * Line No.: 123
    * Physical LOC: 30
    * Logical LOC: 19
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 15.789473684210526%
    * Halstead difficulty: 15.357142857142856
    * Halstead volume: 434.2737001211542
    * Halstead effort: 6669.203251860582
* Function: **checkBlocked**
    * Line No.: 131
    * Physical LOC: 5
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 5.6875
    * Halstead volume: 89.85848369899593
    * Halstead effort: 511.07012603803935
* Function: **Topics.getTeasersByTids**
    * Line No.: 154
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 75%
    * Halstead difficulty: 5.7857142857142865
    * Halstead volume: 84
    * Halstead effort: 486.00000000000006
* Function: **Topics.getTeaser**
    * Line No.: 162
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 4.8125
    * Halstead volume: 78.13781191217038
    * Halstead effort: 376.03821982731995
* Function: **Topics.updateTeaser**
    * Line No.: 167
    * Physical LOC: 9
    * Logical LOC: 6
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 5
    * Halstead volume: 36
    * Halstead effort: 180

## src/topics/thumbs.js

* Physical LOC: 161
* Logical LOC: 86
* Mean parameter count: 1.4285714285714286
* Cyclomatic complexity: 14
* Cyclomatic complexity density: 16.27906976744186%
* Maintainability index: 108.81798657511172
* Dependency count: 12
* Function: **Thumbs.exists**
    * Line No.: 18
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 3.333333333333333
    * Halstead volume: 83.76180828526728
    * Halstead effort: 279.2060276175576
* Function: **Thumbs.load**
    * Line No.: 25
    * Physical LOC: 7
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 4.166666666666667
    * Halstead volume: 121.83535750584332
    * Halstead effort: 507.64732294101384
* Function: **Thumbs.get**
    * Line No.: 33
    * Physical LOC: 28
    * Logical LOC: 13
    * Parameter count: 1
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 46.15384615384615%
    * Halstead difficulty: 10.434782608695652
    * Halstead volume: 435.98905644032214
    * Halstead effort: 4549.451023725101
* Function: **getThumbs**
    * Line No.: 62
    * Physical LOC: 9
    * Logical LOC: 6
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 8
    * Halstead volume: 121.83535750584332
    * Halstead effort: 974.6828600467466
* Function: **Thumbs.associate**
    * Line No.: 72
    * Physical LOC: 25
    * Logical LOC: 15
    * Parameter count: 1
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 26.666666666666668%
    * Halstead difficulty: 4.717391304347826
    * Halstead volume: 323.85477931016226
    * Halstead effort: 1527.7497197892437
* Function: **Thumbs.migrate**
    * Line No.: 98
    * Physical LOC: 12
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 2.3333333333333335
    * Halstead volume: 43.18506523353572
    * Halstead effort: 100.76515221158334
* Function: **Thumbs.delete**
    * Line No.: 111
    * Physical LOC: 44
    * Logical LOC: 19
    * Parameter count: 2
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 26.31578947368421%
    * Halstead difficulty: 10.291666666666666
    * Halstead volume: 437.59408271283183
    * Halstead effort: 4503.572434586227

## src/topics/tools.js

* Physical LOC: 295
* Logical LOC: 163
* Mean parameter count: 2.1538461538461537
* Cyclomatic complexity: 34
* Cyclomatic complexity density: 20.858895705521473%
* Maintainability index: 101.10648939944866
* Dependency count: 8
* Function: **module.exports**
    * Line No.: 14
    * Physical LOC: 282
    * Logical LOC: 16
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 6.25%
    * Halstead difficulty: 5.555555555555555
    * Halstead volume: 357.36139452850404
    * Halstead effort: 1985.3410807139112
* Function: **topicTools.delete**
    * Line No.: 18
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **topicTools.restore**
    * Line No.: 22
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **toggleDelete**
    * Line No.: 26
    * Physical LOC: 46
    * Logical LOC: 37
    * Parameter count: 3
    * Cyclomatic complexity: 11
    * Cyclomatic complexity density: 29.72972972972973%
    * Halstead difficulty: 22.983870967741936
    * Halstead volume: 1032.9060857826614
    * Halstead effort: 23740.180197424073
* Function: **topicTools.purge**
    * Line No.: 73
    * Physical LOC: 13
    * Logical LOC: 11
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 27.27272727272727%
    * Halstead difficulty: 10
    * Halstead volume: 152.92539048396907
    * Halstead effort: 1529.2539048396907
* Function: **topicTools.lock**
    * Line No.: 87
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **topicTools.unlock**
    * Line No.: 91
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **toggleLock**
    * Line No.: 95
    * Physical LOC: 17
    * Logical LOC: 14
    * Parameter count: 3
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 28.57142857142857%
    * Halstead difficulty: 9.899999999999999
    * Halstead volume: 315
    * Halstead effort: 3118.4999999999995
* Function: **topicTools.pin**
    * Line No.: 113
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **topicTools.unpin**
    * Line No.: 117
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **togglePin**
    * Line No.: 152
    * Physical LOC: 49
    * Logical LOC: 27
    * Parameter count: 3
    * Cyclomatic complexity: 8
    * Cyclomatic complexity density: 29.629629629629626%
    * Halstead difficulty: 18.833333333333336
    * Halstead volume: 1217.492568250068
    * Halstead effort: 22929.443368709617
* Function: **topicTools.orderPinnedTopics**
    * Line No.: 202
    * Physical LOC: 30
    * Logical LOC: 15
    * Parameter count: 2
    * Cyclomatic complexity: 8
    * Cyclomatic complexity density: 53.333333333333336%
    * Halstead difficulty: 15.34090909090909
    * Halstead volume: 484.4791630034924
    * Halstead effort: 7432.350796076303
* Function: **topicTools.move**
    * Line No.: 233
    * Physical LOC: 62
    * Logical LOC: 27
    * Parameter count: 2
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 18.51851851851852%
    * Halstead difficulty: 17.014705882352942
    * Halstead volume: 894.2888051200997
    * Halstead effort: 15216.060992999344

## src/topics/unread.js

* Physical LOC: 388
* Logical LOC: 213
* Mean parameter count: 1.3636363636363635
* Cyclomatic complexity: 34
* Cyclomatic complexity density: 15.96244131455399%
* Maintainability index: 107.87648817502861
* Dependency count: 12
* Function: **module.exports**
    * Line No.: 17
    * Physical LOC: 373
    * Logical LOC: 21
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 4.761904761904762%
    * Halstead difficulty: 3.521739130434783
    * Halstead volume: 502.9470498410969
    * Halstead effort: 1771.248305962124
* Function: **Topics.getTotalUnread**
    * Line No.: 18
    * Physical LOC: 5
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 6.75
    * Halstead volume: 53.1508495181978
    * Halstead effort: 358.76823424783515
* Function: **Topics.getUnreadTopics**
    * Line No.: 24
    * Physical LOC: 24
    * Logical LOC: 16
    * Parameter count: 1
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 18.55263157894737
    * Halstead volume: 452.78419287128025
    * Halstead effort: 8400.33831511191
* Function: **Topics.unreadCutoff**
    * Line No.: 49
    * Physical LOC: 5
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 4.136363636363637
    * Halstead volume: 108.41805003750011
    * Halstead effort: 448.45647970056865
* Function: **Topics.getUnreadTids**
    * Line No.: 55
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 4
    * Halstead volume: 49.82892142331044
    * Halstead effort: 199.31568569324176
* Function: **Topics.getUnreadData**
    * Line No.: 60
    * Physical LOC: 25
    * Logical LOC: 9
    * Parameter count: 1
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 12.100000000000001
    * Halstead volume: 314.9294611154532
    * Halstead effort: 3810.6464794969843
* Function: **getTids**
    * Line No.: 86
    * Physical LOC: 94
    * Logical LOC: 46
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 6.521739130434782%
    * Halstead difficulty: 19.204545454545453
    * Halstead volume: 1504.8856236545034
    * Halstead effort: 28900.644363364892
* Function: **getCategoryTids**
    * Line No.: 181
    * Physical LOC: 12
    * Logical LOC: 8
    * Parameter count: 1
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 5.7857142857142865
    * Halstead volume: 180.94247824228052
    * Halstead effort: 1046.881481258909
* Function: **getFollowedTids**
    * Line No.: 194
    * Physical LOC: 11
    * Logical LOC: 8
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 8.88888888888889
    * Halstead volume: 188.02329069751565
    * Halstead effort: 1671.3181395334725
* Function: **filterTidsThatHaveBlockedPosts**
    * Line No.: 206
    * Physical LOC: 16
    * Logical LOC: 6
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 5.5
    * Halstead volume: 188.86964917948671
    * Halstead effort: 1038.783070487177
* Function: **doesTidHaveUnblockedUnreadPosts**
    * Line No.: 223
    * Physical LOC: 27
    * Logical LOC: 19
    * Parameter count: 2
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 26.31578947368421%
    * Halstead difficulty: 12.617647058823529
    * Halstead volume: 384.5883937646083
    * Halstead effort: 4852.6006154416755
* Function: **Topics.pushUnreadCount**
    * Line No.: 251
    * Physical LOC: 12
    * Logical LOC: 8
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 37.5%
    * Halstead difficulty: 7.236842105263158
    * Halstead volume: 230.62385799360038
    * Halstead effort: 1668.9884460063188
* Function: **Topics.markAsUnreadForAll**
    * Line No.: 264
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **Topics.markAsRead**
    * Line No.: 268
    * Physical LOC: 37
    * Logical LOC: 19
    * Parameter count: 2
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 26.31578947368421%
    * Halstead difficulty: 10
    * Halstead volume: 524.008672648785
    * Halstead effort: 5240.086726487851
* Function: **Topics.markAllRead**
    * Line No.: 306
    * Physical LOC: 7
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 2.8
    * Halstead volume: 41.20902501875006
    * Halstead effort: 115.38527005250016
* Function: **Topics.markTopicNotificationsRead**
    * Line No.: 314
    * Physical LOC: 8
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 60%
    * Halstead difficulty: 5.333333333333333
    * Halstead volume: 102.1865710312585
    * Halstead effort: 544.9950455000453
* Function: **Topics.markCategoryUnreadForAll**
    * Line No.: 323
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1
    * Halstead volume: 8
    * Halstead effort: 8
* Function: **Topics.hasReadTopics**
    * Line No.: 328
    * Physical LOC: 34
    * Logical LOC: 6
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 6
    * Halstead volume: 112
    * Halstead effort: 672
* Function: **Topics.hasReadTopic**
    * Line No.: 363
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 4.8125
    * Halstead volume: 78.13781191217038
    * Halstead effort: 376.03821982731995
* Function: **Topics.markUnread**
    * Line No.: 368
    * Physical LOC: 8
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 3.5999999999999996
    * Halstead volume: 41.51317942364757
    * Halstead effort: 149.44744592513123
* Function: **Topics.filterNewTids**
    * Line No.: 377
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 5
    * Halstead volume: 80
    * Halstead effort: 400
* Function: **Topics.filterUnrepliedTids**
    * Line No.: 385
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3.333333333333333
    * Halstead volume: 27
    * Halstead effort: 89.99999999999999

## src/topics/user.js

* Physical LOC: 18
* Logical LOC: 11
* Mean parameter count: 1.3333333333333333
* Cyclomatic complexity: 2
* Cyclomatic complexity density: 18.181818181818183%
* Maintainability index: 137.0606332269293
* Dependency count: 1
* Function: **module.exports**
    * Line No.: 5
    * Physical LOC: 14
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 2.625
    * Halstead volume: 36.49561398674886
    * Halstead effort: 95.80098671521576
* Function: **Topics.isOwner**
    * Line No.: 6
    * Physical LOC: 8
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 6
    * Halstead volume: 79.95445336320968
    * Halstead effort: 479.7267201792581
* Function: **Topics.getUids**
    * Line No.: 15
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1

## src/types/admin.js

* Physical LOC: 2
* Logical LOC: 3
* Mean parameter count: 0
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 33.33333333333333%
* Maintainability index: 137.96705861608794
* Dependency count: 0

## src/types/breadcrumbs.js

* Physical LOC: 2
* Logical LOC: 3
* Mean parameter count: 0
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 33.33333333333333%
* Maintainability index: 137.96705861608794
* Dependency count: 0

## src/types/category.js

* Physical LOC: 2
* Logical LOC: 3
* Mean parameter count: 0
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 33.33333333333333%
* Maintainability index: 137.96705861608794
* Dependency count: 0

## src/types/chat.js

* Physical LOC: 2
* Logical LOC: 3
* Mean parameter count: 0
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 33.33333333333333%
* Maintainability index: 137.96705861608794
* Dependency count: 0

## src/types/commonProps.js

* Physical LOC: 2
* Logical LOC: 3
* Mean parameter count: 0
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 33.33333333333333%
* Maintainability index: 137.96705861608794
* Dependency count: 0

## src/types/error.js

* Physical LOC: 2
* Logical LOC: 3
* Mean parameter count: 0
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 33.33333333333333%
* Maintainability index: 137.96705861608794
* Dependency count: 0

## src/types/flag.js

* Physical LOC: 2
* Logical LOC: 3
* Mean parameter count: 0
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 33.33333333333333%
* Maintainability index: 137.96705861608794
* Dependency count: 0

## src/types/group.js

* Physical LOC: 2
* Logical LOC: 3
* Mean parameter count: 0
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 33.33333333333333%
* Maintainability index: 137.96705861608794
* Dependency count: 0

## src/types/index.js

* Physical LOC: 30
* Logical LOC: 35
* Mean parameter count: 2.5
* Cyclomatic complexity: 11
* Cyclomatic complexity density: 31.428571428571427%
* Maintainability index: 124.21002369740464
* Dependency count: 14
* Function: **&lt;anonymous>**
    * Line No.: 2
    * Physical LOC: 8
    * Logical LOC: 8
    * Parameter count: 4
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 75%
    * Halstead difficulty: 12.617647058823529
    * Halstead volume: 279.69276394968557
    * Halstead effort: 3529.064580423974
* Function: **get**
    * Line No.: 6
    * Physical LOC: 1
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1
    * Halstead volume: 8
    * Halstead effort: 8
* Function: **&lt;anonymous>**
    * Line No.: 9
    * Physical LOC: 4
    * Logical LOC: 3
    * Parameter count: 4
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 4.8
    * Halstead volume: 57.058650025961626
    * Halstead effort: 273.8815201246158
* Function: **&lt;anonymous>**
    * Line No.: 13
    * Physical LOC: 3
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 7.111111111111111
    * Halstead volume: 110.36149671375918
    * Halstead effort: 784.7928655200652

## src/types/pagination.js

* Physical LOC: 2
* Logical LOC: 3
* Mean parameter count: 0
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 33.33333333333333%
* Maintainability index: 137.96705861608794
* Dependency count: 0

## src/types/post.js

* Physical LOC: 3
* Logical LOC: 3
* Mean parameter count: 0
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 33.33333333333333%
* Maintainability index: 137.96705861608794
* Dependency count: 0

## src/types/settings.js

* Physical LOC: 2
* Logical LOC: 3
* Mean parameter count: 0
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 33.33333333333333%
* Maintainability index: 137.96705861608794
* Dependency count: 0

## src/types/social.js

* Physical LOC: 2
* Logical LOC: 3
* Mean parameter count: 0
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 33.33333333333333%
* Maintainability index: 137.96705861608794
* Dependency count: 0

## src/types/status.js

* Physical LOC: 2
* Logical LOC: 3
* Mean parameter count: 0
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 33.33333333333333%
* Maintainability index: 137.96705861608794
* Dependency count: 0

## src/types/tag.js

* Physical LOC: 2
* Logical LOC: 3
* Mean parameter count: 0
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 33.33333333333333%
* Maintainability index: 137.96705861608794
* Dependency count: 0

## src/types/topic.js

* Physical LOC: 2
* Logical LOC: 3
* Mean parameter count: 0
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 33.33333333333333%
* Maintainability index: 137.96705861608794
* Dependency count: 0

## src/types/user.js

* Physical LOC: 2
* Logical LOC: 3
* Mean parameter count: 0
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 33.33333333333333%
* Maintainability index: 137.96705861608794
* Dependency count: 0

## src/user/admin.js

* Physical LOC: 88
* Logical LOC: 34
* Mean parameter count: 1
* Cyclomatic complexity: 4
* Cyclomatic complexity density: 11.76470588235294%
* Maintainability index: 124.52929495449564
* Dependency count: 8
* Function: **module.exports**
    * Line No.: 14
    * Physical LOC: 76
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 3.25
    * Halstead volume: 79.24812503605781
    * Halstead effort: 257.5564063671879
* Function: **User.logIP**
    * Line No.: 15
    * Physical LOC: 13
    * Logical LOC: 7
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 57.14285714285714%
    * Halstead difficulty: 9.545454545454547
    * Halstead volume: 171.30037948837168
    * Halstead effort: 1635.1399860253662
* Function: **User.getIPs**
    * Line No.: 29
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3.125
    * Halstead volume: 31.699250014423125
    * Halstead effort: 99.06015629507226
* Function: **User.getUsersCSV**
    * Line No.: 34
    * Physical LOC: 15
    * Logical LOC: 5
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 3.5999999999999996
    * Halstead volume: 44.97261104228487
    * Halstead effort: 161.9013997522255
* Function: **User.exportUsersCSV**
    * Line No.: 50
    * Physical LOC: 39
    * Logical LOC: 6
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 16.666666666666664%
    * Halstead difficulty: 2.2857142857142856
    * Halstead volume: 58.81033751683406
    * Halstead effort: 134.42362860990642

## src/user/approval.js

* Physical LOC: 167
* Logical LOC: 91
* Mean parameter count: 1
* Cyclomatic complexity: 7
* Cyclomatic complexity density: 7.6923076923076925%
* Maintainability index: 119.15049362939779
* Dependency count: 11
* Function: **module.exports**
    * Line No.: 16
    * Physical LOC: 152
    * Logical LOC: 12
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 8.333333333333332%
    * Halstead difficulty: 3.2941176470588234
    * Halstead volume: 228.40050598449557
    * Halstead effort: 752.3781373606912
* Function: **User.addToApprovalQueue**
    * Line No.: 21
    * Physical LOC: 16
    * Logical LOC: 13
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 7.6923076923076925%
    * Halstead difficulty: 7.090909090909092
    * Halstead volume: 200.28567922126666
    * Halstead effort: 1420.207543568982
* Function: **canQueue**
    * Line No.: 38
    * Physical LOC: 13
    * Logical LOC: 9
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 7.714285714285714
    * Halstead volume: 254.18760226232595
    * Halstead effort: 1960.8757888808002
* Function: **sendNotificationToAdmins**
    * Line No.: 52
    * Physical LOC: 10
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1
    * Halstead volume: 8
    * Halstead effort: 8
* Function: **User.acceptRegistration**
    * Line No.: 63
    * Physical LOC: 25
    * Logical LOC: 14
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 14.285714285714285%
    * Halstead difficulty: 4.375
    * Halstead volume: 97.67226489021297
    * Halstead effort: 427.31615889468173
* Function: **markNotificationRead**
    * Line No.: 89
    * Physical LOC: 6
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 2.4
    * Halstead volume: 44.37895002019238
    * Halstead effort: 106.5094800484617
* Function: **User.rejectRegistration**
    * Line No.: 96
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **removeFromQueue**
    * Line No.: 101
    * Physical LOC: 6
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **User.shouldQueueUser**
    * Line No.: 108
    * Physical LOC: 10
    * Logical LOC: 8
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 37.5%
    * Halstead difficulty: 4.888888888888889
    * Halstead volume: 106.27403387250884
    * Halstead effort: 519.5619433767099
* Function: **User.getRegistrationQueue**
    * Line No.: 119
    * Physical LOC: 31
    * Logical LOC: 7
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 14.285714285714285%
    * Halstead difficulty: 5.666666666666666
    * Halstead volume: 140.64806144190666
    * Halstead effort: 797.0056815041377
* Function: **getIPMatchedUsers**
    * Line No.: 151
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 2
    * Halstead volume: 20.67970000576925
    * Halstead effort: 41.3594000115385
* Function: **User.autoApprove**
    * Line No.: 156
    * Physical LOC: 11
    * Logical LOC: 4
    * Parameter count: 0
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 4
    * Halstead volume: 72.33974351909447
    * Halstead effort: 289.3589740763779

## src/user/auth.js

* Physical LOC: 163
* Logical LOC: 81
* Mean parameter count: 1.4166666666666667
* Cyclomatic complexity: 12
* Cyclomatic complexity density: 14.814814814814813%
* Maintainability index: 119.85060787088251
* Dependency count: 9
* Function: **module.exports**
    * Line No.: 13
    * Physical LOC: 151
    * Logical LOC: 14
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 7.142857142857142%
    * Halstead difficulty: 8
    * Halstead volume: 444.74136256995223
    * Halstead effort: 3557.930900559618
* Function: **&lt;anonymous>.logAttempt**
    * Line No.: 16
    * Physical LOC: 25
    * Logical LOC: 14
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 28.57142857142857%
    * Halstead difficulty: 8.625
    * Halstead volume: 230.75303625876498
    * Halstead effort: 1990.244937731848
* Function: **&lt;anonymous>.getFeedToken**
    * Line No.: 42
    * Physical LOC: 11
    * Logical LOC: 7
    * Parameter count: 1
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 57.14285714285714%
    * Halstead difficulty: 6.75
    * Halstead volume: 110.36149671375918
    * Halstead effort: 744.9401028178745
* Function: **&lt;anonymous>.clearLoginAttempts**
    * Line No.: 54
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **&lt;anonymous>.resetLockout**
    * Line No.: 58
    * Physical LOC: 6
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **&lt;anonymous>.getSessions**
    * Line No.: 72
    * Physical LOC: 14
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 4.285714285714286
    * Halstead volume: 74.00879436282185
    * Halstead effort: 317.18054726923646
* Function: **cleanExpiredSessions**
    * Line No.: 87
    * Physical LOC: 21
    * Logical LOC: 8
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 4.199999999999999
    * Halstead volume: 62.26976913547136
    * Halstead effort: 261.53303036897967
* Function: **&lt;anonymous>.addSession**
    * Line No.: 109
    * Physical LOC: 8
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 3
    * Halstead volume: 36.541209043760986
    * Halstead effort: 109.62362713128296
* Function: **revokeSessionsAboveThreshold**
    * Line No.: 118
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 6.5
    * Halstead volume: 91.37651812938249
    * Halstead effort: 593.9473678409862
* Function: **&lt;anonymous>.revokeSession**
    * Line No.: 126
    * Physical LOC: 11
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 4.714285714285714
    * Halstead volume: 77.70923408096293
    * Halstead effort: 366.3435320959681
* Function: **&lt;anonymous>.revokeAllSessions**
    * Line No.: 138
    * Physical LOC: 12
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 5.25
    * Halstead volume: 98.9912279734977
    * Halstead effort: 519.703946860863
* Function: **&lt;anonymous>.deleteAllSessions**
    * Line No.: 151
    * Physical LOC: 12
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0

## src/user/bans.js

* Physical LOC: 143
* Logical LOC: 81
* Mean parameter count: 1.2222222222222223
* Cyclomatic complexity: 19
* Cyclomatic complexity density: 23.456790123456788%
* Maintainability index: 111.31657865243133
* Dependency count: 6
* Function: **module.exports**
    * Line No.: 11
    * Physical LOC: 133
    * Logical LOC: 9
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 11.11111111111111%
    * Halstead difficulty: 6.545454545454546
    * Halstead volume: 277.3892322882048
    * Halstead effort: 1815.6386113409771
* Function: **&lt;anonymous>.ban**
    * Line No.: 14
    * Physical LOC: 51
    * Logical LOC: 33
    * Parameter count: 3
    * Cyclomatic complexity: 9
    * Cyclomatic complexity density: 27.27272727272727%
    * Halstead difficulty: 13.787878787878789
    * Halstead volume: 672.1052510529942
    * Halstead effort: 9266.905734215527
* Function: **&lt;anonymous>.unban**
    * Line No.: 66
    * Physical LOC: 19
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 5.4
    * Halstead volume: 55.350905898196764
    * Halstead effort: 298.8948918502625
* Function: **&lt;anonymous>.isBanned**
    * Line No.: 86
    * Physical LOC: 6
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 75%
    * Halstead difficulty: 7.4375
    * Halstead volume: 125.0204990594726
    * Halstead effort: 929.8399617548274
* Function: **&lt;anonymous>.canLoginIfBanned**
    * Line No.: 93
    * Physical LOC: 15
    * Logical LOC: 7
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 42.857142857142854%
    * Halstead difficulty: 8
    * Halstead volume: 81.40967379910403
    * Halstead effort: 651.2773903928322
* Function: **&lt;anonymous>.unbanIfExpired**
    * Line No.: 109
    * Physical LOC: 5
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3
    * Halstead volume: 39.863137138648355
    * Halstead effort: 119.58941141594507
* Function: **&lt;anonymous>.calcExpiredFromUserData**
    * Line No.: 115
    * Physical LOC: 11
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 60%
    * Halstead difficulty: 9
    * Halstead volume: 125.64271242790092
    * Halstead effort: 1130.7844118511082
* Function: **&lt;anonymous>.filterBanned**
    * Line No.: 127
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3.333333333333333
    * Halstead volume: 27
    * Halstead effort: 89.99999999999999
* Function: **&lt;anonymous>.getReason**
    * Line No.: 132
    * Physical LOC: 11
    * Logical LOC: 7
    * Parameter count: 1
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 57.14285714285714%
    * Halstead difficulty: 9.444444444444445
    * Halstead volume: 144.4295354570819
    * Halstead effort: 1364.056723761329

## src/user/blocks.js

* Physical LOC: 113
* Logical LOC: 74
* Mean parameter count: 2.2222222222222223
* Cyclomatic complexity: 15
* Cyclomatic complexity density: 20.27027027027027%
* Maintainability index: 112.50299813552036
* Dependency count: 3
* Function: **module.exports**
    * Line No.: 7
    * Physical LOC: 107
    * Logical LOC: 13
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 7.6923076923076925%
    * Halstead difficulty: 7.105263157894736
    * Halstead volume: 399.3716323206263
    * Halstead effort: 2837.640545436029
* Function: **&lt;anonymous>.is**
    * Line No.: 16
    * Physical LOC: 7
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 60%
    * Halstead difficulty: 7.388888888888889
    * Halstead volume: 140
    * Halstead effort: 1034.4444444444446
* Function: **&lt;anonymous>.can**
    * Line No.: 24
    * Physical LOC: 21
    * Logical LOC: 10
    * Parameter count: 4
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 60%
    * Halstead difficulty: 11.2
    * Halstead volume: 256.76392511682735
    * Halstead effort: 2875.7559613084663
* Function: **&lt;anonymous>.list**
    * Line No.: 46
    * Physical LOC: 15
    * Logical LOC: 9
    * Parameter count: 1
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 44.44444444444444%
    * Halstead difficulty: 8.735294117647058
    * Halstead volume: 310.2290213973121
    * Halstead effort: 2709.941745735344
* Function: **&lt;anonymous>.add**
    * Line No.: 62
    * Physical LOC: 7
    * Logical LOC: 7
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 14.285714285714285%
    * Halstead difficulty: 2.769230769230769
    * Halstead volume: 118.53642239625987
    * Halstead effort: 328.2547081742581
* Function: **&lt;anonymous>.remove**
    * Line No.: 70
    * Physical LOC: 7
    * Logical LOC: 7
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 14.285714285714285%
    * Halstead difficulty: 2.769230769230769
    * Halstead volume: 118.53642239625987
    * Halstead effort: 328.2547081742581
* Function: **&lt;anonymous>.applyChecks**
    * Line No.: 78
    * Physical LOC: 8
    * Logical LOC: 5
    * Parameter count: 3
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 4.285714285714286
    * Halstead volume: 70.30835464468075
    * Halstead effort: 301.3215199057746
* Function: **&lt;anonymous>.filterUids**
    * Line No.: 87
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3.125
    * Halstead volume: 31.699250014423125
    * Halstead effort: 99.06015629507226
* Function: **&lt;anonymous>.filter**
    * Line No.: 92
    * Physical LOC: 21
    * Logical LOC: 11
    * Parameter count: 3
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 36.36363636363637%
    * Halstead difficulty: 13
    * Halstead volume: 315.7687646832922
    * Halstead effort: 4104.993940882799

## src/user/categories.js

* Physical LOC: 76
* Logical LOC: 45
* Mean parameter count: 1.625
* Cyclomatic complexity: 9
* Cyclomatic complexity density: 20%
* Maintainability index: 122.71852042736873
* Dependency count: 4
* Function: **module.exports**
    * Line No.: 9
    * Physical LOC: 68
    * Logical LOC: 7
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 14.285714285714285%
    * Halstead difficulty: 3.666666666666667
    * Halstead volume: 154.15338753100974
    * Halstead effort: 565.2290876137024
* Function: **User.setCategoryWatchState**
    * Line No.: 10
    * Physical LOC: 15
    * Logical LOC: 10
    * Parameter count: 3
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 9.600000000000001
    * Halstead volume: 305
    * Halstead effort: 2928.0000000000005
* Function: **User.getCategoryWatchState**
    * Line No.: 26
    * Physical LOC: 9
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 6
    * Halstead volume: 104.2481250360578
    * Halstead effort: 625.4887502163468
* Function: **User.getIgnoredCategories**
    * Line No.: 36
    * Physical LOC: 11
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 6.428571428571429
    * Halstead volume: 88
    * Halstead effort: 565.7142857142858
* Function: **User.getWatchedCategories**
    * Line No.: 48
    * Physical LOC: 11
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 6.428571428571429
    * Halstead volume: 88
    * Halstead effort: 565.7142857142858
* Function: **User.getCategoriesByStates**
    * Line No.: 60
    * Physical LOC: 8
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 5
    * Halstead volume: 88
    * Halstead effort: 440
* Function: **User.ignoreCategory**
    * Line No.: 69
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 2
    * Halstead effort: 0
* Function: **User.watchCategory**
    * Line No.: 73
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 2
    * Halstead effort: 0

## src/user/create.js

* Physical LOC: 199
* Logical LOC: 105
* Mean parameter count: 1.375
* Cyclomatic complexity: 32
* Cyclomatic complexity density: 30.476190476190478%
* Maintainability index: 101.51984875843975
* Dependency count: 9
* Function: **module.exports**
    * Line No.: 14
    * Physical LOC: 186
    * Logical LOC: 7
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 14.285714285714285%
    * Halstead difficulty: 3
    * Halstead volume: 107.24238017775623
    * Halstead effort: 321.7271405332687
* Function: **User.create**
    * Line No.: 15
    * Physical LOC: 23
    * Logical LOC: 12
    * Parameter count: 1
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 11.9
    * Halstead volume: 273.8600103637728
    * Halstead effort: 3258.9341233288965
* Function: **lock**
    * Line No.: 39
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 4.199999999999999
    * Halstead volume: 44.97261104228487
    * Halstead effort: 188.8849663775964
* Function: **create**
    * Line No.: 46
    * Physical LOC: 82
    * Logical LOC: 40
    * Parameter count: 1
    * Cyclomatic complexity: 11
    * Cyclomatic complexity density: 27.500000000000004%
    * Halstead difficulty: 20.9375
    * Halstead volume: 1392.7062221754807
    * Halstead effort: 29159.786526799126
* Function: **storePassword**
    * Line No.: 129
    * Physical LOC: 13
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3.333333333333333
    * Halstead volume: 27
    * Halstead effort: 89.99999999999999
* Function: **User.isDataValid**
    * Line No.: 143
    * Physical LOC: 20
    * Logical LOC: 10
    * Parameter count: 1
    * Cyclomatic complexity: 7
    * Cyclomatic complexity density: 70%
    * Halstead difficulty: 10
    * Halstead volume: 275.0977500432694
    * Halstead effort: 2750.977500432694
* Function: **User.isPasswordValid**
    * Line No.: 164
    * Physical LOC: 21
    * Logical LOC: 10
    * Parameter count: 2
    * Cyclomatic complexity: 8
    * Cyclomatic complexity density: 80%
    * Halstead difficulty: 12.31578947368421
    * Halstead volume: 350
    * Halstead effort: 4310.526315789473
* Function: **User.uniqueUsername**
    * Line No.: 186
    * Physical LOC: 13
    * Logical LOC: 8
    * Parameter count: 1
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 7.3125
    * Halstead volume: 106.27403387250884
    * Halstead effort: 777.1288726927208

## src/user/delete.js

* Physical LOC: 217
* Logical LOC: 88
* Mean parameter count: 1.4285714285714286
* Cyclomatic complexity: 8
* Cyclomatic complexity density: 9.090909090909092%
* Maintainability index: 121.60018984176652
* Dependency count: 14
* Function: **module.exports**
    * Line No.: 19
    * Physical LOC: 199
    * Logical LOC: 14
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 7.142857142857142%
    * Halstead difficulty: 3.28125
    * Halstead volume: 184.47733175670794
    * Halstead effort: 605.3162448266979
* Function: **User.deleteContent**
    * Line No.: 27
    * Physical LOC: 14
    * Logical LOC: 10
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 30%
    * Halstead difficulty: 6.8
    * Halstead volume: 125.09775004326937
    * Halstead effort: 850.6647002942317
* Function: **deletePosts**
    * Line No.: 42
    * Physical LOC: 5
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 2
    * Halstead effort: 0
* Function: **deleteTopics**
    * Line No.: 48
    * Physical LOC: 7
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 2
    * Halstead effort: 0
* Function: **deleteUploads**
    * Line No.: 56
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1
    * Halstead volume: 11.60964047443681
    * Halstead effort: 11.60964047443681
* Function: **deleteQueued**
    * Line No.: 61
    * Physical LOC: 9
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 1.5
    * Halstead volume: 15.509775004326936
    * Halstead effort: 23.264662506490403
* Function: **removeFromSortedSets**
    * Line No.: 71
    * Physical LOC: 15
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **User.deleteAccount**
    * Line No.: 87
    * Physical LOC: 71
    * Logical LOC: 23
    * Parameter count: 1
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 26.08695652173913%
    * Halstead difficulty: 16.108695652173914
    * Halstead volume: 553.1819751543273
    * Halstead effort: 8911.040078029491
* Function: **deleteVotes**
    * Line No.: 159
    * Physical LOC: 10
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 2
    * Halstead volume: 70.30835464468075
    * Halstead effort: 140.6167092893615
* Function: **deleteChats**
    * Line No.: 170
    * Physical LOC: 9
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 2.5
    * Halstead volume: 33
    * Halstead effort: 82.5
* Function: **deleteUserIps**
    * Line No.: 180
    * Physical LOC: 5
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 1
    * Halstead volume: 8
    * Halstead effort: 8
* Function: **deleteUserFromFollowers**
    * Line No.: 186
    * Physical LOC: 23
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 2.8571428571428568
    * Halstead volume: 68.11428751370197
    * Halstead effort: 194.61225003914845
* Function: **updateCount**
    * Line No.: 192
    * Physical LOC: 7
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 4.754887502163468
    * Halstead effort: 0
* Function: **deleteImages**
    * Line No.: 210
    * Physical LOC: 7
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 2
    * Halstead volume: 50.18947501009619
    * Halstead effort: 100.37895002019238

## src/user/digest.js

* Physical LOC: 212
* Logical LOC: 55
* Mean parameter count: 1.25
* Cyclomatic complexity: 7
* Cyclomatic complexity density: 12.727272727272727%
* Maintainability index: 109.62740708539728
* Dependency count: 10
* Function: **Digest.execute**
    * Line No.: 19
    * Physical LOC: 25
    * Logical LOC: 13
    * Parameter count: 1
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 30.76923076923077%
    * Halstead difficulty: 8.1
    * Halstead volume: 169.9171005377434
    * Halstead effort: 1376.3285143557216
* Function: **Digest.getSubscribers**
    * Line No.: 58
    * Physical LOC: 24
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 4.5
    * Halstead volume: 43.18506523353572
    * Halstead effort: 194.33279355091074
* Function: **Digest.send**
    * Line No.: 83
    * Physical LOC: 61
    * Logical LOC: 6
    * Parameter count: 1
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 6.222222222222222
    * Halstead volume: 122.6238852375102
    * Halstead effort: 762.9930637000634
* Function: **getTermTopics**
    * Line No.: 173
    * Physical LOC: 40
    * Logical LOC: 13
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 7.6923076923076925%
    * Halstead difficulty: 10.823529411764707
    * Halstead volume: 436.5224818388241
    * Halstead effort: 4724.713921079037

## src/user/follow.js

* Physical LOC: 89
* Logical LOC: 42
* Mean parameter count: 2.5
* Cyclomatic complexity: 11
* Cyclomatic complexity density: 26.190476190476193%
* Maintainability index: 123.06213355790321
* Dependency count: 2
* Function: **module.exports**
    * Line No.: 7
    * Physical LOC: 84
    * Logical LOC: 7
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 14.285714285714285%
    * Halstead difficulty: 3
    * Halstead volume: 125.47368752524048
    * Halstead effort: 376.4210625757214
* Function: **User.follow**
    * Line No.: 8
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 2
    * Halstead effort: 0
* Function: **User.unfollow**
    * Line No.: 12
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 2
    * Halstead effort: 0
* Function: **toggleFollow**
    * Line No.: 16
    * Physical LOC: 45
    * Logical LOC: 19
    * Parameter count: 3
    * Cyclomatic complexity: 8
    * Cyclomatic complexity density: 42.10526315789473%
    * Halstead difficulty: 13.058823529411764
    * Halstead volume: 364.34857463456797
    * Halstead effort: 4757.963739345534
* Function: **User.getFollowing**
    * Line No.: 62
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 8
    * Halstead effort: 4
* Function: **User.getFollowers**
    * Line No.: 66
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 8
    * Halstead effort: 4
* Function: **getFollow**
    * Line No.: 70
    * Physical LOC: 13
    * Logical LOC: 5
    * Parameter count: 4
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 3.8500000000000005
    * Halstead volume: 85.83671966625714
    * Halstead effort: 330.47137071509
* Function: **User.isFollowing**
    * Line No.: 84
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 4.583333333333333
    * Halstead volume: 65.72920075410866
    * Halstead effort: 301.25883678966466

## src/user/index.js

* Physical LOC: 248
* Logical LOC: 144
* Mean parameter count: 1.3125
* Cyclomatic complexity: 17
* Cyclomatic complexity density: 11.805555555555555%
* Maintainability index: 138.9155929359411
* Dependency count: 36
* Function: **User.exists**
    * Line No.: 44
    * Physical LOC: 7
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1
* Function: **User.existsBySlug**
    * Line No.: 52
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3
    * Halstead volume: 20.67970000576925
    * Halstead effort: 62.039100017307746
* Function: **User.getUidsFromSet**
    * Line No.: 57
    * Physical LOC: 8
    * Logical LOC: 5
    * Parameter count: 3
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 60%
    * Halstead difficulty: 9.35
    * Halstead volume: 144.94647495169912
    * Halstead effort: 1355.2495407983868
* Function: **User.getUsersFromSet**
    * Line No.: 66
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 4
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.5
    * Halstead volume: 24
    * Halstead effort: 36
* Function: **User.getUsersWithFields**
    * Line No.: 71
    * Physical LOC: 7
    * Logical LOC: 5
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 5.25
    * Halstead volume: 98.9912279734977
    * Halstead effort: 519.703946860863
* Function: **User.getUsers**
    * Line No.: 79
    * Physical LOC: 9
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3.5
    * Halstead volume: 39.863137138648355
    * Halstead effort: 139.52097998526924
* Function: **User.getStatus**
    * Line No.: 89
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 8.142857142857142
    * Halstead volume: 173.91626957122043
    * Halstead effort: 1416.1753379370805
* Function: **User.getUidByUsername**
    * Line No.: 97
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 2.25
    * Halstead volume: 16.253496664211536
    * Halstead effort: 36.57036749447595
* Function: **User.getUidsByUsernames**
    * Line No.: 104
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1
* Function: **User.getUidByUserslug**
    * Line No.: 108
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 2.25
    * Halstead volume: 16.253496664211536
    * Halstead effort: 36.57036749447595
* Function: **User.getUsernamesByUids**
    * Line No.: 115
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3.333333333333333
    * Halstead volume: 27
    * Halstead effort: 89.99999999999999
* Function: **User.getUsernameByUserslug**
    * Line No.: 120
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.5
    * Halstead volume: 11.60964047443681
    * Halstead effort: 17.414460711655217
* Function: **User.getUidByEmail**
    * Line No.: 125
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1
* Function: **User.getUidsByEmails**
    * Line No.: 129
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 4
    * Halstead volume: 20.67970000576925
    * Halstead effort: 82.718800023077
* Function: **User.getUsernameByEmail**
    * Line No.: 134
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.5
    * Halstead volume: 11.60964047443681
    * Halstead effort: 17.414460711655217
* Function: **User.isModerator**
    * Line No.: 139
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **User.isModeratorOfAnyCategory**
    * Line No.: 143
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 4.666666666666666
    * Halstead volume: 62.907475208398566
    * Halstead effort: 293.5682176391933
* Function: **User.isAdministrator**
    * Line No.: 148
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1
* Function: **User.isGlobalModerator**
    * Line No.: 152
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1
* Function: **User.getPrivileges**
    * Line No.: 156
    * Physical LOC: 7
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1
* Function: **User.isPrivileged**
    * Line No.: 164
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 125%
    * Halstead difficulty: 8.333333333333334
    * Halstead volume: 123.18989788986397
    * Halstead effort: 1026.5824824155331
* Function: **User.isAdminOrGlobalMod**
    * Line No.: 172
    * Physical LOC: 7
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 2
    * Halstead volume: 19.651484454403228
    * Halstead effort: 39.302968908806456
* Function: **User.isAdminOrSelf**
    * Line No.: 180
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 2
    * Halstead effort: 0
* Function: **User.isAdminOrGlobalModOrSelf**
    * Line No.: 184
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 2
    * Halstead effort: 0
* Function: **User.isPrivilegedOrSelf**
    * Line No.: 188
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 2
    * Halstead effort: 0
* Function: **isSelfOrMethod**
    * Line No.: 192
    * Physical LOC: 9
    * Logical LOC: 5
    * Parameter count: 3
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 60%
    * Halstead difficulty: 7.3125
    * Halstead volume: 98.09910819000817
    * Halstead effort: 717.3497286394347
* Function: **User.getAdminsandGlobalMods**
    * Line No.: 202
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.5
    * Halstead volume: 8
    * Halstead effort: 12
* Function: **User.getAdminsandGlobalModsandModerators**
    * Line No.: 207
    * Physical LOC: 8
    * Logical LOC: 2
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.5
    * Halstead volume: 8
    * Halstead effort: 12
* Function: **User.getFirstAdminUid**
    * Line No.: 216
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1
    * Halstead volume: 4.754887502163468
    * Halstead effort: 4.754887502163468
* Function: **User.getModeratorUids**
    * Line No.: 220
    * Physical LOC: 5
    * Logical LOC: 3
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 2.5
    * Halstead volume: 34.86917501586544
    * Halstead effort: 87.1729375396636
* Function: **User.getModeratedCids**
    * Line No.: 226
    * Physical LOC: 8
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 5
    * Halstead volume: 88
    * Halstead effort: 440
* Function: **User.addInterstitials**
    * Line No.: 235
    * Physical LOC: 12
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 3.5714285714285716
    * Halstead volume: 144.4295354570819
    * Halstead effort: 515.8197694895782

## src/user/info.js

* Physical LOC: 144
* Logical LOC: 58
* Mean parameter count: 1.4285714285714286
* Cyclomatic complexity: 3
* Cyclomatic complexity density: 5.172413793103448%
* Maintainability index: 115.75493910019951
* Dependency count: 6
* Function: **module.exports**
    * Line No.: 11
    * Physical LOC: 134
    * Logical LOC: 7
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 14.285714285714285%
    * Halstead difficulty: 2.833333333333333
    * Halstead volume: 118.30376252379817
    * Halstead effort: 335.1939938174281
* Function: **User.getLatestBanInfo**
    * Line No.: 12
    * Physical LOC: 19
    * Logical LOC: 14
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 21.428571428571427%
    * Halstead difficulty: 9.652173913043478
    * Halstead volume: 353.92052816920267
    * Halstead effort: 3416.1024892853475
* Function: **User.getModerationHistory**
    * Line No.: 32
    * Physical LOC: 35
    * Logical LOC: 9
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 11.11111111111111%
    * Halstead difficulty: 8
    * Halstead volume: 141.7774500490386
    * Halstead effort: 1134.2196003923088
* Function: **User.getHistory**
    * Line No.: 68
    * Physical LOC: 10
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3.333333333333333
    * Halstead volume: 27
    * Halstead effort: 89.99999999999999
* Function: **getFlagMetadata**
    * Line No.: 79
    * Physical LOC: 21
    * Logical LOC: 6
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 16.666666666666664%
    * Halstead difficulty: 5.416666666666666
    * Halstead volume: 100.32351694048164
    * Halstead effort: 543.4190500942755
* Function: **formatBanMuteData**
    * Line No.: 101
    * Physical LOC: 14
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 3.75
    * Halstead volume: 69.18863237274596
    * Halstead effort: 259.4573713977973
* Function: **User.getModerationNotes**
    * Line No.: 116
    * Physical LOC: 23
    * Logical LOC: 8
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 12.5%
    * Halstead difficulty: 4.25
    * Halstead volume: 154.28722505336555
    * Halstead effort: 655.7207064768036

## src/user/interstitials.js

* Physical LOC: 198
* Logical LOC: 50
* Mean parameter count: 2
* Cyclomatic complexity: 15
* Cyclomatic complexity density: 30%
* Maintainability index: 107.75947300535204
* Dependency count: 8
* Function: **Interstitials.gdpr**
    * Line No.: 130
    * Physical LOC: 31
    * Logical LOC: 15
    * Parameter count: 1
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 14.318181818181818
    * Halstead volume: 427.1751759815739
    * Halstead effort: 6116.37183791799
* Function: **callback**
    * Line No.: 151
    * Physical LOC: 7
    * Logical LOC: 3
    * Parameter count: 3
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 6.545454545454546
    * Halstead volume: 127.43782540330756
    * Halstead effort: 834.1384935489223
* Function: **Interstitials.tou**
    * Line No.: 162
    * Physical LOC: 37
    * Logical LOC: 15
    * Parameter count: 1
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 11.700000000000001
    * Halstead volume: 363.1963765938086
    * Halstead effort: 4249.397606147561
* Function: **callback**
    * Line No.: 189
    * Physical LOC: 7
    * Logical LOC: 3
    * Parameter count: 3
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 5.25
    * Halstead volume: 98.09910819000817
    * Halstead effort: 515.0203179975429

## src/user/jobs.js

* Physical LOC: 66
* Logical LOC: 29
* Mean parameter count: 1
* Cyclomatic complexity: 5
* Cyclomatic complexity density: 17.24137931034483%
* Maintainability index: 120.60461420200197
* Dependency count: 4
* Function: **module.exports**
    * Line No.: 10
    * Physical LOC: 57
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 2.4000000000000004
    * Halstead volume: 45
    * Halstead effort: 108.00000000000001
* Function: **User.startJobs**
    * Line No.: 11
    * Physical LOC: 23
    * Logical LOC: 14
    * Parameter count: 0
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 28.57142857142857%
    * Halstead difficulty: 7.142857142857143
    * Halstead volume: 356.8590709141638
    * Halstead effort: 2548.9933636725987
* Function: **startDigestJob**
    * Line No.: 35
    * Physical LOC: 17
    * Logical LOC: 2
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 2.4444444444444446
    * Halstead volume: 59.207035490257475
    * Halstead effort: 144.72830897618496
* Function: **User.stopJobs**
    * Line No.: 53
    * Physical LOC: 13
    * Logical LOC: 3
    * Parameter count: 0
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 4.5
    * Halstead volume: 39.863137138648355
    * Halstead effort: 179.3841171239176

## src/user/notifications.js

* Physical LOC: 232
* Logical LOC: 111
* Mean parameter count: 1.8666666666666667
* Cyclomatic complexity: 14
* Cyclomatic complexity density: 12.612612612612612%
* Maintainability index: 119.79845402140286
* Dependency count: 9
* Function: **UserNotifications.get**
    * Line No.: 16
    * Physical LOC: 18
    * Logical LOC: 10
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 30%
    * Halstead difficulty: 10.5
    * Halstead volume: 191.75555960140377
    * Halstead effort: 2013.4333758147395
* Function: **filterNotifications**
    * Line No.: 35
    * Physical LOC: 8
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 7.700000000000001
    * Halstead volume: 89.62406251802891
    * Halstead effort: 690.1052813888227
* Function: **UserNotifications.getAll**
    * Line No.: 44
    * Physical LOC: 19
    * Logical LOC: 7
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 14.285714285714285%
    * Halstead difficulty: 5.6875
    * Halstead volume: 105.48604608143
    * Halstead effort: 599.9518870881332
* Function: **deleteUserNids**
    * Line No.: 64
    * Physical LOC: 6
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 2
    * Halstead effort: 0
* Function: **getNotificationsFromSet**
    * Line No.: 71
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 4
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1.5
    * Halstead volume: 24
    * Halstead effort: 36
* Function: **UserNotifications.getNotifications**
    * Line No.: 76
    * Physical LOC: 31
    * Logical LOC: 9
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 8.25
    * Halstead volume: 189.98960215439456
    * Halstead effort: 1567.4142177737551
* Function: **UserNotifications.getUnreadInterval**
    * Line No.: 108
    * Physical LOC: 14
    * Logical LOC: 10
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 9.176470588235293
    * Halstead volume: 257.47299274176135
    * Halstead effort: 2362.6933451596924
* Function: **UserNotifications.getDailyUnread**
    * Line No.: 123
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 2
    * Halstead effort: 1
* Function: **UserNotifications.getUnreadCount**
    * Line No.: 127
    * Physical LOC: 23
    * Logical LOC: 10
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 7.2727272727272725
    * Halstead volume: 182.66088307807416
    * Halstead effort: 1328.4427860223575
* Function: **UserNotifications.getUnreadByField**
    * Line No.: 151
    * Physical LOC: 10
    * Logical LOC: 7
    * Parameter count: 3
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 28.57142857142857%
    * Halstead difficulty: 6.75
    * Halstead volume: 180.0850143339292
    * Halstead effort: 1215.573846754022
* Function: **UserNotifications.deleteAll**
    * Line No.: 162
    * Physical LOC: 9
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 2.5
    * Halstead volume: 27
    * Halstead effort: 67.5
* Function: **UserNotifications.sendTopicNotificationToFollowers**
    * Line No.: 172
    * Physical LOC: 29
    * Logical LOC: 11
    * Parameter count: 3
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 27.27272727272727%
    * Halstead difficulty: 6.333333333333333
    * Halstead volume: 159.91133951083242
    * Halstead effort: 1012.7718169019386
* Function: **UserNotifications.sendWelcomeNotification**
    * Line No.: 202
    * Physical LOC: 15
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 60%
    * Halstead difficulty: 5.6875
    * Halstead volume: 105.48604608143
    * Halstead effort: 599.9518870881332
* Function: **UserNotifications.sendNameChangeNotification**
    * Line No.: 218
    * Physical LOC: 10
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 1
    * Halstead volume: 11.60964047443681
    * Halstead effort: 11.60964047443681
* Function: **UserNotifications.pushCount**
    * Line No.: 229
    * Physical LOC: 5
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 2.5
    * Halstead volume: 68.11428751370197
    * Halstead effort: 170.28571878425493

## src/user/online.js

* Physical LOC: 43
* Logical LOC: 33
* Mean parameter count: 1
* Cyclomatic complexity: 8
* Cyclomatic complexity density: 24.242424242424242%
* Maintainability index: 115.1603700058215
* Dependency count: 4
* Function: **module.exports**
    * Line No.: 8
    * Physical LOC: 36
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 3
    * Halstead volume: 57
    * Halstead effort: 171
* Function: **User.updateLastOnlineTime**
    * Line No.: 9
    * Physical LOC: 11
    * Logical LOC: 7
    * Parameter count: 1
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 57.14285714285714%
    * Halstead difficulty: 9.818181818181818
    * Halstead volume: 171.8953543301665
    * Halstead effort: 1687.699842514362
* Function: **User.updateOnlineUsers**
    * Line No.: 21
    * Physical LOC: 13
    * Logical LOC: 11
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 27.27272727272727%
    * Halstead difficulty: 9.75
    * Halstead volume: 240.36774610288018
    * Halstead effort: 2343.5855245030816
* Function: **User.isOnline**
    * Line No.: 35
    * Physical LOC: 8
    * Logical LOC: 6
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 7.3500000000000005
    * Halstead volume: 167.58597649126395
    * Halstead effort: 1231.75692721079

## src/user/password.js

* Physical LOC: 47
* Logical LOC: 24
* Mean parameter count: 1.5
* Cyclomatic complexity: 5
* Cyclomatic complexity density: 20.833333333333336%
* Maintainability index: 125.9154517511861
* Dependency count: 3
* Function: **module.exports**
    * Line No.: 9
    * Physical LOC: 39
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 3
    * Halstead volume: 57
    * Halstead effort: 171
* Function: **User.hashPassword**
    * Line No.: 10
    * Physical LOC: 7
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 4.5
    * Halstead volume: 14
    * Halstead effort: 63
* Function: **User.isPasswordCorrect**
    * Line No.: 18
    * Physical LOC: 24
    * Logical LOC: 11
    * Parameter count: 3
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 36.36363636363637%
    * Halstead difficulty: 8
    * Halstead volume: 120.92782504182705
    * Halstead effort: 967.4226003346164
* Function: **User.hasPassword**
    * Line No.: 43
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3
    * Halstead volume: 20.67970000576925
    * Halstead effort: 62.039100017307746

## src/user/picture.js

* Physical LOC: 233
* Logical LOC: 122
* Mean parameter count: 1.2941176470588236
* Cyclomatic complexity: 21
* Cyclomatic complexity density: 17.21311475409836%
* Maintainability index: 116.57720313377763
* Dependency count: 8
* Function: **module.exports**
    * Line No.: 13
    * Physical LOC: 221
    * Logical LOC: 16
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 6.25%
    * Halstead difficulty: 3.083333333333333
    * Halstead volume: 320.63917186284954
    * Halstead effort: 988.6374465771194
* Function: **User.getAllowedProfileImageExtensions**
    * Line No.: 14
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 0
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 4.125
    * Halstead volume: 87.56916320732489
    * Halstead effort: 361.2227982302152
* Function: **User.getAllowedImageTypes**
    * Line No.: 22
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1
    * Halstead volume: 19.651484454403228
    * Halstead effort: 19.651484454403228
* Function: **User.updateCoverPosition**
    * Line No.: 26
    * Physical LOC: 9
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 3.375
    * Halstead volume: 64.72503367497926
    * Halstead effort: 218.446988653055
* Function: **User.updateCoverPicture**
    * Line No.: 36
    * Physical LOC: 33
    * Logical LOC: 17
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 17.647058823529413%
    * Halstead difficulty: 8.708333333333332
    * Halstead volume: 374.43766023698254
    * Halstead effort: 3260.7279578970556
* Function: **User.uploadCroppedPictureFile**
    * Line No.: 71
    * Physical LOC: 42
    * Logical LOC: 17
    * Parameter count: 1
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 35.294117647058826%
    * Halstead difficulty: 10.25
    * Halstead volume: 454.9534001269235
    * Halstead effort: 4663.272351300966
* Function: **User.uploadCroppedPicture**
    * Line No.: 115
    * Physical LOC: 41
    * Logical LOC: 18
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 16.666666666666664%
    * Halstead difficulty: 8.673076923076923
    * Halstead volume: 416.756269250316
    * Halstead effort: 3614.5591813825486
* Function: **deleteCurrentPicture**
    * Line No.: 157
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 1.5
    * Halstead volume: 27
    * Halstead effort: 40.5
* Function: **deletePicture**
    * Line No.: 164
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 2
    * Halstead volume: 18.094737505048094
    * Halstead effort: 36.18947501009619
* Function: **validateUpload**
    * Line No.: 171
    * Physical LOC: 14
    * Logical LOC: 8
    * Parameter count: 3
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 62.5%
    * Halstead difficulty: 10.607142857142858
    * Halstead volume: 255.41209043760983
    * Halstead effort: 2709.1925307132187
* Function: **convertToPNG**
    * Line No.: 186
    * Physical LOC: 9
    * Logical LOC: 6
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 5
    * Halstead volume: 79.95445336320968
    * Halstead effort: 399.7722668160484
* Function: **generateProfileImageFilename**
    * Line No.: 196
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 2.5
    * Halstead volume: 46.604512509375034
    * Halstead effort: 116.51128127343759
* Function: **User.removeCoverPicture**
    * Line No.: 201
    * Physical LOC: 4
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **User.removeProfileImage**
    * Line No.: 206
    * Physical LOC: 10
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 2.25
    * Halstead volume: 13.931568569324174
    * Halstead effort: 31.34602928097939
* Function: **User.getLocalCoverPath**
    * Line No.: 217
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.3333333333333333
    * Halstead volume: 13.931568569324174
    * Halstead effort: 18.575424759098897
* Function: **User.getLocalAvatarPath**
    * Line No.: 221
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 1.3333333333333333
    * Halstead volume: 13.931568569324174
    * Halstead effort: 18.575424759098897
* Function: **getPicturePath**
    * Line No.: 225
    * Physical LOC: 8
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 60%
    * Halstead difficulty: 5.066666666666666
    * Halstead volume: 176.41891628622352
    * Halstead effort: 893.8558425168658

## src/user/posts.js

* Physical LOC: 122
* Logical LOC: 58
* Mean parameter count: 2.090909090909091
* Cyclomatic complexity: 15
* Cyclomatic complexity density: 25.862068965517242%
* Maintainability index: 119.33579612123101
* Dependency count: 3
* Function: **module.exports**
    * Line No.: 7
    * Physical LOC: 116
    * Logical LOC: 11
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 9.090909090909092%
    * Halstead difficulty: 3.3461538461538463
    * Halstead volume: 228
    * Halstead effort: 762.9230769230769
* Function: **User.isReadyToPost**
    * Line No.: 8
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 2
    * Halstead effort: 0
* Function: **User.isReadyToQueue**
    * Line No.: 12
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 2
    * Halstead effort: 0
* Function: **isReady**
    * Line No.: 16
    * Physical LOC: 44
    * Logical LOC: 23
    * Parameter count: 3
    * Cyclomatic complexity: 10
    * Cyclomatic complexity density: 43.47826086956522%
    * Halstead difficulty: 24.846153846153847
    * Halstead volume: 790.8268458714732
    * Halstead effort: 19649.00547819122
* Function: **User.onNewPostMade**
    * Line No.: 61
    * Physical LOC: 10
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 6
    * Halstead volume: 69.18863237274596
    * Halstead effort: 415.13179423647574
* Function: **User.addPostIdToUser**
    * Line No.: 72
    * Physical LOC: 7
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0
* Function: **User.incrementUserPostCountBy**
    * Line No.: 93
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **User.incrementUserReputationBy**
    * Line No.: 97
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **User.incrementUserFlagsBy**
    * Line No.: 101
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 4.754887502163468
    * Halstead effort: 2.377443751081734
* Function: **incrementUserFieldAndSetBy**
    * Line No.: 105
    * Physical LOC: 13
    * Logical LOC: 9
    * Parameter count: 4
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 55.55555555555556%
    * Halstead difficulty: 8
    * Halstead volume: 151.23612512626258
    * Halstead effort: 1209.8890010101006
* Function: **User.getPostIds**
    * Line No.: 119
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 8
    * Halstead effort: 4

## src/user/profile.js

* Physical LOC: 334
* Logical LOC: 181
* Mean parameter count: 1.8421052631578947
* Cyclomatic complexity: 54
* Cyclomatic complexity density: 29.83425414364641%
* Maintainability index: 109.07719992135247
* Dependency count: 9
* Function: **module.exports**
    * Line No.: 15
    * Physical LOC: 321
    * Logical LOC: 18
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 5.555555555555555%
    * Halstead difficulty: 1.9500000000000002
    * Halstead volume: 230.70165975890765
    * Halstead effort: 449.86823652987
* Function: **User.updateProfile**
    * Line No.: 16
    * Physical LOC: 58
    * Logical LOC: 21
    * Parameter count: 3
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 19.047619047619047%
    * Halstead difficulty: 11.578125
    * Halstead volume: 549.1853096329675
    * Halstead effort: 6358.536163094202
* Function: **validateData**
    * Line No.: 75
    * Physical LOC: 11
    * Logical LOC: 9
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 11.11111111111111%
    * Halstead difficulty: 0.8333333333333334
    * Halstead volume: 39.302968908806456
    * Halstead effort: 32.752474090672045
* Function: **isEmailValid**
    * Line No.: 87
    * Physical LOC: 10
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 60%
    * Halstead difficulty: 8
    * Halstead volume: 117.20671786825557
    * Halstead effort: 937.6537429460445
* Function: **isUsernameAvailable**
    * Line No.: 98
    * Physical LOC: 43
    * Logical LOC: 23
    * Parameter count: 2
    * Cyclomatic complexity: 11
    * Cyclomatic complexity density: 47.82608695652174%
    * Halstead difficulty: 18.928571428571427
    * Halstead volume: 584.2015251629813
    * Halstead effort: 11058.100297727859
* Function: **isWebsiteValid**
    * Line No.: 143
    * Physical LOC: 9
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 60%
    * Halstead difficulty: 5
    * Halstead volume: 76.14709844115208
    * Halstead effort: 380.7354922057604
* Function: **isAboutMeValid**
    * Line No.: 153
    * Physical LOC: 10
    * Logical LOC: 5
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 60%
    * Halstead difficulty: 7
    * Halstead volume: 120.92782504182705
    * Halstead effort: 846.4947752927893
* Function: **isSignatureValid**
    * Line No.: 164
    * Physical LOC: 10
    * Logical LOC: 6
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 7.272727272727273
    * Halstead volume: 140.55415752892034
    * Halstead effort: 1022.2120547557844
* Function: **isFullnameValid**
    * Line No.: 175
    * Physical LOC: 5
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 150%
    * Halstead difficulty: 6.5
    * Halstead volume: 100
    * Halstead effort: 650
* Function: **isLocationValid**
    * Line No.: 181
    * Physical LOC: 5
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 150%
    * Halstead difficulty: 6.5
    * Halstead volume: 100
    * Halstead effort: 650
* Function: **isBirthdayValid**
    * Line No.: 187
    * Physical LOC: 10
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 60%
    * Halstead difficulty: 8.9375
    * Halstead volume: 118.94197037642039
    * Halstead effort: 1063.0438602392571
* Function: **isGroupTitleValid**
    * Line No.: 198
    * Physical LOC: 24
    * Logical LOC: 14
    * Parameter count: 1
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 35.714285714285715%
    * Halstead difficulty: 13.666666666666666
    * Halstead volume: 425.7304904064322
    * Halstead effort: 5818.316702221239
* Function: **checkTitle**
    * Line No.: 199
    * Physical LOC: 5
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 150%
    * Halstead difficulty: 4.666666666666666
    * Halstead volume: 55.506595772116384
    * Halstead effort: 259.0307802698764
* Function: **User.checkMinReputation**
    * Line No.: 223
    * Physical LOC: 10
    * Logical LOC: 6
    * Parameter count: 3
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 10.909090909090908
    * Halstead volume: 176.41891628622352
    * Halstead effort: 1924.569995849711
* Function: **updateEmail**
    * Line No.: 234
    * Physical LOC: 15
    * Logical LOC: 6
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 6.75
    * Halstead volume: 56.472777613085164
    * Halstead effort: 381.1912488883249
* Function: **updateUsername**
    * Line No.: 250
    * Physical LOC: 18
    * Logical LOC: 10
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 30%
    * Halstead difficulty: 6.5
    * Halstead volume: 116
    * Halstead effort: 754
* Function: **updateUidMapping**
    * Line No.: 269
    * Physical LOC: 10
    * Logical LOC: 6
    * Parameter count: 4
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 2.625
    * Halstead volume: 30.880904142633646
    * Halstead effort: 81.06237337441333
* Function: **updateFullname**
    * Line No.: 280
    * Physical LOC: 12
    * Logical LOC: 7
    * Parameter count: 2
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 57.14285714285714%
    * Halstead difficulty: 4.666666666666667
    * Halstead volume: 36.49561398674886
    * Halstead effort: 170.31286527149467
* Function: **User.changePassword**
    * Line No.: 293
    * Physical LOC: 42
    * Logical LOC: 18
    * Parameter count: 2
    * Cyclomatic complexity: 8
    * Cyclomatic complexity density: 44.44444444444444%
    * Halstead difficulty: 12.444444444444443
    * Halstead volume: 525.0400964525722
    * Halstead effort: 6533.8323114097875

## src/user/reset.js

* Physical LOC: 165
* Logical LOC: 84
* Mean parameter count: 1.1111111111111112
* Cyclomatic complexity: 11
* Cyclomatic complexity density: 13.095238095238097%
* Maintainability index: 116.69467875545703
* Dependency count: 10
* Function: **UserReset.validate**
    * Line No.: 20
    * Physical LOC: 8
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 5.5
    * Halstead volume: 100.07820003461549
    * Halstead effort: 550.4301001903852
* Function: **UserReset.generate**
    * Line No.: 29
    * Physical LOC: 12
    * Logical LOC: 4
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 3.125
    * Halstead volume: 31.699250014423125
    * Halstead effort: 99.06015629507226
* Function: **canGenerate**
    * Line No.: 42
    * Physical LOC: 6
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 5.625
    * Halstead volume: 79.22857502740393
    * Halstead effort: 445.66073452914713
* Function: **UserReset.send**
    * Line No.: 49
    * Physical LOC: 17
    * Logical LOC: 8
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 4.8999999999999995
    * Halstead volume: 57.359400011538504
    * Halstead effort: 281.0610600565386
* Function: **UserReset.commit**
    * Line No.: 67
    * Physical LOC: 45
    * Logical LOC: 21
    * Parameter count: 2
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 23.809523809523807%
    * Halstead difficulty: 10.285714285714285
    * Halstead volume: 383.37395307124245
    * Halstead effort: 3943.274945875636
* Function: **UserReset.updateExpiry**
    * Line No.: 113
    * Physical LOC: 10
    * Logical LOC: 7
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 28.57142857142857%
    * Halstead difficulty: 5.884615384615385
    * Halstead volume: 156.0801066523054
    * Halstead effort: 918.4713968385664
* Function: **UserReset.clean**
    * Line No.: 124
    * Physical LOC: 12
    * Logical LOC: 5
    * Parameter count: 0
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 4.8
    * Halstead volume: 62.907475208398566
    * Halstead effort: 301.9558810003131
* Function: **UserReset.cleanByUid**
    * Line No.: 137
    * Physical LOC: 21
    * Logical LOC: 8
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 25%
    * Halstead difficulty: 6.5
    * Halstead volume: 104
    * Halstead effort: 676
* Function: **cleanTokensAndUids**
    * Line No.: 159
    * Physical LOC: 7
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 2
    * Halstead effort: 0

## src/user/search.js

* Physical LOC: 158
* Logical LOC: 97
* Mean parameter count: 1.8333333333333333
* Cyclomatic complexity: 26
* Cyclomatic complexity density: 26.804123711340207%
* Maintainability index: 96.82339367861869
* Dependency count: 6
* Function: **module.exports**
    * Line No.: 12
    * Physical LOC: 148
    * Logical LOC: 15
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 6.666666666666667%
    * Halstead difficulty: 5.970588235294118
    * Halstead volume: 247.5879750389425
    * Halstead effort: 1478.2458509678038
* Function: **User.search**
    * Line No.: 28
    * Physical LOC: 40
    * Logical LOC: 30
    * Parameter count: 1
    * Cyclomatic complexity: 11
    * Cyclomatic complexity density: 36.666666666666664%
    * Halstead difficulty: 19
    * Halstead volume: 1117.7513456944844
    * Halstead effort: 21237.275568195204
* Function: **findUids**
    * Line No.: 69
    * Physical LOC: 15
    * Logical LOC: 10
    * Parameter count: 3
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 30%
    * Halstead difficulty: 10.636363636363637
    * Halstead volume: 391.7346387762762
    * Halstead effort: 4166.632066984029
* Function: **filterAndSortUids**
    * Line No.: 85
    * Physical LOC: 46
    * Logical LOC: 22
    * Parameter count: 2
    * Cyclomatic complexity: 9
    * Cyclomatic complexity density: 40.909090909090914%
    * Halstead difficulty: 15.125
    * Halstead volume: 666.8067922028456
    * Halstead effort: 10085.452732068039
* Function: **sortUsers**
    * Line No.: 132
    * Physical LOC: 21
    * Logical LOC: 9
    * Parameter count: 3
    * Cyclomatic complexity: 6
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 12.5
    * Halstead volume: 229.24812503605784
    * Halstead effort: 2865.601562950723
* Function: **searchByIP**
    * Line No.: 154
    * Physical LOC: 5
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 3
    * Halstead volume: 43.18506523353572
    * Halstead effort: 129.55519570060716

## src/user/settings.js

* Physical LOC: 170
* Logical LOC: 111
* Mean parameter count: 1.875
* Cyclomatic complexity: 36
* Cyclomatic complexity density: 32.432432432432435%
* Maintainability index: 97.72816959653414
* Dependency count: 6
* Function: **module.exports**
    * Line No.: 12
    * Physical LOC: 160
    * Logical LOC: 7
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 14.285714285714285%
    * Halstead difficulty: 3
    * Halstead volume: 125.47368752524048
    * Halstead effort: 376.4210625757214
* Function: **User.getSettings**
    * Line No.: 13
    * Physical LOC: 9
    * Logical LOC: 6
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 9
    * Halstead volume: 93.76537429460444
    * Halstead effort: 843.88836865144
* Function: **User.getMultipleUserSettings**
    * Line No.: 23
    * Physical LOC: 14
    * Logical LOC: 6
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 8.75
    * Halstead volume: 137.6075250475963
    * Halstead effort: 1204.0658441664677
* Function: **onSettingsLoaded**
    * Line No.: 38
    * Physical LOC: 44
    * Logical LOC: 28
    * Parameter count: 2
    * Cyclomatic complexity: 8
    * Cyclomatic complexity density: 28.57142857142857%
    * Halstead difficulty: 11.823529411764707
    * Halstead volume: 2068.064006949827
    * Halstead effort: 24451.815611583253
* Function: **getSetting**
    * Line No.: 83
    * Physical LOC: 8
    * Logical LOC: 6
    * Parameter count: 3
    * Cyclomatic complexity: 5
    * Cyclomatic complexity density: 83.33333333333334%
    * Halstead difficulty: 10.5
    * Halstead volume: 143.39850002884626
    * Halstead effort: 1505.6842503028856
* Function: **User.saveSettings**
    * Line No.: 92
    * Physical LOC: 64
    * Logical LOC: 43
    * Parameter count: 2
    * Cyclomatic complexity: 19
    * Cyclomatic complexity density: 44.18604651162791%
    * Halstead difficulty: 26.943396226415096
    * Halstead volume: 1900.0777352529399
    * Halstead effort: 51194.5472819094
* Function: **User.updateDigestSetting**
    * Line No.: 157
    * Physical LOC: 6
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 2.25
    * Halstead volume: 46.604512509375034
    * Halstead effort: 104.86015314609382
* Function: **User.setSetting**
    * Line No.: 164
    * Physical LOC: 7
    * Logical LOC: 3
    * Parameter count: 3
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 66.66666666666666%
    * Halstead difficulty: 2.3333333333333335
    * Halstead volume: 36.541209043760986
    * Halstead effort: 85.26282110210897

## src/user/topics.js

* Physical LOC: 16
* Logical LOC: 7
* Mean parameter count: 2.3333333333333335
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 14.285714285714285%
* Maintainability index: 154.35393545346074
* Dependency count: 1
* Function: **module.exports**
    * Line No.: 5
    * Physical LOC: 12
    * Logical LOC: 2
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 2.625
    * Halstead volume: 36.49561398674886
    * Halstead effort: 95.80098671521576
* Function: **User.getIgnoredTids**
    * Line No.: 6
    * Physical LOC: 3
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0.5
    * Halstead volume: 8
    * Halstead effort: 4
* Function: **User.addTopicIdToUser**
    * Line No.: 10
    * Physical LOC: 6
    * Logical LOC: 1
    * Parameter count: 3
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 4.754887502163468
    * Halstead effort: 0

## src/user/uploads.js

* Physical LOC: 90
* Logical LOC: 27
* Mean parameter count: 2
* Cyclomatic complexity: 4
* Cyclomatic complexity density: 14.814814814814813%
* Maintainability index: 123.95160168100753
* Dependency count: 8
* Function: **module.exports**
    * Line No.: 30
    * Physical LOC: 61
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 2.7
    * Halstead volume: 51
    * Halstead effort: 137.70000000000002
* Function: **User.deleteUpload**
    * Line No.: 39
    * Physical LOC: 39
    * Logical LOC: 10
    * Parameter count: 3
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 40%
    * Halstead difficulty: 9
    * Halstead volume: 188.0175887256437
    * Halstead effort: 1692.1582985307932
* Function: **User.collateUploads**
    * Line No.: 79
    * Physical LOC: 11
    * Logical LOC: 1
    * Parameter count: 2
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 0
    * Halstead volume: 2
    * Halstead effort: 0

## src/widgets/admin.js

* Physical LOC: 84
* Logical LOC: 52
* Mean parameter count: 0.2
* Cyclomatic complexity: 1
* Cyclomatic complexity density: 1.9230769230769231%
* Maintainability index: 113.88136573563347
* Dependency count: 5
* Function: **admin.get**
    * Line No.: 10
    * Physical LOC: 12
    * Logical LOC: 5
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 4.800000000000001
    * Halstead volume: 55.350905898196764
    * Halstead effort: 265.6843483113445
* Function: **admin.getAreas**
    * Line No.: 23
    * Physical LOC: 19
    * Logical LOC: 24
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 4.166666666666666%
    * Halstead difficulty: 8.869565217391305
    * Halstead volume: 431.0150790036582
    * Halstead effort: 3822.9163529020116
* Function: **getAvailableWidgets**
    * Line No.: 43
    * Physical LOC: 10
    * Logical LOC: 3
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 3.75
    * Halstead volume: 22.458839376460833
    * Halstead effort: 84.22064766172812
* Function: **renderAdminTemplate**
    * Line No.: 54
    * Physical LOC: 5
    * Logical LOC: 3
    * Parameter count: 0
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 3.75
    * Halstead volume: 22.458839376460833
    * Halstead effort: 84.22064766172812
* Function: **buildTemplatesFromAreas**
    * Line No.: 60
    * Physical LOC: 23
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 5.714285714285714
    * Halstead volume: 82.0447025077789
    * Halstead effort: 468.82687147302227

## src/widgets/index.js

* Physical LOC: 231
* Logical LOC: 104
* Mean parameter count: 1.5833333333333333
* Cyclomatic complexity: 23
* Cyclomatic complexity density: 22.115384615384613%
* Maintainability index: 115.13461199681629
* Dependency count: 10
* Function: **widgets.render**
    * Line No.: 16
    * Physical LOC: 20
    * Logical LOC: 9
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 22.22222222222222%
    * Halstead difficulty: 8.86111111111111
    * Halstead volume: 291.47885970765435
    * Halstead effort: 2582.8265624094925
* Function: **renderLocation**
    * Line No.: 37
    * Physical LOC: 10
    * Logical LOC: 5
    * Parameter count: 4
    * Cyclomatic complexity: 4
    * Cyclomatic complexity density: 80%
    * Halstead difficulty: 8.181818181818182
    * Halstead volume: 177.19905189038187
    * Halstead effort: 1449.8104245576699
* Function: **renderWidget**
    * Line No.: 48
    * Physical LOC: 46
    * Logical LOC: 21
    * Parameter count: 3
    * Cyclomatic complexity: 12
    * Cyclomatic complexity density: 57.14285714285714%
    * Halstead difficulty: 14.16
    * Halstead volume: 661.6005774348766
    * Halstead effort: 9368.264176477853
* Function: **widgets.checkVisibility**
    * Line No.: 95
    * Physical LOC: 11
    * Logical LOC: 7
    * Parameter count: 2
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 42.857142857142854%
    * Halstead difficulty: 6.222222222222221
    * Halstead volume: 124
    * Halstead effort: 771.5555555555554
* Function: **widgets.getWidgetDataForTemplates**
    * Line No.: 107
    * Physical LOC: 28
    * Logical LOC: 5
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 20%
    * Halstead difficulty: 4.285714285714286
    * Halstead volume: 81.40967379910403
    * Halstead effort: 348.8986019961601
* Function: **widgets.getArea**
    * Line No.: 136
    * Physical LOC: 7
    * Logical LOC: 4
    * Parameter count: 2
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 50%
    * Halstead difficulty: 4.8999999999999995
    * Halstead volume: 53.77443751081735
    * Halstead effort: 263.494743803005
* Function: **parseWidgetData**
    * Line No.: 144
    * Physical LOC: 17
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 4
    * Halstead volume: 49.82892142331044
    * Halstead effort: 199.31568569324176
* Function: **widgets.setArea**
    * Line No.: 162
    * Physical LOC: 7
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 3
    * Cyclomatic complexity density: 100%
    * Halstead difficulty: 4.199999999999999
    * Halstead volume: 51.89147427955947
    * Halstead effort: 217.94419197414973
* Function: **widgets.setAreas**
    * Line No.: 170
    * Physical LOC: 14
    * Logical LOC: 3
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: 33.33333333333333%
    * Halstead difficulty: 3.125
    * Halstead volume: 31.699250014423125
    * Halstead effort: 99.06015629507226
* Function: **widgets.reset**
    * Line No.: 185
    * Physical LOC: 27
    * Logical LOC: 13
    * Parameter count: 0
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 15.384615384615385%
    * Halstead difficulty: 7.583333333333333
    * Halstead volume: 199.6525931318485
    * Halstead effort: 1514.0321645831843
* Function: **widgets.resetTemplate**
    * Line No.: 213
    * Physical LOC: 10
    * Logical LOC: 7
    * Parameter count: 1
    * Cyclomatic complexity: 2
    * Cyclomatic complexity density: 28.57142857142857%
    * Halstead difficulty: 4.363636363636363
    * Halstead volume: 130.79881092001088
    * Halstead effort: 570.7584476509566
* Function: **widgets.resetTemplates**
    * Line No.: 224
    * Physical LOC: 6
    * Logical LOC: 0
    * Parameter count: 1
    * Cyclomatic complexity: 1
    * Cyclomatic complexity density: Infinity%
    * Halstead difficulty: 0
    * Halstead volume: 0
    * Halstead effort: 0


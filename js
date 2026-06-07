'use strict';

(() => {

    const scene = geofs.api.viewer.scene;
    const moon = scene.moon;

    // 月のテクスチャ差し替え
    moon.textureUrl =
        "https://raw.githubusercontent.com/supermanone-boop/models/main/lroc_color_2k.jpg";

    // 太陽ライティング影響調整
    moon.onlySunLighting = false;

    // =====================================================
    // 毎フレーム強制ON + サイズ固定
    // =====================================================

    scene.preRender.addEventListener(() => {

        // 常時表示
        moon.show = true;

        // 巨大化（半径スケール）
        const r = 1737400 * 480;

        moon._ellipsoidPrimitive.radii =
            new Cesium.Cartesian3(r, r, r);

        moon._ellipsoidPrimitive._boundingSphere.radius = r;

    });

    console.log("[Moon] force enabled");

})();
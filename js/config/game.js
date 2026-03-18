// 游戏全局配置
const GameConfig = {
    // 游戏版本
    version: '1.0.4',
    
    // 游戏循环频率 (每秒tick数)
    ticksPerSecond: 10,
    
    // 自动保存间隔 (秒)
    autoSaveInterval: 30,
    
    // 连击设置
    combo: {
        timeout: 2000,      // 连击超时时间 (毫秒)
        maxCombo: 10,       // 最大连击数
        bonusPerCombo: 0.1  // 每层连击加成
    },
    
    // 暴击设置
    critical: {
        chance: 0.05,       // 暴击概率
        multiplier: 10      // 暴击倍数
    },
    
    // 离线收益比例
    offlineEarningsRate: 0.5,
    
    // 最大离线时间 (小时)
    maxOfflineTime: 24,
    
    // 设备价格增长系数
    priceGrowthRate: 1.15,
    
    // 设备最大数量
    maxBuildingCount: 100,
    
    // 调试配置
    debug: {
        // 是否显示调试功能
        enabled: false,
        
        // 是否解锁所有星域
        unlockAllZones: false,
        
        // 是否解锁所有科技
        unlockAllTech: false,
        
        // 初始资源（调试用）
        startingResources: {
            crystals: 0,
            rareOre: 0,
            starCore: 0,
            darkMatter: 0
        },
        
        // 点击倍率（调试用，1为正常）
        clickMultiplier: 1,
        
        // 产出倍率（调试用，1为正常）
        productionMultiplier: 1
    }
};

// 资源类型配置
const ResourceTypes = {
    crystals: {
        id: 'crystals',
        name: '能量晶体',
        icon: '💎',
        color: 0x00D4FF,
        baseClickValue: 1
    },
    rareOre: {
        id: 'rareOre',
        name: '稀有矿石',
        icon: '⛏️',
        color: 0xAA66FF,
        unlockAt: 'deep'
    },
    starCore: {
        id: 'starCore',
        name: '星核碎片',
        icon: '⭐',
        color: 0xFFAA00,
        unlockAt: 'orbit'
    },
    darkMatter: {
        id: 'darkMatter',
        name: '暗物质',
        icon: '🌌',
        color: 0x8800FF,
        unlockAt: 'core'
    }
};

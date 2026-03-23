// 游戏全局配置
const GameConfig = {
    // 游戏版本
    version: '1.0.9',
    
    // 游戏循环频率 (每秒tick数)
    ticksPerSecond: 10,
    
    // 自动保存间隔 (秒)
    autoSaveInterval: 30,
    
    // 连击设置
    combo: {
        timeout: 2000,      // 连击超时时间 (毫秒)
        maxCombo: 5,        // 初始最大连击数（可通过科技提升）
        bonusPerCombo: 0.2, // 每层连击加成（随连击数递增）
        // 连击等级奖励表 - 每级额外奖励
        levelBonus: {
            1: 0,
            2: 0.5,   // 2连击: +50%
            3: 1.0,   // 3连击: +100%
            4: 1.5,   // 4连击: +150%
            5: 2.0,   // 5连击: +200%
            6: 2.5,   // 6连击: +250%
            7: 3.0,   // 7连击: +300%
            8: 3.5,   // 8连击: +350%
            9: 4.0,   // 9连击: +400%
            10: 5.0   // 10连击: +500%
        }
    },

    // 暴击设置
    critical: {
        chance: 0.05,       // 暴击概率
        multiplier: 3       // 暴击倍数 (从10降低到3)
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
        // 是否显示调试功能（默认关闭，需输入密码开启）
        enabled: false,

        // 调试密码
        password: 'God',

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
    credits: {
        id: 'credits',
        name: '星币',
        icon: '💳',
        color: 0xFFD700,
        description: '星际通用货币，可用于购买建筑和升级'
    },
    crystals: {
        id: 'crystals',
        name: '能量晶体',
        icon: '💎',
        color: 0x00D4FF,
        baseClickValue: 1,
        basePrice: 10,
        description: '基础矿物，广泛分布于各星域'
    },
    rareOre: {
        id: 'rareOre',
        name: '稀有矿石',
        icon: '⛏️',
        color: 0xAA66FF,
        unlockAt: 'deep',
        basePrice: 50,
        description: '深层矿物，价值较高'
    },
    starCore: {
        id: 'starCore',
        name: '星核碎片',
        icon: '⭐',
        color: 0xFFAA00,
        unlockAt: 'orbit',
        basePrice: 200,
        description: '恒星残骸，极为珍贵'
    },
    darkMatter: {
        id: 'darkMatter',
        name: '暗物质',
        icon: '🌌',
        color: 0x8800FF,
        unlockAt: 'core',
        basePrice: 1000,
        description: '宇宙中最神秘的物质'
    }
};

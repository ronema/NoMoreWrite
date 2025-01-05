// 基础数据
const firstNames = ['张', '李', '王', '刘', '陈', '杨', '黄', '赵', '吴', '周', '徐', '孙', '马', '朱', '胡', '郭', '何', '高', '林', '郑'];
const lastNames = [
    // 单字名
    ['伟', '芳', '娜', '秀英', '敏', '静', '丽', '强', '磊', '洋', '艳', '勇', '军', '杰', '娟', '涛', '明', '超', '秀兰', '霞'],
    // 双字名
    ['志强', '建华', '文静', '玉婷', '家伟', '思思', '浩然', '冰冰', '建国', '玉兰', '明亮', '雪梅', '建军', '小红', '亚男', '小军'],
    // 复姓
    ['司马', '欧阳', '上官', '东方', '独孤', '令狐', '诸葛', '宇文', '长孙', '慕容']
];
const domains = ['gmail.com', '163.com', 'qq.com', 'outlook.com', 'hotmail.com'];
const cities = ['北京', '上海', '广州', '深圳', '杭州', '南京', '成都', '武汉', '西安', '重庆'];
const streets = ['长安街', '南京路', '解放路', '建国路', '人民路', '中山路', '天府大道', '望江路', '莲花路', '东风路'];
const ethnicGroups = ['汉族', '壮族', '满族', '回族', '苗族', '维吾尔族', '土家族', '彝族', '蒙古族', '藏族'];
const genders = ['男', '女'];
const universities = ['北京大学', '清华大学', '复旦大学', '上海交通大学', '浙江大学', '南京大学', '武汉大学', '中山大学'];
const majors = ['计算机科学', '软件工程', '人工智能', '数据科学', '电子信息', '通信工程', '自动化', '机械工程'];
const communities = ['阳光花园', '翠湖居', '金色家园', '龙湖小区', '碧桂园', '万科城', '保利华庭', '绿城花园'];
const provinces = ['北京市', '上海市', '广东省', '江苏省', '浙江省', '四川省', '湖北省', '河南省', '山东省', '陕西省'];
const districts = ['朝阳区', '海淀区', '东城区', '西城区', '丰台区', '静安区', '黄浦区', '徐汇区', '福田区', '南山区'];

// 添加商品名称相关的数据
const productPrefixes = ['苹果', '华为', '小米', 'OPPO', 'VIVO', '三星'];
const productTypes = ['手机', '平板', '笔记本', '耳机', '手表', '充电器'];
const productModels = ['Pro', 'Max', 'Ultra', 'Plus', 'SE', 'Youth'];

// 添加物联网设备类型数据
const deviceTypes = [
    // 传感器类
    '温度传感器', '湿度传感器', '压力传感器', '振动传感器', '气体监测传感器', 
    '流量计', '土壤湿度传感器', '红外传感器', '粉尘传感器',
    // 监控与网络类
    '工业监控摄像头', '边缘计算网关', '工业级路由器', '工业物联网网关', 
    '工业交换机', '工业无线接入点',
    // 能源与电力设备
    '智能电表', '能源监控器', '备用电池模块', '太阳能逆变器', '电力继电器', 
    '电压监测设备', '电流监测设备',
    // 机械与自动化设备
    '可编程逻辑控制器', '伺服电机', '输送带监测器', '工业机器人', 
    '数控机床监控设备', '执行器设备', '阀门控制器',
    // 物流与仓储设备
    'RFID读写器', '工业条码扫描器', '自动导引运输车导航模块', '货物追踪器', 
    '仓储环境监测设备', '智能储物柜模块', '工业电子称',
    // 环境与安全设备
    '空气质量监控仪', '水位传感器', '噪声监测器', '工业火灾报警器', 
    '气体泄漏检测设备', '热成像摄像头', '辐射监测设备',
    // 农业设备
    '温室环境控制器', '自动灌溉系统', '农作物健康监测设备', '牲畜跟踪设备', 
    '气象监测站', '智能施肥设备'
];

// 辅助函数
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// 生成随机数字
function generateRandomNumber(length) {
    if (length === 2) {
        return Math.floor(Math.random() * 90 + 10).toString();
    }
    return Array(length).fill(0).map(() => Math.floor(Math.random() * 10)).join('');
}

// 生成随机金额
function generateAmount() {
    const amount = Math.floor(Math.random() * 1000000);
    return amount.toLocaleString('zh-CN', { style: 'currency', currency: 'CNY' });
}

// 生成随机唯一标识码
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// 生成日期时间
function generateDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${year}/${month}/${day} ${hours}:${minutes}`;
}

// 真实的中国省市区数据
const provinceCityMap = {
    '北京市': ['北京市'],
    '上海市': ['上海市'],
    '天津市': ['天津市'],
    '重庆市': ['重庆市'],
    '广东省': ['广州市', '深圳市', '珠海市', '佛山市', '东莞市'],
    '江苏省': ['南京市', '苏州市', '无锡市', '常州市', '徐州市'],
    '浙江省': ['杭州市', '宁波市', '温州市', '绍兴市', '嘉兴市'],
    '四川省': ['成都市', '绵阳市', '德阳市', '宜宾市', '南充市'],
    '湖北省': ['武汉市', '宜昌市', '襄阳市', '荆州市', '黄冈市'],
    '河南省': ['郑州市', '洛阳市', '开封市', '新乡市', '安阳市'],
    '山东省': ['济南市', '青岛市', '烟台市', '潍坊市', '临沂市'],
    '陕西省': ['西安市', '咸阳市', '宝鸡市', '渭南市', '汉中市']
};

const cityDistrictMap = {
    '北京市': ['东城区', '西城区', '朝阳区', '海淀区', '丰台区', '石景山区', '门头沟区', '房山区', '通州区', '顺义区'],
    '上海市': ['黄浦区', '徐汇区', '长宁区', '静安区', '普陀区', '虹口区', '杨浦区', '闵行区', '宝山区', '嘉定区'],
    '广州市': ['天河区', '越秀区', '海珠区', '白云区', '黄埔区', '番禺区', '花都区', '南沙区', '从化区', '增城区'],
    '深圳市': ['福田区', '南山区', '罗湖区', '宝安区', '龙岗区', '盐田区', '龙华区', '坪山区', '光明区', '大鹏新区'],
    '南京市': ['玄武区', '秦淮区', '建邺区', '鼓楼区', '浦口区', '栖霞区', '雨花台区', '江宁区', '六合区', '溧水区'],
    '杭州市': ['上城区', '下城区', '江干区', '拱墅区', '西湖区', '滨江区', '萧山区', '余杭区', '富阳区', '临安区'],
    '成都市': ['锦江区', '青羊区', '金牛区', '武侯区', '成华区', '龙泉驿区', '青白江区', '新都区', '温江区', '双流区'],
    '武汉市': ['江岸区', '江汉区', '硚口区', '汉阳区', '武昌区', '青山区', '洪山区', '东西湖区', '汉南区', '蔡甸区'],
    '郑州市': ['中原区', '二七区', '金水区', '惠济区', '管城回族区', '上街区', '中牟县', '巩义市', '荥阳市', '新密市'],
    '济南市': ['历下区', '市中区', '槐荫区', '天桥区', '历城区', '长清区', '章丘区', '济阳区', '莱芜区', '钢城区'],
    '西安市': ['新城区', '碑林区', '莲湖区', '灞桥区', '未央区', '雁塔区', '阎良区', '临潼区', '长安区', '高陵区'],
    '珠海市': ['香洲区', '斗门区', '金湾区'],
    '佛山市': ['禅城区', '南海区', '顺德区', '三水区', '高明区'],
    '东莞市': ['莞城区', '南城区', '东城区', '万江区'],
    '苏州市': ['姑苏区', '虎丘区', '吴中区', '相城区', '吴江区'],
    '无锡市': ['梁溪区', '锡山区', '惠山区', '滨湖区', '新吴区'],
    '常州市': ['天宁区', '钟楼区', '新北区', '武进区', '金坛区'],
    '徐州市': ['鼓楼区', '云龙区', '贾汪区', '泉山区', '铜山区'],
    '宁波市': ['海曙区', '江北区', '北仑区', '镇海区', '鄞州区'],
    '温州市': ['鹿城区', '龙湾区', '瓯海区', '洞头区', '瑞安市'],
    '绍兴市': ['越城区', '柯桥区', '上虞区', '诸暨市', '嵊州市'],
    '嘉兴市': ['南湖区', '秀洲区', '海宁市', '平湖市', '桐乡市'],
    '绵阳市': ['涪城区', '游仙区', '安州区', '三台县', '盐亭县'],
    '德阳市': ['旌阳区', '罗江区', '广汉市', '什邡市', '绵竹市'],
    '宜宾市': ['翠屏区', '南溪区', '叙州区', '江安县', '长宁县'],
    '南充市': ['顺庆区', '高坪区', '嘉陵区', '南部县', '营山县'],
    '宜昌市': ['西陵区', '伍家岗区', '点军区', '猇亭区', '夷陵区'],
    '襄阳市': ['襄城区', '樊城区', '襄州区', '老河口市', '枣阳市'],
    '荆州市': ['沙市区', '荆州区', '公安县', '监利县', '江陵县'],
    '黄冈市': ['黄州区', '团风县', '红安县', '罗田县', '英山县'],
    '洛阳市': ['涧西区', '西工区', '老城区', '瀍河区', '洛龙区'],
    '开封市': ['龙亭区', '顺河区', '鼓楼区', '禹王台区', '祥符区'],
    '新乡市': ['红旗区', '卫滨区', '凤泉区', '牧野区', '卫辉市'],
    '安阳市': ['文峰区', '北关区', '殷都区', '龙安区', '林州市'],
    '青岛市': ['市南区', '市北区', '黄岛区', '崂山区', '城阳区'],
    '烟台市': ['芝罘区', '福山区', '牟平区', '莱山区', '蓬莱区'],
    '潍坊市': ['潍城区', '寒亭区', '坊子区', '奎文区', '青州市'],
    '临沂市': ['兰山区', '罗庄区', '河东区', '沂南县', '郯城县'],
    '咸阳市': ['秦都区', '杨陵区', '渭城区', '兴平市', '三原县'],
    '宝鸡市': ['渭滨区', '金台区', '陈仓区', '凤翔县', '岐山县'],
    '渭南市': ['临渭区', '华州区', '潼关县', '大荔县', '合阳县'],
    '汉中市': ['汉台区', '南郑区', '城固县', '洋县', '西乡县']
};

// 生成省市区（优化版）
function generateAddress() {
    try {
        // 缓存keys数组提高性能
        const provinceKeys = Object.keys(provinceCityMap);
        const province = provinceKeys[Math.floor(Math.random() * provinceKeys.length)];
        
        // 缓存城市数组
        const cities = provinceCityMap[province];
        const city = cities[Math.floor(Math.random() * cities.length)];
        
        // 缓存区数组
        const districts = cityDistrictMap[city];
        const district = districts[Math.floor(Math.random() * districts.length)];
        
        return `${province}${city}${district}`;
    } catch (error) {
        console.error('生成省市区时出错:', error);
        return '北京市东城区'; // 返回默认值
    }
}

// 生成随��网站地址
function generateWebsite() {
    const protocols = ['http://', 'https://'];
    const webDomains = ['com', 'cn', 'net', 'org'];
    const names = ['example', 'test', 'demo', 'sample', 'web', 'site', 'app'];
    return randomFromArray(protocols) + randomFromArray(names) + randomNumber(100, 999) + '.' + randomFromArray(webDomains);
}

// 生成随机IP地址
function generateIPAddress() {
    return Array(4).fill(0).map(() => Math.floor(Math.random() * 256)).join('.');
}

// 生成随机MAC地址
function generateMACAddress() {
    const hex = '0123456789ABCDEF';
    return Array(6).fill(0).map(() => {
        return Array(2).fill(0).map(() => hex[Math.floor(Math.random() * 16)]).join('');
    }).join(':');
}

// 扩充昵称相关的数据
const nicknamePrefixes = ['快乐的', '可爱的', '机智的', '温柔的', '活泼的', '沉默的', '优雅的', '帅气的'];
const nicknameWords = ['小猫', '向日葵', '星星', '糖果', '奶茶', '蓝天', '彩虹', '音符', '精灵', '蝴蝶', 
                      '独角兽', '旅行者', '美食家', '小王子', '冒险家', '艺术家', '程序猿', '设计师'];
const nicknameSuffixes = ['酱', '宝', '豆', '仔', '酥', '糖', '猪', 'baby', 'er'];

// 社交信息生成函数
function generateSocialInfo(type) {
    switch (type) {
        case 'username':
            return 'user_' + generateRandomNumber(6);
        case 'nickname':
            // 生成更有趣的昵称
            return randomFromArray(nicknamePrefixes) + 
                   randomFromArray(nicknameWords) + 
                   randomFromArray(nicknameSuffixes);
        case 'qq':
            return generateRandomNumber(8);
        case 'wechat':
            return 'wx_' + generateRandomNumber(8);
        default:
            return '未知类型';
    }
}

// 设备信息生成函数
function generateDeviceInfo(type) {
    switch (type) {
        case 'device_name':
            return 'Device-' + generateRandomNumber(4);
        case 'device_model':
            return 'Model-' + generateRandomNumber(6);
        case 'device_id':
            return 'ID-' + generateRandomNumber(8);
        case 'protocol':
            return randomFromArray(['HTTP', 'MQTT', 'CoAP', 'TCP']);
        case 'data_format':
            return randomFromArray(['JSON', 'XML', 'Binary', 'Text']);
        case 'frequency':
            return randomNumber(1, 100) + 'Hz';
        case 'status':
            return randomFromArray(['在线', '离线', '维护中', '故障']);
        case 'device_type':
            return randomFromArray(deviceTypes);
        default:
            return '未知类型';
    }
}

// 金融信息生成函数
function generateFinanceInfo(type) {
    switch (type) {
        case 'account_name':
            return '账户' + generateRandomNumber(6);
        case 'account_id':
            return 'ACC' + generateRandomNumber(8);
        case 'transaction':
            return '交易' + generateRandomNumber(12);
        case 'balance':
            return '¥' + randomNumber(1000, 1000000).toLocaleString();
        case 'amount':
            return '¥' + randomNumber(100, 10000).toLocaleString();
        case 'invoice':
            return 'INV' + generateRandomNumber(10);
        case 'payment':
            return randomFromArray(['支付宝', '微信支付', '银行转账', '现金']);
        default:
            return '未知类型';
    }
}

// 扩充电商产品相关数据
const ecommerceProducts = {
    clothing: {
        brands: ['优衣库', 'ZARA', 'H&M', '无印良品', 'GAP', '耐克', '阿迪达斯'],
        types: ['T恤', '牛仔裤', '连衣裙', '外套', '卫衣', '运动裤', '衬衫'],
        attributes: ['纯棉', '宽松', '修身', '休闲', '时尚', '百搭']
    },
    electronics: {
        brands: ['苹果', '华为', '小米', '三星', 'OPPO', 'VIVO', '戴尔', '联想'],
        types: ['手机', '笔记本', '平板', '耳机', '智能手表', '充电器'],
        models: ['Pro', 'Max', 'Ultra', 'Plus', 'SE', 'Youth']
    },
    beauty: {
        brands: ['兰蒲', '雅诗兰黛', '资生堂', '娇韵诗', '海蓝之谜', '科颜氏'],
        types: ['面霜', '精华液', '面膜', '洁面乳', '护手霜', '防晒霜'],
        attributes: ['保湿', '美白', '抗衰', '补水', '控油']
    }
};

// 产品信息生成函数
function generateProductInfo(type) {
    switch (type) {
        case 'product_name':
            // 随机选择一个商品类别
            const categories = Object.keys(ecommerceProducts);
            const category = randomFromArray(categories);
            const productData = ecommerceProducts[category];
            
            // 生成更真实的电商商品名称
            return randomFromArray(productData.brands) + ' ' + 
                   randomFromArray(productData.types) + ' ' + 
                   (category === 'electronics' ? randomFromArray(productData.models) : randomFromArray(productData.attributes));
        case 'product_id':
            return 'PRD' + generateRandomNumber(8);
        case 'price':
            return '¥' + randomNumber(10, 1000).toLocaleString();
        case 'stock':
            return randomNumber(0, 1000) + '件';
        case 'promotion':
            return randomFromArray(['满减', '折扣', '赠品', '优惠券']);
        case 'tracking':
            return 'TRK' + generateRandomNumber(12);
        case 'shipping_address':
            // 生成更完整的收货地址
            const province = randomFromArray(provinces);
            const city = randomFromArray(cities);
            const district = randomFromArray(districts);
            const street = randomFromArray(streets);
            const detail = randomNumber(1, 999) + '号' +
                         randomFromArray(['A座', 'B座', 'C座']) +
                         randomNumber(1, 30) + '0' + randomNumber(1, 9) + '室';
            const phone = '1' + generateRandomNumber(10);
            const name = randomFromArray(firstNames) + randomFromArray(lastNames);
            
            return `${name} ${phone}\n${province}${city}市${district}${street}${detail}`;
        default:
            return '未知类型';
    }
}

// 用户行为生成函数
function generateUserInfo(type) {
    switch (type) {
        case 'user_id':
            return 'UID' + generateRandomNumber(8);
        case 'user_level':
            return 'LV' + randomNumber(1, 100);
        case 'active_time':
            return randomNumber(1, 24) + ':' + randomNumber(0, 59).toString().padStart(2, '0');
        case 'comment':
            return randomFromArray(['很好', '不错', '一般', '差']) + '，' + 
                   randomFromArray(['推荐', '值得购买', '性价比高', '需要改进']);
        case 'likes':
            return randomNumber(0, 1000) + '赞';
        case 'visit_log':
            return randomFromArray(['首页', '商品详情', '购物车', '个人中心']) + ' - ' + 
                   generateDateTime();
        default:
            return '未知类型';
    }
}

// 在文件顶部添加全局计数器
let sequenceCounter = 1;

// 基础信息生成函数
function generateBasicInfo(type) {
    switch (type) {
        case 'name':
            const randomNum = Math.random();
            if (randomNum < 0.1) { // 10% 概率生成复姓名字
                return randomFromArray(lastNames[2]) + randomFromArray(lastNames[0]);
            } else if (randomNum < 0.6) { // 50% 概率生成双字名
                return randomFromArray(firstNames) + randomFromArray(lastNames[1]);
            } else { // 40% 概率生成单字名
                return randomFromArray(firstNames) + randomFromArray(lastNames[0]);
            }
        case 'phone':
            return '1' + generateRandomNumber(10);
        case 'date':
            return generateDateTime();
        case 'address':
            return randomFromArray(cities) + '市' + randomFromArray(streets) + randomNumber(1, 999) + '号';
        case 'email':
            return 'user' + randomNumber(100, 999) + '@' + randomFromArray(domains);
        case 'ethnicity':
            return randomFromArray(ethnicGroups);
        case 'gender':
            return randomFromArray(genders);
        case 'age':
            return randomNumber(18, 80).toString() + '岁';
        case 'province_city':
            return generateAddress();
        case 'id':
            return '110101' + randomDate(new Date(1960, 0, 1), new Date(2000, 11, 31))
                   .toISOString().slice(0, 10).replace(/-/g, '') + randomNumber(1000, 9999);
        case 'community':
            return randomFromArray(communities);
        case 'website':
            return generateWebsite();
        case 'university':
            return randomFromArray(universities);
        case 'major':
            return randomFromArray(majors);
        case 'ip':
            return generateIPAddress();
        case 'mac':
            return generateMACAddress();
        case 'uuid':
            return generateUUID();
        case 'number':
            return generateRandomNumber(2);
        case 'amount':
            return generateAmount();
        case 'sequence':
            // 生成连续的序号并自增，转换为字符串
            return String(sequenceCounter++);
        default:
            return '未知类型';
    }
}

// 主函数
function generateContent(type, industry) {
    switch (type) {
        case 'name':
            return generateBasicInfo('name');
        case 'phone':
            return generateBasicInfo('phone');
        case 'date':
            return generateBasicInfo('date');
        case 'address':
            return generateBasicInfo('address');
        case 'email':
            return generateBasicInfo('email');
        case 'ethnicity':
            return generateBasicInfo('ethnicity');
        case 'gender':
            return generateBasicInfo('gender');
        case 'age':
            return generateBasicInfo('age');
        case 'province_city':
            return generateBasicInfo('province_city');
        case 'id':
            return generateBasicInfo('id');
        case 'community':
            return generateBasicInfo('community');
        case 'website':
            return generateBasicInfo('website');
        case 'university':
            return generateBasicInfo('university');
        case 'major':
            return generateBasicInfo('major');
        case 'ip':
            return generateBasicInfo('ip');
        case 'mac':
            return generateBasicInfo('mac');
        case 'uuid':
            return generateBasicInfo('uuid');
        case 'number':
            return generateBasicInfo('number');
        case 'amount':
            return generateBasicInfo('amount');
        case 'sequence':
            return generateBasicInfo('sequence');
        case 'username':
        case 'nickname':
        case 'qq':
        case 'wechat':
            return generateSocialInfo(type);
        case 'device_name':
        case 'device_model':
        case 'device_id':
        case 'device_type':
        case 'protocol':
        case 'data_format':
        case 'frequency':
        case 'status':
            return generateDeviceInfo(type);
        case 'account_name':
        case 'account_id':
        case 'transaction':
        case 'balance':
        case 'invoice':
        case 'payment':
            return generateFinanceInfo(type);
        case 'product_name':
        case 'product_id':
        case 'price':
        case 'stock':
        case 'promotion':
        case 'tracking':
        case 'shipping_address':
            return generateProductInfo(type);
        case 'user_id':
        case 'user_level':
        case 'active_time':
        case 'comment':
        case 'likes':
        case 'visit_log':
            return generateUserInfo(type);
        default:
            return generateBasicInfo('name');
    }
}

// 初始化插件
figma.showUI(__html__, {
    width: 300,
    height: 800
});

// 处理UI发来的消息
figma.ui.onmessage = async (msg) => {
    if (msg.type === 'fill-text') {
        // 处理自定义文本
            if (msg.contentType === 'custom') {
                const nodes = figma.currentPage.selection;
                if (nodes.length > 0) {
                    // 按换行符拆分多行文本并过滤空行
                    const lines = msg.text.split('\n').filter(line => line.trim() !== '');
                    
                    // 如果有有效行才进行填充
                    if (lines.length > 0) {
                        // 遍历选中的节点
                        let lineIndex = 0;
                        for (const node of nodes) {
                            if (node.type === "TEXT") {
                                await figma.loadFontAsync(node.fontName);
                                // 填充当前行并递增索引
                                node.characters = lines[lineIndex] || '';
                                lineIndex = (lineIndex + 1) % lines.length;
                                console.log(`Filled node with line ${lineIndex}: ${lines[lineIndex]}`);
                            } else {
                                // 处理所有容器类型节点
                                await traverseNode(node, 'custom', null, true, lineIndex, lines);
                            }
                        }
                    }
                }
                return;
            }

        // 如果是序号类型，且是第一次选择，重置计数器
        if (msg.contentType === 'sequence') {
            sequenceCounter = 1;
        }
        
        const nodes = figma.currentPage.selection;
        if (nodes.length > 0) {
            for (const node of nodes) {
                if (node.type === "TEXT") {
                    await figma.loadFontAsync(node.fontName);
                    node.characters = generateContent(msg.contentType, msg.industry);
                } else if (node.type === "FRAME" || node.type === "GROUP") {
                    await traverseNode(node, msg.contentType, msg.industry);
                }
            }
        }
    }
};

async function traverseNode(node, contentType, industry, customText = null, lineIndex = 0, lines = []) {
    // 处理所有可能包含子节点的类型
    const nodeTypesWithChildren = ['FRAME', 'GROUP', 'INSTANCE', 'COMPONENT', 'SECTION', 'AUTO_LAYOUT'];
    
    if (nodeTypesWithChildren.includes(node.type) && 'children' in node) {
        for (const child of node.children) {
            if (child.type === "TEXT") {
                await figma.loadFontAsync(child.fontName);
                if (customText && lines.length > 0) {
                    // 如果有自定义文本且存在有效行，按行循环填充
                    child.characters = lines[lineIndex] || '';
                    lineIndex = (lineIndex + 1) % lines.length;
                    console.log(`Filled node with line ${lineIndex}: ${lines[lineIndex]}`);
                } else if (customText) {
                    // 如果只有customText标志但没有lines，保持原内容
                    continue;
                } else {
                    // 否则生成随机内容
                    child.characters = generateContent(contentType, industry);
                }
            } else if (nodeTypesWithChildren.includes(child.type)) {
                // 递归处理子节点，传递当前行索引
                await traverseNode(child, contentType, industry, customText, lineIndex, lines);
            } else if (child.type === "AUTO_LAYOUT") {
                // 特殊处理自动布局容器
                if (child.children && child.children.length > 0) {
                    for (const autoChild of child.children) {
                        await traverseNode(autoChild, contentType, industry, customText, lineIndex, lines);
                    }
                }
            }
        }
    }
}

    const recipes=[
      {name:'배추김치',category:'김치',emoji:'🥬',time:'절임 포함 약 5시간',serves:'배추 1포기',desc:'소량으로 담가 며칠 두고 먹기 좋은 기본 배추김치.',ingredients:['배추 1포기(약 2kg)','굵은소금 1컵(절임용)','무 200g, 쪽파 80g','고춧가루 1컵','멸치액젓 ⅓컵, 새우젓 2큰술','다진 마늘 3큰술, 다진 생강 1작은술','설탕 1큰술, 물 ½컵'],steps:['배추를 4등분해 물에 적신 뒤 줄기 사이에 소금을 뿌립니다. 3~4시간 절이며 중간에 한 번 뒤집습니다.','절인 배추를 2~3번 헹구고 채반에서 30분 이상 물기를 뺍니다.','무는 채 썰고 쪽파는 4cm 길이로 자릅니다. 고춧가루, 액젓, 새우젓, 마늘, 생강, 설탕, 물을 섞어 양념을 만듭니다.','무와 쪽파를 양념에 버무린 뒤 배추 잎 사이사이에 고르게 바릅니다.','용기에 눌러 담아 실온에서 반나절~하루 익힌 뒤 냉장 보관합니다.'],tip:'절임이 잘됐는지 두꺼운 줄기 부분을 구부려 보세요. 부러지지 않고 유연하게 휘면 좋습니다.'},
      {name:'김치찌개',category:'국·찌개',emoji:'🍲',time:'30분',serves:'2인분',desc:'잘 익은 김치와 돼지고기로 깊은 맛을 내는 찌개.',ingredients:['신김치 250g','돼지고기 앞다리살 150g','두부 ½모, 대파 ½대','양파 ½개','물 또는 멸치육수 500ml','고춧가루 1큰술, 국간장 1큰술'],steps:['돼지고기와 김치를 먹기 좋게 썰고 양파, 대파, 두부도 준비합니다.','냄비에 돼지고기를 볶다가 김치를 넣고 3~4분 더 볶습니다.','물 또는 육수를 붓고 끓으면 중불로 낮춰 15분 끓입니다.','고춧가루와 국간장을 넣고 두부, 양파를 더해 5분 끓입니다.','대파를 넣고 한소끔 더 끓인 뒤 간을 맞춥니다.'],tip:'김치의 짠맛에 따라 국간장 양을 줄이거나 늘리세요.'},
      {name:'된장찌개',category:'국·찌개',emoji:'🥘',time:'25분',serves:'2인분',desc:'채소와 두부를 듬뿍 넣은 구수한 집밥 찌개.',ingredients:['멸치육수 500ml','된장 2큰술','애호박 ⅓개, 양파 ½개','감자 1개, 두부 ½모','대파 ½대, 청양고추 1개(선택)'],steps:['감자, 애호박, 양파, 두부를 한입 크기로 썹니다.','육수에 된장을 풀고 감자를 넣어 8분 끓입니다.','양파와 애호박을 넣고 5분 더 끓입니다.','두부, 대파, 고추를 넣고 3~4분 끓여 마무리합니다.'],tip:'된장마다 염도가 다르므로 처음에는 1½큰술만 풀고 마지막에 간을 맞춰도 좋습니다.'},
      {name:'소불고기',category:'메인 요리',emoji:'🥩',time:'재움 포함 45분',serves:'2~3인분',desc:'달짝지근한 양념으로 볶아 밥과 곁들이기 좋은 메뉴.',ingredients:['소불고기용 쇠고기 400g','양파 ½개, 대파 1대','간장 4큰술, 설탕 2큰술','다진 마늘 1큰술','참기름 1큰술, 후춧가루 약간','물 ⅓컵'],steps:['쇠고기는 키친타월로 핏물을 가볍게 닦습니다.','간장, 설탕, 마늘, 참기름, 후춧가루를 섞어 고기와 버무리고 20분 재웁니다.','달군 팬에 고기와 채 썬 양파를 넣고 센 불에서 볶습니다.','물을 붓고 고기가 익을 때까지 5~7분 볶다가 대파를 넣어 마무리합니다.'],tip:'고기를 한꺼번에 너무 많이 넣으면 물이 많이 생기니 팬이 작다면 나누어 볶으세요.'},
      {name:'비빔밥',category:'한 그릇',emoji:'🍚',time:'35분',serves:'2인분',desc:'냉장고 채소를 활용해 알록달록 차리는 한 그릇.',ingredients:['밥 2공기','시금치 100g, 콩나물 100g','당근 ½개, 애호박 ⅓개','달걀 2개','고추장 2큰술, 참기름 1큰술','간장·소금 약간'],steps:['시금치와 콩나물을 각각 데쳐 물기를 짜고 소금과 참기름으로 가볍게 무칩니다.','당근과 애호박은 채 썰어 팬에서 따로 볶습니다.','달걀프라이를 만듭니다.','그릇에 밥을 담고 채소와 달걀을 올립니다.','고추장과 참기름을 곁들여 먹기 직전에 비빕니다.'],tip:'남은 나물이나 버섯볶음이 있다면 그대로 올려도 좋습니다.'},
      {name:'계란말이',category:'반찬',emoji:'🍳',time:'15분',serves:'2인분',desc:'도시락에도 잘 어울리는 부드러운 기본 반찬.',ingredients:['달걀 4개','대파 2큰술(잘게 썬 것)','당근 2큰술(잘게 썬 것)','소금 ¼작은술','식용유 약간'],steps:['달걀을 풀어 소금, 대파, 당근을 섞습니다.','약불로 달군 사각 팬에 기름을 얇게 바르고 달걀물을 조금 붓습니다.','밑면이 익으면 한쪽부터 말고 빈 공간에 달걀물을 이어 붓습니다.','같은 과정을 반복해 도톰하게 말고, 한 김 식힌 뒤 썹니다.'],tip:'불이 세면 겉만 빨리 익으므로 약불을 유지하세요.'},
      {name:'잡채',category:'메인 요리',emoji:'🍜',time:'40분',serves:'3~4인분',desc:'당면과 채소를 한데 버무린 달콤 짭짤한 한식.',ingredients:['당면 200g','시금치 100g, 당근 ½개','양파 ½개, 표고버섯 3개','간장 4큰술, 설탕 2큰술','참기름 2큰술, 식용유 약간'],steps:['당면을 끓는 물에 포장지 시간에 맞춰 삶고 찬물에 헹군 뒤 물기를 뺍니다.','시금치는 데쳐 무치고, 당근·양파·버섯은 채 썰어 각각 볶습니다.','팬에 당면과 간장, 설탕을 넣어 볶아 양념이 스며들게 합니다.','채소를 넣고 섞은 뒤 불을 끄고 참기름을 둘러 버무립니다.'],tip:'당면은 제품마다 삶는 시간이 다르니 포장지 안내를 먼저 확인하세요.'},
      {name:'두부조림',category:'반찬',emoji:'🧈',time:'20분',serves:'2인분',desc:'짭조름한 양념이 스며든 든든한 밥반찬.',ingredients:['두부 1모(300g)','대파 ½대, 양파 ¼개','간장 2큰술, 고춧가루 1큰술','다진 마늘 ½큰술','물 ½컵, 설탕 ½작은술','식용유 약간'],steps:['두부를 1.5cm 두께로 썰어 물기를 닦습니다.','팬에 기름을 두르고 두부 양면을 노릇하게 굽습니다.','간장, 고춧가루, 마늘, 설탕, 물을 섞고 양파와 함께 팬에 붓습니다.','중약불에서 7~8분 조리며 양념을 끼얹고 대파를 올립니다.'],tip:'부침용 두부를 쓰면 조리는 동안 모양이 잘 유지됩니다.'},
      {name:'김치전',category:'반찬',emoji:'🥞',time:'20분',serves:'2인분',desc:'익은 김치로 바삭하게 부치는 간단한 전.',ingredients:['신김치 1컵(잘게 썬 것)','부침가루 1컵','차가운 물 ¾컵','김치 국물 2큰술','대파 ½대, 식용유 적당량'],steps:['김치와 대파를 잘게 썹니다.','부침가루, 차가운 물, 김치 국물을 섞고 김치와 대파를 넣습니다.','팬에 기름을 넉넉히 두르고 반죽을 얇게 펼칩니다.','중불에서 가장자리가 바삭해지면 뒤집어 반대쪽도 노릇하게 굽습니다.'],tip:'반죽을 얇게 펴고 팬을 충분히 예열하면 더 바삭합니다.'}
    ];
    recipes.find(r=>r.name==='배추김치').category='김치 종류';
    recipes.find(r=>r.name==='잡채').category='명절 음식';
    for(const name of ['계란말이','두부조림','김치전']) recipes.find(r=>r.name===name).category='매일 반찬';
    recipes.push(
      {name:'알타리김치',category:'김치 종류',emoji:'🥕',time:'절임 포함 3시간',serves:'총각무 1kg',desc:'아삭한 총각무의 맛을 살린 알타리김치.',ingredients:['총각무 1kg','굵은소금 ⅓컵','고춧가루 ½컵','멸치액젓 3큰술, 새우젓 1큰술','다진 마늘 2큰술, 다진 생강 ½작은술','쪽파 50g, 설탕 1큰술'],steps:['총각무는 잔뿌리를 다듬고 씻어 큰 것은 반으로 가릅니다.','굵은소금을 골고루 뿌려 1½~2시간 절이고 중간에 뒤집습니다.','가볍게 헹궈 물기를 뺀 뒤 나머지 재료로 만든 양념에 버무립니다.','용기에 눌러 담아 반나절 익힌 뒤 냉장 보관합니다.'],tip:'무청도 함께 버무리면 맛있습니다.'},
      {name:'열무 얼갈이김치',category:'김치 종류',emoji:'🥬',time:'절임 포함 2시간',serves:'채소 1kg',desc:'국수에 곁들이기 좋은 시원한 여름 김치.',ingredients:['열무 500g, 얼갈이배추 500g','굵은소금 ⅓컵','고춧가루 ½컵, 멸치액젓 ¼컵','다진 마늘 2큰술, 다진 생강 ½작은술','양파 ½개, 쪽파 50g','물 1컵'],steps:['열무와 얼갈이를 다듬고 5cm 길이로 잘라 씻습니다.','소금을 뿌려 40~50분 절이고 한 번 뒤집은 뒤 살살 헹궈 물기를 뺍니다.','고춧가루, 액젓, 마늘, 생강, 물을 섞고 채 썬 양파와 쪽파를 넣습니다.','채소를 으깨지 않게 가볍게 버무려 용기에 담고 반나절 익힌 뒤 냉장 보관합니다.'],tip:'잎채소는 오래 주무르면 풋내가 날 수 있습니다.'},
      {name:'파김치',category:'김치 종류',emoji:'🌿',time:'50분',serves:'쪽파 500g',desc:'쪽파의 알싸함과 진한 양념이 어우러진 김치.',ingredients:['쪽파 500g','멸치액젓 ¼컵','고춧가루 ½컵','다진 마늘 1큰술, 다진 생강 ½작은술','설탕 1큰술'],steps:['쪽파를 다듬어 씻고 물기를 충분히 뺍니다.','뿌리 쪽에 액젓을 먼저 뿌려 20분 두고 중간에 한 번 뒤집습니다.','남은 액젓에 고춧가루, 마늘, 생강, 설탕을 섞습니다.','쪽파를 양념에 가볍게 버무려 돌돌 말아 용기에 담습니다.'],tip:'두꺼운 뿌리 부분에 양념을 더 발라 간을 맞춥니다.'},
      {name:'오이소박이',category:'김치 종류',emoji:'🥒',time:'절임 포함 1시간',serves:'오이 5개',desc:'아삭하게 바로 먹어도 좋은 오이김치.',ingredients:['오이 5개','소금 2큰술','부추 100g, 당근 ¼개','고춧가루 4큰술, 멸치액젓 2큰술','다진 마늘 1큰술, 설탕 1작은술'],steps:['오이를 4~5cm 길이로 자르고 한쪽 끝을 남긴 채 십자 모양으로 칼집을 냅니다.','소금에 30분 절인 뒤 가볍게 헹구고 물기를 뺍니다.','잘게 썬 부추와 당근을 고춧가루, 액젓, 마늘, 설탕과 섞습니다.','오이 칼집마다 소를 채워 용기에 담고 냉장 보관합니다.'],tip:'오이는 오래 익히기보다 담근 뒤 며칠 안에 먹으면 아삭합니다.'},
      {name:'동치미',category:'김치 종류',emoji:'🫙',time:'절임 포함 2시간',serves:'무 1kg',desc:'맑고 시원한 국물을 즐기는 겨울 김치.',ingredients:['작은 무 1kg','굵은소금 3큰술','물 2L, 소금 2큰술','쪽파 50g, 마늘 5쪽, 생강 1쪽','배 ½개, 청양고추 2개(선택)'],steps:['무를 깨끗이 씻어 소금 3큰술에 1시간 절입니다.','물 2L에 소금 2큰술을 녹이고 배, 마늘, 생강은 큼직하게 썹니다.','용기에 무와 쪽파, 배, 마늘, 생강, 고추를 담고 소금물을 붓습니다.','실온에서 1~2일 익힌 뒤 냉장고에서 충분히 차게 숙성합니다.'],tip:'국물의 짠맛은 무의 크기와 절임 정도에 따라 달라지니 담기 전에 맛을 보세요.'},
      {name:'소갈비찜',category:'명절 음식',emoji:'🍖',time:'약 2시간',serves:'4인분',desc:'명절 상에 올리기 좋은 부드러운 갈비찜.',ingredients:['찜용 소갈비 1kg','무 250g, 당근 1개','간장 ½컵, 설탕 3큰술','다진 마늘 2큰술, 배즙 ½컵','참기름 1큰술, 물 3컵'],steps:['갈비를 찬물에 1시간 담가 핏물을 빼고 끓는 물에 5분 데쳐 씻습니다.','간장, 설탕, 마늘, 배즙, 참기름을 섞어 양념을 만듭니다.','냄비에 갈비와 양념, 물을 넣고 뚜껑을 덮어 중약불에서 50분 끓입니다.','무와 당근을 넣고 갈비가 부드러워질 때까지 30~40분 더 조립니다.'],tip:'국물이 너무 빨리 졸면 물을 조금씩 보충하세요.'},
      {name:'떡국',category:'명절 음식',emoji:'🍜',time:'30분',serves:'2인분',desc:'새해 아침에 따뜻하게 먹는 맑은 떡국.',ingredients:['떡국떡 300g','소고기 국거리 100g','물 800ml','국간장 1큰술, 다진 마늘 ½큰술','달걀 1개, 대파 ½대','소금·참기름 약간'],steps:['떡국떡을 물에 10분 담갔다가 건집니다.','냄비에 참기름을 두르고 소고기를 볶은 뒤 물을 부어 15분 끓입니다.','떡과 국간장, 마늘을 넣고 떡이 떠오를 때까지 끓입니다.','달걀을 풀어 넣고 대파를 더한 뒤 소금으로 간합니다.'],tip:'떡이 너무 오래 끓으면 퍼지므로 먹기 직전에 끓여 주세요.'},
      {name:'동그랑땡',category:'명절 음식',emoji:'🥮',time:'40분',serves:'4인분',desc:'한입 크기로 부쳐 명절 상에 올리는 고기전.',ingredients:['다진 돼지고기 300g','두부 ½모','다진 양파 ½개, 다진 당근 ¼개','달걀 2개, 밀가루 ½컵','소금 ½작은술, 후춧가루·식용유 약간'],steps:['두부의 물기를 꼭 짜고 고기, 양파, 당근, 소금, 후추와 잘 섞습니다.','반죽을 한입 크기로 둥글납작하게 빚습니다.','밀가루를 얇게 묻히고 푼 달걀에 담급니다.','중약불로 달군 팬에 앞뒤로 충분히 익혀 노릇하게 부칩니다.'],tip:'고기 속까지 익도록 너무 두껍게 빚지 마세요.'},
      {name:'멸치볶음',category:'밑반찬',emoji:'🐟',time:'15분',serves:'작은 반찬통 1개',desc:'바삭하고 짭조름해 두고 먹기 좋은 반찬.',ingredients:['잔멸치 100g','식용유 1큰술','간장 1큰술, 올리고당 2큰술','다진 마늘 ½작은술, 통깨 약간'],steps:['마른 팬에 멸치를 2~3분 볶아 비린내를 날립니다.','멸치를 덜어낸 뒤 팬에 기름, 간장, 올리고당, 마늘을 넣고 살짝 끓입니다.','멸치를 다시 넣고 빠르게 버무린 뒤 통깨를 뿌립니다.','완전히 식혀 밀폐 용기에 담습니다.'],tip:'멸치의 염도에 따라 간장은 조금 줄여도 좋습니다.'},
      {name:'메추리알 장조림',category:'밑반찬',emoji:'🥚',time:'25분',serves:'작은 반찬통 1개',desc:'냉장고에 두고 밥과 먹기 좋은 간장 반찬.',ingredients:['삶은 메추리알 300g','물 1컵, 간장 ⅓컵','설탕 1큰술, 올리고당 1큰술','마늘 4쪽, 꽈리고추 5개(선택)'],steps:['냄비에 물, 간장, 설탕, 마늘을 넣고 끓입니다.','메추리알을 넣고 중약불에서 12분 조립니다.','꽈리고추와 올리고당을 넣고 3분 더 끓입니다.','식혀서 국물과 함께 밀폐 용기에 담아 냉장 보관합니다.'],tip:'조림 국물에 잠기도록 보관하면 간이 고르게 배어듭니다.'},
      {name:'콩나물무침',category:'매일 반찬',emoji:'🌱',time:'15분',serves:'2~3인분',desc:'아삭하고 담백해 매일 밥상에 잘 맞는 나물.',ingredients:['콩나물 300g','소금 ½작은술','다진 마늘 ½작은술','송송 썬 대파 1큰술','참기름 1큰술, 통깨 약간'],steps:['콩나물을 씻어 냄비에 담고 물 ½컵을 붓습니다.','뚜껑을 덮어 5~6분 익힌 뒤 건져 물기를 뺍니다.','소금, 마늘, 대파, 참기름을 넣고 가볍게 무칩니다.','통깨를 뿌려 마무리합니다.'],tip:'익히는 동안 뚜껑을 열었다 닫았다 하면 비린내가 날 수 있습니다.'}
    );
    recipes.push({name:'소고기 미역국',category:'국·찌개',emoji:'🥣',time:'40분',serves:'4인분',desc:'생일상에도 일상 밥상에도 잘 어울리는 소고기 미역국.',ingredients:['국거리용 소고기 180g','마른 미역 20g','물 또는 쌀뜨물 1.4L','국간장 2큰술, 참기름 1큰술','다진 마늘 1큰술, 소금 약간'],steps:['미역을 찬물에 10분 정도 불려 먹기 좋은 길이로 자릅니다.','냄비에 참기름을 두르고 소고기와 마늘을 볶습니다.','국간장 1큰술과 미역을 넣고 2~3분 더 볶습니다.','물을 붓고 끓어오르면 중약불에서 15~20분 끓입니다.','남은 국간장을 넣고 소금으로 간을 맞춥니다.'],tip:'미역은 불리면 크게 늘어나므로 마른 미역의 양을 먼저 확인하세요.'});
    const popularSources={
      '김치찌개':{views:5920000,label:'약 590만 회',creator:'완소연홍',url:'https://www.10000recipe.com/recipe/view.html?seq=1785098'},
      '소고기 미역국':{views:5640000,label:'약 560만 회',creator:'베리츄',url:'https://www.10000recipe.com/recipe/6873683'},
      '잡채':{views:4990000,label:'약 490만 회',creator:'엘린84',url:'https://www.10000recipe.com/recipe/view.html?seq=6879533'},
      '소갈비찜':{views:3450000,label:'약 340만 회',creator:'시크제이맘',url:'https://www.10000recipe.com/recipe/6881450'}
    };
    for(const r of recipes) if(popularSources[r.name]) r.popular=popularSources[r.name];
    const dishPhotos={
      '배추김치':'baechu-kimchi','알타리김치':'altari-kimchi','열무 얼갈이김치':'yeolmu-eolgari-kimchi','파김치':'pa-kimchi',
      '오이소박이':'oi-sobagi','동치미':'dongchimi','김치찌개':'kimchi-jjigae','된장찌개':'doenjang-jjigae',
      '소불고기':'bulgogi','비빔밥':'bibimbap','계란말이':'gyeran-mari','잡채':'japchae',
      '두부조림':'dubu-jorim','김치전':'kimchi-jeon','소갈비찜':'galbijjim','떡국':'tteokguk',
      '동그랑땡':'donggeurangttaeng','멸치볶음':'myeolchi-bokkeum','메추리알 장조림':'quail-egg-jorim','콩나물무침':'kongnamul-muchim','소고기 미역국':'miyeokguk'
    };
    for(const r of recipes) r.photo=`dishes/${dishPhotos[r.name]}.jpg`;
    recipes.sort((a,b)=>(b.popular?.views||0)-(a.popular?.views||0));
    const categories=['전체','김치 종류','명절 음식','밑반찬','매일 반찬','국·찌개','메인 요리','한 그릇'];
    let category='전체',query='',lastFocus=null,customRecipes=[],activeRecipe=null,editingId=null;
    const grid=document.getElementById('grid'),filters=document.getElementById('filters'),count=document.getElementById('count');
    const backdrop=document.getElementById('backdrop'),formBackdrop=document.getElementById('formBackdrop'),form=document.getElementById('recipeForm');
    const escapeHtml=(value)=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
    const field=(name)=>form.elements.namedItem(name);
    const allRecipes=()=>[...customRecipes,...recipes];
    const storageKey='hansik-custom-recipes-v1';
    function persist(){localStorage.setItem(storageKey,JSON.stringify(customRecipes))}
    function readPhoto(file){return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=()=>reject(new Error('사진을 읽지 못했습니다.'));reader.readAsDataURL(file)})}
    function render(){
      filters.innerHTML=categories.map(c=>`<button class="filter ${c===category?'active':''}" data-category="${c}" aria-pressed="${c===category}">${c}</button>`).join('');
      const list=allRecipes().filter(r=>(category==='전체'||r.category===category)&&(`${r.name} ${r.desc} ${r.ingredients.join(' ')}`).includes(query));
      count.textContent=`${list.length}개의 레시피`;
      grid.innerHTML=list.length?list.map(r=>`<button class="card" data-key="${escapeHtml(r.id||r.name)}" aria-label="${escapeHtml(r.name)} 레시피 보기"><div class="card-art">${r.photo?`<img src="${escapeHtml(r.photo)}" alt="완성된 ${escapeHtml(r.name)}" loading="lazy">`:'<div class="photo-empty" aria-label="사진 없음">🍽️<small>사진 없음</small></div>'}</div><div class="card-body"><div class="meta"><span>${escapeHtml(r.category)}</span><span>${escapeHtml(r.time)}</span></div>${r.popular?`<div class="popular-mark">많이 본 전통 레시피 · ${escapeHtml(r.popular.label)}</div>`:''}<h3>${escapeHtml(r.name)}</h3><p>${escapeHtml(r.desc)}</p><div class="card-foot"><span>${escapeHtml(r.serves)}</span><b>레시피 보기 ＋</b></div></div></button>`).join(''):'<div class="empty">찾는 레시피가 없습니다. 다른 이름이나 재료로 검색해 보세요.</div>';
    }
    function openRecipe(key){
      const r=allRecipes().find(x=>(x.id||x.name)===key);if(!r)return;activeRecipe=r;lastFocus=document.activeElement;
      document.getElementById('dialogMeta').textContent=`${r.category} · ${r.time} · ${r.serves}`;
      document.getElementById('dialogTitle').textContent=r.name;document.getElementById('dialogDesc').textContent=r.desc;
      document.getElementById('ingredients').innerHTML=r.ingredients.map(x=>`<li>${escapeHtml(x)}</li>`).join('');
      document.getElementById('steps').innerHTML=r.steps.map(x=>`<li>${escapeHtml(x)}</li>`).join('');
      const tip=document.getElementById('tip');tip.hidden=!r.tip;tip.textContent=`팁 · ${r.tip}`;
      const sourceBox=document.getElementById('sourceBox');sourceBox.hidden=!r.popular;
      if(r.popular){document.getElementById('sourceText').textContent=`만개의레시피 · ${r.popular.creator} · 공개 목록 조회 ${r.popular.label}`;document.getElementById('sourceLink').href=r.popular.url}
      document.getElementById('customActions').hidden=!r.custom;
      backdrop.classList.add('open');document.body.style.overflow='hidden';document.getElementById('close').focus();
    }
    function closeRecipe(){backdrop.classList.remove('open');if(!formBackdrop.classList.contains('open'))document.body.style.overflow='';lastFocus?.focus()}
    function openForm(recipe=null){
      editingId=recipe?.id||null;lastFocus=document.activeElement;form.reset();
      document.getElementById('formTitle').textContent=recipe?'내 레시피 수정':'내 레시피 추가';
      document.getElementById('saveRecipe').textContent=recipe?'수정 저장':'저장하기';
      document.getElementById('deleteRecipe').hidden=!recipe;document.getElementById('formStatus').textContent='';
      if(recipe){for(const key of ['name','category','time','serves','desc','tip'])field(key).value=recipe[key]||'';field('ingredients').value=recipe.ingredients.join('\n');field('steps').value=recipe.steps.join('\n')}
      formBackdrop.classList.add('open');document.body.style.overflow='hidden';field('name').focus();
    }
    function closeForm(){formBackdrop.classList.remove('open');document.body.style.overflow='';lastFocus?.focus()}
    function loadCustom(){
      try{const saved=JSON.parse(localStorage.getItem(storageKey)||'[]');customRecipes=Array.isArray(saved)?saved:[];render()}
      catch(error){document.getElementById('loadStatus').textContent='이 브라우저에 저장된 레시피를 읽지 못했습니다.'}
    }
    filters.addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(b){category=b.dataset.category;render()}});
    grid.addEventListener('click',e=>{const b=e.target.closest('[data-key]');if(b)openRecipe(b.dataset.key)});
    document.getElementById('search').addEventListener('input',e=>{query=e.target.value.trim();render()});
    document.getElementById('close').addEventListener('click',closeRecipe);
    backdrop.addEventListener('click',e=>{if(e.target===backdrop)closeRecipe()});
    document.getElementById('addRecipe').addEventListener('click',()=>openForm());
    document.getElementById('editRecipe').addEventListener('click',()=>{const recipe=activeRecipe;closeRecipe();openForm(recipe)});
    document.getElementById('formClose').addEventListener('click',closeForm);
    document.getElementById('formCancel').addEventListener('click',closeForm);
    formBackdrop.addEventListener('click',e=>{if(e.target===formBackdrop)closeForm()});
    form.addEventListener('submit',async e=>{
      e.preventDefault();if(!form.reportValidity())return;
      const payload={name:field('name').value.trim(),category:field('category').value,time:field('time').value.trim(),serves:field('serves').value.trim(),desc:field('desc').value.trim(),ingredients:field('ingredients').value.split('\n').map(x=>x.trim()).filter(Boolean),steps:field('steps').value.split('\n').map(x=>x.trim()).filter(Boolean),tip:field('tip').value.trim()};
      if(!payload.ingredients.length||!payload.steps.length){document.getElementById('formStatus').textContent='재료와 만드는 순서를 각각 한 줄 이상 적어 주세요.';return}
      const photo=field('photo').files[0];if(photo&&photo.size>5*1024*1024){document.getElementById('formStatus').textContent='사진은 5MB 이하만 올릴 수 있습니다.';return}
      const save=document.getElementById('saveRecipe');save.disabled=true;document.getElementById('formStatus').textContent='저장 중입니다…';
      try{const existing=customRecipes.find(r=>r.id===editingId);const recipe={...payload,id:editingId||crypto.randomUUID(),custom:true,photo:photo?await readPhoto(photo):existing?.photo||''};const previous=customRecipes;customRecipes=editingId?customRecipes.map(r=>r.id===editingId?recipe:r):[recipe,...customRecipes];try{persist()}catch(error){customRecipes=previous;throw new Error('브라우저 저장 공간이 부족합니다. 사진을 작게 줄여 다시 시도해 주세요.')}render();closeForm();document.getElementById('loadStatus').textContent='이 브라우저에 레시피를 저장했습니다.';setTimeout(()=>document.getElementById('loadStatus').textContent='',4000)}catch(error){document.getElementById('formStatus').textContent=error.message||'저장하지 못했습니다.'}finally{save.disabled=false}
    });
    document.getElementById('deleteRecipe').addEventListener('click',async()=>{
      if(!editingId||!confirm('이 레시피를 삭제할까요?'))return;
      const button=document.getElementById('deleteRecipe');button.disabled=true;document.getElementById('formStatus').textContent='삭제 중입니다…';
      try{customRecipes=customRecipes.filter(r=>r.id!==editingId);persist();render();closeForm();document.getElementById('loadStatus').textContent='레시피를 삭제했습니다.';setTimeout(()=>document.getElementById('loadStatus').textContent='',4000)}catch(error){document.getElementById('formStatus').textContent=error.message||'삭제하지 못했습니다.'}finally{button.disabled=false}
    });
    document.addEventListener('keydown',e=>{
      if(e.key==='Escape'){if(formBackdrop.classList.contains('open'))closeForm();else if(backdrop.classList.contains('open'))closeRecipe()}
      if(e.key==='Tab'){const layer=formBackdrop.classList.contains('open')?formBackdrop:backdrop.classList.contains('open')?backdrop:null;if(!layer)return;const focusable=[...layer.querySelectorAll('button:not([hidden]),input,select,textarea,a[href]')].filter(el=>el.offsetParent!==null);if(!focusable.length)return;const first=focusable[0],last=focusable.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}
    });
    render();loadCustom();

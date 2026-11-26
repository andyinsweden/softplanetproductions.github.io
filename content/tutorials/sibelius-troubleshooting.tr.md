---
title: 'Sibelius: 50 yaygın sorun ve çözümü'
description: Playback, MIDI klavyeleri, not girişi, notasyon, puan düzeni, parçalar, PDF ihracat ve dosya kurtarma ile
  ortak Sibelius problemleri çözün.
draft: false
showTableOfContents: false
---

50 yaygın Sibelius problemlerine pratik çözümler bulun, eksik oyun gerisi garip puan aralığı ve PDF ihracat sorunları.

Bu talimatlar masaüstü Sibelius için tasarlanmıştır. Menü isimleri ve mevcut özellikler, Sibelius İlk, Sanatçı ve Ultimate de dahil olmak üzere sürümler ve baskılar arasında değişir. Bir komut eksikse, Sibelius'daki ismini arayın veya sürüminizle sağlanan Referans Kılavuzuna başvurun.

Büyük değişiklikler yapmadan önce, puanınızın ayrı bir kopyasını kurtarın.

## Bir Kategoriye Git {#jump-to-a-category}

- [Ses ve Playback](#sound-and-playback)
- [MIDI ve Not Girişi](#midi-and-note-input)
- [Notation, Voices and Rhythm](#notation-voices-and-rhythm)
- [Puan Layout ve Spacing](#score-layout-and-spacing)
- [Bölümler, Baskı ve İhracat](#parts-printing-and-exporting)
- [Tasarruf, Kurtarma ve Performans](#saving-recovery-and-performance)

{{< sibelius-troubleshooting-search >}}

## Ses ve Playback {#sound-and-playback}

### 1. Neden Sibelius'da Ses Yok?

Oyun geri dönüş çizgisi hareket ederse ama hiçbir şey duymuyorsanız, ses çıktısını kontrol edin, oyun yeniden yapılandırma ve  Mixer.

**Çözüm Çözüm Çözüm çözümü**

1. Konuşmalarınızın veya kulaklıkların başka bir uygulamada çalıştığını onaylayın.
2. **Playback Cihazları (Playback Devices)** **Play Play Play (Play)** sekmeden açın.
3. Açık **Audio Engine Seçenekleri (Audio Engine Options)** ve amaçlanan ses arayüzünü seçin.
4. Oluşturulmuş bir ses kaynağı kullanan bir oyun geri yapılandırma seçin.
5. **Mixer**'i açın ve çamurlu kanalları kontrol edin, yalnız aletler veya düşük usta hacmi.

Sibelius'u başlattıktan sonra bir ses arayüzüne bağlanırsanız, programı arayüzle birlikte yeniden başlatın.

**İlgili:** Problemleri 2, 5 ve 6.

### 2. Sibelius Neden Yanlış Konuşmacılar veya Kulaklıklar Yoluyla Mücadele Ediyor?

Sibelius, işletim sisteminden varsayılan cihazdan farklı bir çıktı kullanabilir.

**Çözüm Çözüm Çözüm çözümü**

1. Bağlantı ve gerekli cihazda geçiş.
2. Open Open Open Open **Audio Engine Seçenekleri (Audio Engine Options)**.
3. Uygun arayüzü seçin.
4. arayüzünüzün birkaç çıktısı olup olmadığını kontrol edin.
5. Restart playback.

Cihazın eksik ise, yakın Sibelius ve işletim sisteminin programı yeniden açmadan önce bunu kabul ettiğini doğrulayın.

Bluetooth cihazları ek gecikmeyi sunabilir.

### 3. Playback Crackle, Click veya Break Up?

Çok küçük olan bir ses tampon, özellikle talep edilen ses kütüphaneleri ile kesintiye neden olabilir.

**Çözüm Çözüm Çözüm çözümü**

1. Open Open Open Open **Audio Engine Seçenekleri (Audio Engine Options)**.
2. Mevcut bir adım tarafından tampon boyutunu artırın.
3. Bir talep eden pasajı oynayın ve tekrar dinleyin.
4. Gereksiz uygulamaları kapatın.
5. UI sürücüsünin işletim sisteminizi desteklediğini kontrol edin.

Tekrar oyun gerisi stabil olana kadar. Ses bozuk kalırsa, aynı zamanda Mixer seviyelerini kontrol edin: klipler ve tampon sorunlar farklı düzeltmeler gerektirir.

### 4. MIDI Klavyemi Oynadığımda neden bir gecikme var?

Bir anahtara baskı ve ses duyma arasındaki zaman gecikmiş olarak adlandırılır.

**Çözüm Çözüm Çözüm çözümü**

1. Open Open Open Open **Audio Engine Seçenekleri (Audio Engine Options)**.
2. Buffer boyutunu yavaş yavaş azaltın.
3. Her değişiklikten sonra klavyeyi test edin.
4. Eğer tıklamalar görünürse, buffer'ı biraz artırın.

Windows'da, mevcut olduğunda arayüz üreticisinin ASIO sürücüsünü kullanın. MacOS'ta uygun Core Audio cihazı kullanın.

Hassas klavye izlemene ihtiyacınız olduğunda Bluetooth kulaklıklarından kaçının.

### 5. Neden One Instrument Silent?

Tek sessiz bir personel genellikle Mixer ayarlarına işaret eder, ses ataması veya oyun geri yükleme özellikleri.

**Çözüm Çözüm Çözüm çözümü**

1. **Mixer** açın.
2. Aracın çamur olmadığını kontrol edin.
3. Başka bir enstrümanın yalnız olup olmadığını kontrol edin.
4. Personelin uygun bir ses atandığını onaylayın.
5. Etkilenen bir not seçin ve kontrol edin **Play on pass** ayarlar **Inspector**nerede mevcut.

Ayrıca sessiz geçişten önce istenmeyen bir araç değişikliğine bakın.

### 6. Sibelius Neden Kayıp veya Yok Edilir?

Notasyon uygulaması ve ses kütüphanesi ayrı kurulum gerektirir.

**Çözüm Çözüm Çözüm çözümü**

1. Hangi ses kütüphanesini oyun geri yapılandırmanızı bekleyen kontrol edin.
2. Kütüphanenin kurulduğunu onaylayın.
3. Gerekirse, Avid hesabınızdan uygun taksit alın.
4. Kütüphaneyi taşıdıysanız, yerini güncellemek için desteklenen prosedürü takip edin.
5. Restart Sibelius ve eşleşen oyun yeniden yapılandırmasını seçin.

Ana uygulamayı yeniden yüklemenin büyük bir ses kütüphanesini yeniden yükleyeceğini varsaymayın.

### 7. Neden bir Alet Yanlış Sesi Mücadele Ediyor?

Personelin enstrümanı tanımı veya  Mixer ataması beklediğiniz sesle eşleştirmeyebilir.

**Çözüm Çözüm Çözüm çözümü**

1. Hangi enstrümanın personele atandığını kontrol edin.
2. Puanda araç değişikliklerine bakın.
3. Seçilmiş oyun geri konfigürasyonunu kontrol edin.
4. Personelin **Mixer**'deki ses atamasını gözden geçirin.

Aracın kendisini değiştirmeniz gerekiyorsa, uygun bir **Instrument Change** oluşturun. Personeli tek başına renaming, müzikal tanımını veya oyun geri sesini değiştirmez.

### 8. Dinamikler Playback'i Neden Etkiliyor?

Dinamikler uygun olmayan bir metin stili ile girdi veya yanlış konuma eklenerek amaçlanan sonucu üretmeyebilir.

**Çözüm Çözüm Çözüm çözümü**

1. Dinamikin başladığı notu seçin.
2. **Expression Text** oluşturun.
3. Metin stilinin sözcüğü menüsünü kullanarak dinamik bir şekilde ekleyin.
4. Amaçlanan personele ve dövmeye bağlı olduğunu kontrol edin.
5. İşaretten biraz önce geçiş yapın.

Dinamik hala küçük bir etkiye sahipse, başka bir playback sesini test edin. Ses kütüphaneleri dinamiklere nasıl yanıt verdiklerinde farklıdır.

### 9. Sibelius Tempo Marking'i Neden Tanımlıyor?

“Allegro” diyor bir başlık mutlaka oyun geri dönüş temposu eğitimi olarak çalışmıyor.

**Çözüm Çözüm Çözüm çözümü**

1. **Tempo Text** veya uygun **Metronome Mark** metin stili ile işaret oluşturun.
2. Kesin bir hız için, tanınmış bir dövme ünitesi ve tempo değeri içerir.
3. Ek konumunu kontrol edin.
4. **Performans Performans Performans Performansı Performans Performans Performans (Performance)** ayarlarını oyun gerisi kasıtlı olarak tempoyu değiştiriyorsa gözden geçirin.

Tüm puan sürekli olarak çok hızlı veya yavaş geliyorsa, oyun geri dönüş tempo kontrolünü de kontrol edin.

### 10. Neden Tekrarlar veya İlk ve İkinci Endings Incorrectly oynuyor?

Playback tekrar yapıya bağlıdır, sadece bir çizgi veya metin etiketinin görsel görünümü değil.

**Çözüm Çözüm Çözüm çözümü**

1. Doğru tekrar barlines kullanın.
2. Uygun ilk ve ikinci yolcu hattı türlerini kullanarak son hatları oluşturun.
3. Her sonun amaçlanan barlarda başladığını ve sona erdiğini kontrol edin.
4. Tekrar tekrar oyun geri yükleme ayarları ve herhangi bir manuel tekrar dizi.
5. Tekrarlanan bölümden önce test oyun geri dön.

Sadece “D.S” veya “D.C” gibi görünen sıradan metinden ziyade tekrar talimatları kullanın.

## MIDI ve Not Girişi {#midi-and-note-input}

### 11. Sibelius Neden MIDI Klavyemi Tanımıyor?

Cihaz, işletim sistemi veya Sibelius'da devre dışı bırakılabilir.

**Çözüm Çözüm Çözüm çözümü**

1. Sibelius'u açmadan önce klavyeyi bağlayın.
2. Open Open Open Open **Tercihler → Giriş Cihazları (Preferences → Input Devices)**.
3. Doğru cihazı enable the correct device.
4. Bir anahtar oynayın ve giriş göstergesi kontrol edin.
5. Eğer cihaz eksikse, başka bir USB portu veya kablo test edin.

Bir merkez karışırsa, doğrudan bilgisayara bağlanmaya çalışın. Bir üretici sürücüyü klavyenin bir tane gerektirdiği takdirde yükleyin.

### 12. Neden Klavyemi Duyabilirim ama Notlar Görünemez?

Bir ses duymak, Sibelius'un şu anda yayınlanmadığı anlamına gelmez. klavye aynı zamanda kendi sesini bağımsız olarak da üretebilir.

**Çözüm Çözüm Çözüm çözümü**

1. Girişin başlaması gereken geri veya pozisyon seçin.
2. Not-input modunda girin.
3. **Keypad**'de bir süre seçin.
4. Bir not oynayın.

Canlı kayıt için, **Flexi-time**'i adım giriş yerine kullanın. klavyenin hala görünmüyorsa **Giriş cihazları (Input Devices)**'de etkinleştirildiğini onaylayın.

### 13. Notlar Yanlış Octave'de Neden Girdi?

Bir octave değişimi, klavye ayarlarında veya enstrümanın notasyon kongrelerinde ortaya çıkabilir.

**Çözüm Çözüm Çözüm çözümü**

1. klavyenin octave ve transpose kontrollerini kontrol edin.
2. Normal bir piyano personeline giriş yapın.
3. Orijinal personele atanan enstrümanı kontrol edin.
4. Konser-pitch ve transposing-mark görüşlerini karşılaştırın.

Gitar ve resimcolo da dahil olmak üzere bazı araçlar, geleneksel olarak yazılı notlarından uzaklaşır. Diğer transposing aletleri farklı aralıklar ile değiştirir.

### 14. MIDI Notları Neden İkiye Girdi?

Duplicate input, aynı performans Sibelius'a tek bir MIDI rotasından daha fazla ulaşırken meydana gelebilir.

**Çözüm Çözüm Çözüm çözümü**

1. Open Open Open Open **Giriş cihazları (Input Devices)**.
2. Temporly sadece amaçlanan klavye girişi sağlar.
3. Gereksiz MIDI bağlantılarını bağlayın.
4. Herhangi bir MIDI-routing uygulama veya arayüz ayarlarını kontrol edin.
5. Tekrar tek bir not test edin.

İki kez ses duyuyorsanız ancak sadece bir not ortaya çıkıyor, ses izlemesini ve klavyenin **Yerel Kontrol (Local Control)** yerine ayarlıyor.

### 15. Flexi-time Record Messy Rhythms'ı Neden Üretiyor?

Canlı giriş, amaçlanan müzik için çok tam olarak yorumlanabilir, istenmeyen kısa notlar, dinlenmeler veya tupletler oluşturabilir.

**Çözüm Çözüm Çözüm çözümü**

1. Open Open Open Open **Flexi-time Seçenekleri (Flexi-time Options)**.
2. Geçişe uygun minimum not değerini ayarlayın.
3. Onlara ihtiyaç duymazsanız dizgeler.
4. Açık bir tıklama ile rahat bir tempoda kayıt edin.
5. Kısa bir geçiş yapın ve devam etmeden önce gözden geçirin.

Karmaşık müzik için, adım zamanlı giriş canlı kayıttan daha az düzeltme gerektirebilir.

### 16. Nasıl Chords'a Ayrı Notlar yerine girerim?

Notlar normalde başarıcı ritmik pozisyonları işgal ettiğinden sonra bir tane oynadılar.

**Çözüm Çözüm Çözüm çözümü**

MIDI girişi için, gerekli süresi seçtikten sonra chord'un notlarını birlikte oynayın.

Bilgisayar anahtarboard girişi için:

1. İlk nota girin.
2. Onu seçin.
3. Yukarıdaki notları veya aşağıda eklemek için aralık komutlarını kullanın.

Ortaya çıkan notların bir kök ve süresi paylaşmasını kontrol edin.

### 17. Bir Numeric Keypad olmadan Notlara Nasıl Giriyorum?

Sibelius'un ekranlı **Keypad**'i dizüstü bilgisayarınızın ayrı bir numara pedi olmamasına rağmen kullanabilirsiniz.

**Çözüm Çözüm Çözüm çözümü**

1. Panel kontrollerinden **Keypad**'i göster.
2. Gerekli süresi veya sanatsallaştırmayı tıklayın.
3. Bilgisayar klavyesi veya MIDI klavyesi ile perdeler girin.
4. **Tercihler (Preferences)**'de mevcut klavye-kıt setlerini gözden geçirin.

Ayrıca kısayolları özelleştirebilir veya sık sık sık girmezseniz USB sayısal bir klavyeyi bağlanabilirsiniz.

### 18. Neden Yeni Notlar Varan Müzik Değiştiriyor?

Not girişi, seçilen ritmik pozisyonda müziğini düzenler; her yeni fikir için otomatik olarak ekstra barlar yaratmaz.

**Çözüm Çözüm Çözüm çözümü**

1. İstenmeyen düzenlemeyi Undo.
2. Yeni pasaja girmeden önce gerekli barları ekleyin.
3. Yeni barlarda ilk dinlenmeyi seçin.
4. Orada not girişi başlayın.

Aynı personelde başka bir bağımsız ritim istiyorsanız, mevcut sesi yerine başka bir ses kullanın.

## Notation, Voices and Rhythm {#notation-voices-and-rhythm}

### 19. How Do I Add or Delete Entire Bars?

Notları ve barları silme farklı operasyonlardır.

**Çözüm Çözüm Çözüm çözümü**

Barlar eklemek için, **Home Home Home Home → Bars Bar → Add Add Add AddAdd Add Add Add add Add Add Add (Home → Bars → Add)** kullanın ve uygun seçeneği seçin.

Barları silmek için:

1. Tüm merdivenlerdeki barların bir **Sistem seçimi sistemi seçimi**'i yapın.
2. Seçimin tam olarak kaldırdığınız barları içerdiğini kontrol edin.
3. Seçimi delete.

Normal bir geçiş seçimi, barları yerinde terk ederken müzik içeriklerini açıklayabilir.

### 20. Beklenmeyen Bir Zaman İmzasını Nasıl Değiştirebilirim?

Değişen metre, Sibelius'un mevcut müziği yeni barlara yeniden düzenlemesine neden olabilir.

**Çözüm Çözüm Çözüm çözümü**

1. Puanın bir kopyasını tasarruf edin.
2. Değişimin başladığı noktayı seçin.
3. **Time Signature Signature (Time Signature)** kontrollerini açın.
4. Mevcut barları yeniden yazmak için seçeneği gözden geçirin.
5. Değişimi uygulayın ve etkilenen pasajı inceleyin.

Yeniden yazma mevcut bar yapısını korur, ancak zamanların görüntülenen metreyle eşleşmediği barları bırakabilir. Bu seçeneği kasıtlı olarak kullanın.

### 21. Bir Pickup Bar veya Anacrusis Nasıl Yaratabilirim?

Bir pickup, 4/4'deki ilk tam bir parçadan önce bir vuruş gibi kısaltılmış bir açılış barıdır.

**Çözüm Çözüm Çözüm çözümü**

Açılış zamanı imzasını oluştururken, **pickup /upbeat** seçeneğini kullanın ve süresini belirtin.

Mevcut bir puan için, bar-kreasyon kontrollerini kullanarak gerekli uzunluktan bir **düzensiz bar** oluşturmak, sonra açılış müziği dikkatlice transfer edin.

Bar numarasını kontrol edin ve son bar eğer parça tamamlayıcı bir kısa sonu gerektirirse.

### 22. Bir Personelde İki Bağımsız Rhythms nasıl koyarım?

Aynı anda müzik hatları için ayrı sesler kullanın.

**Çözüm Çözüm Çözüm çözümü**

1. **Ses 1**'deki ilk çizgiye girin.
2. İkinci çizgi için başlangıç pozisyonu seçin.
3. **Ses 2**'i **Keypad**'de seçin.
4. Notlarını girin ve bağımsız olarak dinlenin.

Sesler 1 ve 2 genellikle karşıt kök yolları sağlar. Sadece notasyon onlara ihtiyaç duyduğunda ek sesler kullanın.

Notların farklı ritimleri gerektirdiğinde bir koordinasyon kullanmayın.

### 23. Ekstra Rests Neden Puanımda Görünüyor?

Her aktif sesin kendi ritmik yapısına ihtiyacı vardır, bu yüzden ek sesler ek dinlenmeleri tanıtabilir.

**Çözüm Çözüm Çözüm çözümü**

1. Beklenmeyen bir dinlenme seçin ve sesini tanımlayın.
2. Bu sesin barda başka yerlerde gerekli notları olup olmadığını kontrol edin.
3. Bir yanlışlıkla ses çıkarmak uygun nerede.
4. Sadece müzikal olarak bunu yapmak için geçerli olduğunda dinlenin.

Saklamaktan kaçının sadece eksik bir ritmi gizlemek için. İlk olarak, amaçlanan bar süresi için her ses hesabından emin olun.

### 24. Triplets ve Diğer Tuplets nasıl yaratıyorum?

Tuplets normal gruptan farklı bir ritmik aralığı ayırır.

**Çözüm Çözüm Çözüm çözümü**

1. Bir not veya amaçlanan temel süresi ile geri dönün.
2. **Not Giriş → Tuplets (Note Input → Tuplets)** kullanın.
3. Gerekli tuplet seçin veya özel bir oran girin.
4. Kalan notlara girin.

Sıradan sekizinci bir üçlü için, sekizinci bir değerle başlayın. Eğer tuplet yanlış yere kapılırsa, geri alın ve başlangıç süresini ve oranını kontrol edin.

### 25. Notlarım Neden Incorrectly?

Kiriş grubu metreye, gruplandırma ayarlarına ve herhangi bir manuel kiriş değişikliklerine bağlıdır.

**Çözüm Çözüm Çözüm çözümü**

1. Zaman imzasının dövme grubunu kontrol edin.
2. Etkilenen notları seçin.
3. **Keypad** kiriş kontrollerini başlatmak, devam etmek veya gerekli olarak kirişleri kırmak.
4. Tekrarlanan bir konu için, her kirişi manuel olarak düzeltmek yerine gruplama ayarlarını ayarlama.

Örneğin, 6/8 normalde üç kişilik iki gruba sekizinci notlar katar, diğer metreler farklı bir modele ihtiyaç duyabilir.

### 26. İki Staves'de Nasıl Kirlenirim?

Cross-staff notasyon, eller arasında paylaşılan piyano pasajları için faydalıdır.

**Çözüm Çözüm Çözüm çözümü**

1. Başlangıç personeli üzerine geçişe girin.
2. Diğer personelde görünmesi gereken notları seçin.
3. Yukarıdaki veya aşağıda görüntülerini taşımak için **Cross-staff Notları (Cross-staff Notes)** komutlarını kullanın.
4. İnceleme kökleri, kirişler ve personel yayılmaktadır.

Cross-staff hareketi notların orijinal seslerine olan ilişkisini korur. Sıradan kesim ve yapıştırma müzik başka bir personele taşır ve aynı notasyon üretmeyebilir.

### 27. Tiem neden bir Slur gibi davranıyor?

Ties ve slurs farklı müzikal anlamlara sahiptir.

**Çözüm Çözüm Çözüm çözümü**

Aynı perdenin tekrar tekrar tekrar tekrar notlarına katılmak için bir **kravat kravat kravat kravat** kullanın. **Keypad** kravat kontrolü ile uygulayın.

Notlar arasında bir cümle veya sanatiülasyon göstermek için bir **Sur** kullanın. **Slur** komutunu kullanarak oluşturun.

Eğer bir kravat doğru bir şekilde bağlanmazsa, aşağıdaki notun yerini kontrol edin, tesadüfi, ses ve ritmik pozisyon.

### 28. Neden Kazalar Eksik mi yoksa Emekli mi?

Sibelius, bardaki daha önceki notlardan yanlışlıkla görüntüyü ve notasyon ayarlarını belirler.

**Çözüm Çözüm Çözüm çözümü**

1. Anahtar imzayı kontrol edin.
2. Aynı barda perdenin önceki olayları kontrol edin.
3. Notu seçin ve **Keypad** kullanarak kazara onu kontrol edin.
4. Okunabiliteyi geliştiren bir uyarıcı ekleyin.

Gerçek alanı sadece görünen bir sembolü zorlamak için değiştirmeyin. Kaza görüntüleri ve müzik alanı her ikisi de doğru olmalıdır.

### 29. Bir Notun Enharmonik Yazmasını Nasıl Değiştirebilirim?

Düz bir büyü uyum daha iyi uyum sağlarken bir perde keskin olarak girilebilir.

**Çözüm Çözüm Çözüm çözümü**

1. Not veya pasajı seçin.
2. **Respell** komutunu kullanın.
3. Avord ve anahtara karşı büyüye göz atın.

Örneğin, F-sharp gibi bir notun belirli bir harmonik bağlamda G-flat olarak yazılması gerekebilir.

Respelling seslendirme alanı korur. Transposing değişiklikler alanı yapar ve farklı bir problem çözer.

### 30. Neden Sibelius'da Red Notlar?

Kırmızı notheads genellikle bir perdenin enstrüman için tanımlanan aralığın dışında olduğunu gösterir.

**Çözüm Çözüm Çözüm çözümü**

1. Personele atanan enstrümanı kontrol edin.
2. Yazılı ve seslendirme perdelerini gözden geçirin.
3. Alet ayar ayarı kontrol edin.
4. Geçişin amaçlanan oyuncu için uygun olup olmadığına karar verin.

Bir dizi uyarı otomatik olarak, notasyon yanlış olduğu anlamına gelmez. Bununla birlikte, rengini gizleyin imkansız bir not oyunu yapamaz.

## Puan Layout ve Spacing {#score-layout-and-spacing}

### 31. Bir Sistemde Daha Fazla veya Daha Çok Daha Az Barlar Nasıl Yaparım?

Sibelius normalde sistem uzunluklarını otomatik olarak hesaplar, ancak önemli molaları kontrol edebilirsiniz.

**Çözüm Çözüm Çözüm çözümü**

1. Bir sistemi paylaşması gereken barları seçin.
2. **Layout → Format → Sisteme Ekle (Layout → Format → Make Into System)** kullanın.
3. Kalabalık notlar ve metin için sonucun incelenmesi.

Alternatif olarak, bir barline seçin ve bir **Sistem Break (System Break)** ekleyin.

Birçok sistem kalabalıksa, personel büyüklüğü, sayfa marjları ve her çizgiye daha fazla bar zorlamak yerine dikkat edin.

### 32. Sibelius neden Puanımı geri almayacak?

Mevcut şekillendirme kilitleri ve molaları otomatik düzen değişikliklerini engelleyebilir.

**Çözüm Çözüm Çözüm çözümü**

1. Ekran düzeni işaretleri.
2. Sistem molalarına bakın, sayfa molaları ve kilitli sistemler.
3. Etkilenen pasajı seçin.
4. **Unlock Format**'i uygun olanı kullanın.
5. Sadece ihtiyacınız olan molaları yeniden uygulayın.

İlk önce puan zaten dikkatlice hazırlanmış sayfa döndürür veya yayın düzeni kaydederse bir kopya kaydedin.

### 33. Staves arasında neden büyük boşluklar var?

Büyük boşluklar manuel hareket, çarpışma kaçınma veya dikey gerekçeye neden olabilir.

**Çözüm Çözüm Çözüm çözümü**

1. Etkilenen sistemleri seçin.
2. **Personel Spacing (Optimize Staff Spacing)** kullanın.
3. Şarkıya bakın, dinamikler, çizgiler veya metin boşlukları işgal eder.
4. Ayaklanma koşulları tüm bir sayfaya yayılırsa dikey gerekçe ayarları kontrol edin.

Daha önce manuel değişiklikler nedeniyse, tekrar optimize etmeden önce uygun personel-spaklama komutunu kullanın.

### 34. Neden Dinamik, Şarkı Sözleri veya Text Collide?

Otomatik çarpışma kaçınmaları, aşırılık veya kalabalık bir düzeni çözemez.

**Çözüm Çözüm Çözüm çözümü**

1. **Manyetik Layout (Magnetic Layout)**'in etkilenen nesneler için etkinleştirildiğini kontrol edin.
2. Gereksiz manuel konumlandırmayı yeniden yapın.
3. Personelin spacingini optimize edin.
4. Gerekirse sistemi daha yatay alana verin.
5. Sadece otomatik düzeni kontrol ettikten sonra küçük manuel ayarlamalar yapın.

Çok fazla müzik içeren bir sistem, çarpışma ayarlarına bakılmaksızın daha az barlara ihtiyaç duyabilir.

### 35. Noeven yatay Not Spacing Nasıl Geri Alabilirim?

Notları sürükleyin veya sürekli değişen spacing, tutarsız bir geçişten ayrılabilir.

**Çözüm Çözüm Çözüm çözümü**

1. Etkilenen pasajı seçin.
2. **Görünüm → Sıfır Notlar → Yeniden Yapın (Appearance → Reset Notes → Reset Note Spacing)**'i seçin.
3. Sözlerin, chord sembollerinin ve kazaların etrafında yayılmayı ihmal edin.
4. Sistem, geçiş kalabalık kalırsa kırılır.

Belirli bir nesne hala notundan çok uzak oturursa, bireysel konumunu da kontrol edin.

### 36. Nasıl Boş Staves’i?

Kullanılmayan merdivenleri okumak için büyük bir topluluk puanı daha kolay hale getirebilir.

**Çözüm Çözüm Çözüm çözümü**

1. Sistemleri seçin veya endişelenir.
2. **Layout → Hiding Staves → Hide Boş Staves (Layout → Hiding Staves → Hide Empty Staves)**'i seçin.
3. Tüm gerekli aletlerin görünür olduğunu kontrol edin.

Notlar veya diğer ilgili nesneler içeren bir personel boş olarak nitelendirilmeyebilir. Her şeyi bozmadan önce onu ihmal edin.

Tekrar görünmek için personele ihtiyacınız olduğunda **Show Boş Staves (Show Empty Staves)** kullanın.

### 37. Instruments siparişini nasıl değiştiririm?

Bir enstrüman etiketini değiştirmek, personellerini hareket ettirmiyor.

**Çözüm Çözüm Çözüm çözümü**

1. Open Open Open Open **Home → Instruments → Add veya Kaldırma (Home → Instruments → Add or Remove)**.
2. Puanın enstrüman listesindeki enstrümanı seçin.
3. Onu yukarı veya aşağı hareket ettirin.
4. Değişimi onaylayın.
5. Editörler, parantezler ve barline gruplama.

Ensemble'ye uygun bir sipariş seçin ve müzisyenlerin parçaları hızla bulmalarına yardımcı olun.

### 38. Instrument Names Wrong or Missing?

Alet isimleri ilk sistem ve daha sonra sistemler arasında farklılık gösterebilir.

**Çözüm Çözüm Çözüm çözümü**

1. Cihazın tam ve kısa isimlerini kontrol edin.
2. Gösterilen adı veya enstrüman ayarlarını uygun olarak analiz edin.
3. Puanın enstrüman-isim ekran ayarlarını gözden geçirin.
4. Bir enstrüman değişikliğinin başka bir etiket tanıyıp vermediğini kontrol edin.

Okuyucuların sonraki sistemlerde kimlik ve net bir kısaltmaya ihtiyaç duyduğu tam adı kullanın.

### 39. Neden Beklenmeyen bir Blank Page var?

Boş bir sayfa özel bir sayfa molasından, başlık sayfa ayarlarından veya ithal formattan sonuçlanabilir.

**Çözüm Çözüm Çözüm çözümü**

1. Ekran düzeni işaretleri.
2. Önceki sayfanın sonunu göz önünde bulundurun.
3. Boş sayfaları destekleyen bir **Special Page Break** için kontrol edin.
4. Kaldırın veya sorumlu molayı ayarlayın.
5. Sıra değişiklikleri sonrasında aşağıdaki sayfaları gözden geçirin.

Bir sayfayı formatlayarak çıkarmak için müzik silmeyin.

### 40. Bar Numbers Neden Incorrectly Başlıyor veya Yeniden Başlıyor?

Bir pickup, hareket sınırı veya kazak bar-sayı değişikliği numaralamayı etkileyebilir.

**Çözüm Çözüm Çözüm çözümü**

1. Sayılamanın yanlış olduğu noktayı göz önünde bulundurun.
2. Bir **Bar Number Change** için kontrol edin.
3. Doğru veya değişikliği ortadan kaldır.
4. Bar numara ekran ayarlarını gözden geçirin.
5. Hem puan hem de parçalarda sayı kontrol edin.

Bir açılış seçiminin sayısız veya sayılmaması gerektiğine karar verin, sonra bu kongreyi sürekli olarak uygulayın.

## Bölümler, Baskı ve İhracat {#parts-printing-and-exporting}

### 41. Bireysel Instrumental Parçalar nasıl yaratırım?

**Dinamik Parçalar (Dynamic Parts)**, müzikal içeriği paylaşmak için bir puana ve enstrümantal kısımlarına izin verir.

**Çözüm Çözüm Çözüm çözümü**

1. **Bölüm parçaları (Parts)** kontrollerini açın.
2. Hangi parçaların zaten var olduğunu kontrol edin.
3. Gerekli kısmı açın.
4. Desteklenen nerede, yeni bir bölüm oluşturun ve yer almalı olan merdivenleri seçin.
5. Oyuncu için düzenini ayarlayın.

Müziksel düzenlemeleri, ayrı dosyaları gereksiz yere tutmak yerine bağlantılı puan-ve-parts iş akışlarında tutun.

### 42. My Instrumental Part neden Puandan farklı bir Layout var?

Bölümler, sayfa dönüşleri, personel büyüklüğü ve sistem molaları da dahil olmak üzere bağımsız düzen gereksinimlerine sahiptir.

**Çözüm Çözüm Çözüm çözümü**

1. Etkilenen kısmı açın.
2. **Doküman Değişimi (Document Setup)**'i kontrol edin.
3. Otomatik molalar ve manuel molaları gözden geçirin.
4. Kısmen bölümün düzenini ayarlayın.

Yerleşimdeki farklar normalde bekleniyor. Notlar veya ritimler yanlış görünüyorsa, doğru bağlantılı kısmı görüntülemenizi ve içeriğinin saklı olmadığını kontrol edin.

### 43. Benim parçalarımda Multirests Missing veya Split neden?

Bir multirest, görünür kalmak için gereken müzikal talimatlar veya nesneler tarafından bölünmüş olabilir.

**Çözüm Çözüm Çözüm çözümü**

1. Multirests'in kısmen etkinleştirildiğini onaylayın.
2. Bir multirest kırındığı barlara dikkat edin.
3. prova işaretleri, metin, barlines, anahtar değişiklikler ve zaman imzaları için kontrol edin.
4. Kaza nesneleri sadece doğrulamaktan sonra geri alın.

Bazı molalar doğrudur, çünkü oyuncular bu noktada bir talimat görmelidirler.

### 44. Daha İyi Page Nasıl Oluşturabilirim Parçaların içinde?

Oyuncular bir sonraki girişini kaçırmadan bir sayfa çevirmek için yeterli zamana ihtiyaç duyuyorlar.

**Çözüm Çözüm Çözüm çözümü**

1. Bireysel kısmı açın.
2. Sayfa için uygun dinlenmeleri bulun.
3. Sayfa pratik pozisyonlarda kırılır.
4. Mevcut olan otomatik sayfa dönüş seçenekleri gözden geçirin.
5. Son sayfa sayımını ve sistemini kontrol edin.

Son derece kalabalık sayfaları oluşturmaktan kaçının sadece bir dönüş zorlamak için. Oyuncunun bakış açısından düzeni test edin.

### 45. PDF'min yanlış boyutu veya Margins var?

Puanın sayfası kurulumu ve baskı veya ihracat ayarları aynı fikirde olmayabilir.

**Çözüm Çözüm Çözüm çözümü**

1. **Doküman Değişimi (Document Setup)**'de sayfa büyüklüğü ve yönelim.
2. marjları ve personel boyutunu kontrol edin.
3. Amaçlanan puanı veya bölümünü ihraç ettiğinizi onaylayın.
4. Mevcut olan PDF ihracatını kullanın.
5. PDF açın ve sayfa boyutlarını doğrulayın.

Baskılandığında, kağıt boyutunu kontrol edin ve ayrı ölçeklendirme yapın. " sayfaya gidin" son baskılı personel boyutunu değiştirebilir.

### 46. Müzik Sembolleri veya Fonts PDF'de Yanlış Mı?

Eksik fontlar, alt kurumlar veya fontla ilgili ihracat sorunları, notasyon görünümünü değiştirebilir.

**Çözüm Çözüm Çözüm çözümü**

1. PDF ile ekrandaki puanla karşılaştırın.
2. Gerekli müzik ve metin fontlarının yüklü olduğunu doğrulayın.
3. Sibelius'un mevcut PDF ihracatını deneyin.
4. Başka bir PDF izleyicisinde sonucu açın.
5. Eğer semboller aynı zamanda Sibelius'un içinde yanlışsa, uygulamanın font kurulumunu araştırın.

Sadece özel bir font başarısız olursa, puanın bir kopyasında standart bir font test edin.

### 47. Neden Bir Audio Dosyasını Yok Edemiyorum?

Ses ihracat, bilgisayar içinde ses çıkarma yeteneğine sahip bir oyun geri yükleme yapılandırma gerektirir.

**Çözüm Çözüm Çözüm çözümü**

1. Seçilmiş oyun geri konfigürasyonunu kontrol edin.
2. Desteklenen bir sanal enstrüman veya iç oyun ses kaynağı kullanın.
3. Sıradan oyun geri kalanının işe yaradığını doğrulayın.
4. **Dosya → Export → Audio (File → Export → Audio)**'i seçin, nerede mevcut.

Eğer oyun gerisi dış bir donanım sentezleyici kullanırsa, sesi bir ses arayüzü aracılığıyla kaydedilmelidir. MIDI'yı cihazına göndermek sesini yakalamaz.

## Tasarruf, Kurtarma ve Performans {#saving-recovery-and-performance}

### 48. Bir Crash Sonrası Bir Puan Nasıl Yeniden Keşfetebilirim?

Kurtarma, Sibelius'un kesintiden önce kurtardığı şeye bağlıdır.

**Çözüm Çözüm Çözüm çözümü**

1. Reopen Sibelius ve bir kurtarma için hızlı kontrol edin.
2. Mevcut otosave veya yedekleme dosyalarına dikkat edin.
3. Versiyonunuzun tasarruf tercihleri veya Referans Kılavuzunda gösterilen yerleri kullanın.
4. Zamanlar ve müzikal içeriklerle karşılaştırın.
5. Yeni bir isim altında en iyi düzeltilmiş sürüm tasarruf edin.

Tamamlanan dosyanın ihtiyacınız olan işi içerdiğini onaylayana kadar orijinal yazmadan kaçının.

### 49. Sibelius Yavaş, Freening veya Crashing?

Sebep belirli bir puan, oyun gerisi kütüphanesi, sürücü veya yazılım bileşeni içerebilir.

**Çözüm Çözüm Çözüm çözümü**

1. Çalışmanızı kurtar ve Sibelius'u yeniden başlatın.
2. Küçük yeni bir puan test edin.
3. Sorunlu puanla davranışla karşılaştırın.
4. Daha basit bir oyun geri yapılandırma test edin.
5. gereksiz MIDI ve ses cihazları ile bağlantı kurma.
6. Uyumlu Sibelius ve sürücü güncellemelerini kontrol edin.

Sadece bir puan başarısız olursa, bir kopya üzerinde çalışın ve etkilenen pasajı daraltın. Her puan başarısız olursa, sürümünüzü kaydetmek, işletim sisteminiz ve destek için tam hata mesajı.

### 50. Neden biri Else Ben Sibelius Dosyamı Açamaz?

Alıcının eski bir versiyonu, sınırlı bir baskı veya dosyanın eksik bir kopyası olabilir.

**Çözüm Çözüm Çözüm çözümü**

1. Hangi Sibelius versiyonunu ve kullandıklarını sorun.
2. Nerede destekleniyor, **Dosya → Export → Previous Version (File → Export → Previous Version)** kullanın.
3. ihraç edilen kopyayı gönderin ve orijinalinizi saklayın.
4. transfer dosyasının tamamlandığını kontrol edin.
5. Başka bir notasyon başvurusu kullanırlarsa, MusicXML'yi düşünün.

Yaşlı-vers ihracat ve MusicXML, desteklenmeyen veya desteklenmeyen özellikleri değiştirebilir. Değiştirilebilir dosyanın yanı sıra bir PDF gönderin görsel referans olarak.

## Hızlı Sorun Giderme Checklist {#quick-troubleshooting-checklist}

Büyük değişiklikler yapmadan önce:

1. Puanın ayrı bir kopyasını tasarruf edin.
2. Problemin bir puan veya her puanı etkilediğini tanımlayın.
3. Seçilmiş ses ve MIDI cihazları kontrol edin.
4. Oyun geri yapılandırmasını kontrol edin.
5. Inspect son notasyon veya düzen değişiklikleri.
6. uygun olduğunda Sibelius'u yeniden başlat.
7. Kontrol versiyonu ve işletim sistemi uyumluluğu.
8. Bir kez ayarlayın ve sonucu test edin.

## Resmi Sibelius Yardım Yardımı {#official-sibelius-help}

Sürümünüze ve baskınıza özel talimatlar için, uygulama ile sağlanan **Sibelius Referans Kılavuzu (Sibelius Reference Guide)**'e başvurun.

- [Avid Sibelius Öğrenip Destekleyin](https://www.avid.com/sibelius/learn-and-support)
- [Avid Sibelius Yayın Bilgileri](https://www.avid.com/resource-center/whats-new-in-sibelius)

Yardım talep ettiğinde, Sibelius versiyonunu, işletim sistemini, oyun geri yükleme cihazını, kesin hata mesajınızı ve problemin bir puan veya tüm puanları etkileyip etkilemediğini ekleyin.


---

## Sibelius site lisanslama ve okullar için yardım {#sibelius-site-licensing-and-installation-help-for-schools}

Bir okul veya kolejde Sibelius'u bir iş istasyonu sorunmak yerine yönetmek? Softplanet Productions, İngiltere müzik bölümlerini destekleyen 25 yıllık deneyime sahiptir. [Karşılaştır Sibelius site lisansı seçenekleri ve bir alıntı talep](/tr/services/sibelius-site-licenses/) yeni yüklemeler, ek koltuklar veya ağ dağıtımı için.

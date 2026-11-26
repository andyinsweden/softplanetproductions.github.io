---
title: 'Günlük piyano doğaçlaması: ücretsiz alıştırma'
description: Ücretsiz günlük piyano improvizasyon meydan okumasını deneyin. Genrate müzikal fikirler, chord ilerlemeleri
  ile birlikte oynayın, tarayıcınızda tempoyu değiştirin ve uygulamayı takip edin.
webApplication: true
images:
- /piano-improvisation-overhead.webp
---

**Her gün piyanoda beş dakika doğaçlayın.** Her gün yeni bir fikir, dinleyebileceğiniz bir akor dizisi ve kısa bir alıştırma bulun. Hesap açmanız veya bir şey indirmeniz gerekmez.

<div class="sp-lab" id="sp-daily-improv" aria-label="Etkileşimli günlük piyano doğaçlama alıştırması">
  <div class="sp-lab__head">
    <div><span class="sp-lab__eyebrow">GÜNÜN ÜCRETSİZ PİYANO ALIŞTIRMASI</span><h2 id="sp-daily-date">Günün görevi</h2><p>Her gün yeni bir müzik fikri denemek için geri gelin.</p></div>
    <div class="sp-lab__streak"><strong id="sp-daily-streak">0</strong><span>gün üst üste çalışma</span></div>
  </div>
  <div class="sp-lab__grid">
    <div class="sp-lab__field"><label for="sp-daily-level">Seviyeniz</label><select id="sp-daily-level"><option value="beginner">Başlangıç</option><option value="intermediate">Orta</option><option value="expressive">Yaratıcı görev</option></select></div>
    <div class="sp-lab__field"><label for="sp-daily-meter">Ölçü</label><select id="sp-daily-meter"><option value="auto">Sürpriz (her gün değişir)</option><option value="2/4">2/4 — iki vuruş</option><option value="3/4">3/4 — vals</option><option value="4/4">4/4 — dört vuruş</option><option value="5/4">5/4 — beş vuruş</option><option value="6/8">6/8 — bileşik ölçü</option></select></div>
    <div class="sp-lab__field"><label for="sp-daily-bpm">Tempo <span id="sp-daily-bpm-value">78 BPM</span></label><input id="sp-daily-bpm" type="range" min="50" max="150" step="2" value="78"></div>
  </div>
  <div class="sp-lab__challenge">
    <div class="sp-lab__challenge-head"><span>TONALİTE <strong id="sp-daily-key">Do majör</strong></span><span id="sp-daily-variation">Günün fikri</span></div>
    <h3>Bu akor dizisini deneyin</h3>
    <div class="sp-lab__chords" id="sp-daily-chords"><span>C</span><span>G</span><span>Am</span><span>F</span></div>
    <p class="sp-lab__prompt" id="sp-daily-prompt">Bu akorların üzerine kısa bir melodi çalın. Bir ayrıntıyı değiştirip tekrar deneyin.</p>
    <p class="sp-lab__notes">Majör pentatonik dizinin notaları: <strong id="sp-daily-notes">C · D · E · G · A</strong>.</p>
  </div>
  <div class="sp-lab__controls">
    <button type="button" id="sp-daily-play" class="sp-lab__button sp-lab__button--primary">▶ Eşliği çal</button>
    <button type="button" id="sp-daily-new" class="sp-lab__button">Başka bir fikir</button>
    <button type="button" id="sp-daily-done" class="sp-lab__button sp-lab__button--done">✓ Bugünkü alıştırmayı tamamlandı olarak işaretle</button>
  </div>
  <p id="sp-daily-status" class="sp-lab__status" role="status" aria-live="polite">Ölçüyü seçin veya araca bırakın. Elektrikli piyano, bas ve farklı davul ritimleriyle birlikte çalın.</p>
  <div class="sp-lab__footer"><span>Tamamlanan alıştırma günleri: <strong id="sp-daily-total">0</strong></span><span>Çalışma seriniz ve seviyeniz yalnızca bu cihazda saklanır.</span></div>
  <noscript>Alıştırmayı, akor oynatmayı ve ilerleme kaydını kullanmak için JavaScript’i etkinleştirin.</noscript>
</div>
<script src="/js/daily-piano-improvisation.js?v=20261126.3" defer></script>

## Bu özgür doğalaştırma aracı nasıl kullanılır

Deneyim seviyenizi seçin ve **Play accompaniment** basın. Başlamadan önce dört bar chord döngüsüne dinleyin. Bir yarış sembolü yabancıysa, hangi anahtarların oynayacağını görmek için [piyano chord finder](/tr/tools/chord-finder/)'de girin. Önerilen birkaç notla başlayın, ifadeler arasında yer bırakın ve melodi ses niyetinizi yapmak için tekrar kullanın. Müziği yavaşlatabilirsiniz, farklı bir egzersiz deneyin veya yarın taze bir meydan okuma için geri dönebilirsiniz.

Accompaniment, elektrikli piyano kıvrımlarını birleştirir, sıcak bir hareketli bas çizgi ve beş saat imzası: **2/4, 3/4, 4/4, 5/4 ve 6/8**. Bir metre manuel olarak seçin veya **Beni şaşırtın beni**'yi seçin, böylece **Başka bir fikir** farklı metreden döner. Dört oluk varyasyonları senkronizasyonu, ince dolguları, rakip bas notları ve hi-hat aksanlarını ekleyin. **6/8**'te, müzik altı çeyrek vuruştan ziyade üç sekiz sekizinci not grubuna akar. Chords her bar sınırında değişir ve tüm parçalar seçilmiş temponuzu takip eder. Elektrikli piyano ve davullar ses örneklerini kullanır; baslar doğrudan tarayıcınızda sentezlenir. Tarayıcınız, ilk kez Play'e bastığınız örnekleri yükler. [Örnek kredi ve lisanslar](/audio/daily-piano-improvisation/credits.txt).

## Bir başlangıç olarak piyanoda nasıl doğaçlama

Harika bir ilk egzersiz sadece üç not kullanır. C major'da, C, D ve E'yi basit bir C büyük bir chord üzerinde oynayın. Küçük bir melodi deneyin, duraklayın ve başka bir sırayla aynı notlarla cevap verin. Rahat hissettiğinizde, G ve A'yı C büyük pentatonik ölçeği yapmak için tanıtın: **C, D, E, G ve A**. *ritim ve dinlemek*'ye odaklanın, ne kadar hızlı oynayamazsın.

Geliştirdiğiniz gibi, melodik yönünü değiştirerek, senkronizasyonu ekleyerek, bir chord tone'ye iniş yapın ve her iki elle de oynayın. Beş odaklanmış dakika bile size faydalı bir yaratıcı başlangıç noktası verebilir.

Yukarıdaki notların daha net bir açıklaması için, [pentatonik piyano improvizasyon rehberi](/tr/tutorials/pentatonic-piano-improvisation/)'imizi okuyun. Melody'nin altında bir sol el parçası inşa etmek için, [Her iki el ile doğaçlama](/tr/tutorials/piano-improvisation-with-both-hands/) deneyin.

## Neden her gün geri dönüyor?

Düzenli olarak, kısa seanslar, çalışma ve diğer taahhütlere uymayı daha kolay bir şekilde piyano improvizasyon yapar. Her gün anahtar, koordinasyon ve müzikal görev değişikliği, tamamlanmamış uygulama günlerinizi tarayıcınızda hatırlanırken. Başka bir tempoda bir meydan okumayı deneyin, sonra gelecek olanları görmek için yarın geri dönün.

Uygulama kayıtlarınız cihazınızın tarayıcı depolamasını kullanır. Softplanet Productions'e yüklenmezler ve otomatik olarak sizi başka bir cihaza takip etmeyeceklerdir. Site depolama onları sıfırlayacak.

## Uygulamanızı John Montgomery ile Yapın

Bu ücretsiz günlük egzersiz, sizinle oynamak için fikirler verir. Bir **yapılandırılmış piyano improvizasyon kursu** gibi olsaydınız, John Montgomerys [Modern Piano Improvisation 2026](/tr/courses/piano-improvisation/) sizi kulak, ritim, koşu ilerlemeleri, melodik phrasing, el bağımsızlık ve daha ayrıntılı video gösteriler ve stüdyo tarafından üretilen parçalarla birlikte alır.

**[Tamamlanan Piano Improvizasyon Dersini Keşfedin](/tr/courses/piano-improvisation/)**

## Sık sık sorulan sorular

### Sayfa müziği okumam gerekiyor mu?

Hayır. Günlük meydan okuma bir anahtar, korords ve müzik görevi sağlar. Dinleyerek ve deneyerek pratik yapabilirsiniz.

### piyano improvizasyon zorluğu ücretsiz midir?

Evet. Gerekli imza, abonelik veya ödeme yoktur.

### Bu aracı Android telefon veya iPhone'da kullanabilir miyim?

Evet. Kontroller ve ses playback modern mobil tarayıcılarda çalışır. Telefonunuzun sesini açın ve ses başlatmak için Play'e tıklayın.

### Kendi klavyemi kullanabilir miyim?

Kesinlikle. Önerilen notları ve melodileri piyanonuzda veya elektronik klavyenizde oynayın, recompaniment döngüleri sırasında. Araç, oyununuzu tespit etmek veya kaydetmek zorunda değildir.

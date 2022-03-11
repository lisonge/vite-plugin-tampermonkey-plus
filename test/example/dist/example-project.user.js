// ==UserScript==
// @name              example-project
// @namespace         https://dev.songe.li
// @version           1.1.2
// @author            lisonge
// @description       default description zh
// @license           MIT
// @icon              https://vitejs.dev/logo.svg
// @homepage          https://github.com/lisonge/vite-plugin-monkey#readme
// @homepageURL       https://github.com/lisonge/vite-plugin-monkey#readme
// @source            https://github.com/lisonge/vite-plugin-monkey.git
// @supportURL        https://github.com/lisonge/vite-plugin-monkey/issues
// @descriptionzh     描述
// @descriptionen     description
// @descriptionja     説明
// @descriptionzh-CN  描述
// @include           https://dev.songe.li/*
// @include           ^https:\/\/www\.songe\.li\/.*$
// @require           https://cdn.jsdelivr.net/npm/blueimp-md5@2.19.0/js/md5.min.js
// @note              2017.05.12-V8.4z
// @note              2017.05.05-V8.3
// ==/UserScript==

(({ cssTextList = [] }) => {
  cssTextList.forEach((s) => {
    const style = document.createElement("style");
    style.innerText = s;
    style.dataset.source = "vite-plugin-monkey";
    document.head.appendChild(style);
  });
})({
  "cssTextList": [
    "#app {\r\n  background-color: beige;\r\n}\r\n.test {\r\n  font-size: larger;\r\n}\r\n"
  ]
});

(function(md52) {
  "use strict";
  function _interopDefaultLegacy(e) {
    return e && typeof e === "object" && "default" in e ? e : { "default": e };
  }
  var md5__default = /* @__PURE__ */ _interopDefaultLegacy(md52);
  var style = "";
  var test = "";
  const x = 1;
  console.log("hello util.ts");
  var png = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAH7VJREFUeF7tXQuUHFWZ/v7q6eoZEjGwIpBMV08gSVcnkoiAwCAxISyPE4IBXZYjuoK4CuvqooCIuivZXQVFnuoK6ILPZUUxIi/XB0QeEVAQcDNdnZBkunqIoKKRw2P69nT9e+5kcnYy0z3dVV1VXdV965w5Pef0/V/fvV/fulX3/j9BXQqBkBHID/QOsMNrNXbeBtA+APYBQX72AbSTwDsZ2EnAVmbcundV/HTuDrwSspvj5qgdRpXN7kQgbyTfT6C3AzjBJQIvArhDA922yC7f5VK2peaKIC3Bp4SbQWCCGO8HcFgz7Ru0uVMD3RQWURRBfOgxpaI2AnkjeRiBbvSJGHsYYcb6Colzl9r4c5D4K4IEiW4X67YyvceBnZ8HCcH4GiVBq83t5UJQdhRBgkK2i/VuNlIfcsDXhwUBsbM8Wxp7MAh7iiBBoNrFOvPp5NlEdEvYEPRB7JsJ4HZLESTsnuxge4V08ggmeqwtITJvMEuVlX7bVgTxG9Eu1ffU/piVSum/CGJB3iykRHx1tli5sNn2zbRTBGkGJdWmIQL5tH4lES5q2DDgBkQ4PVsU6/0yowjiF5JdrCff37OCNO3+aEDA95l2ZZVfviiC+IVkF+uxDP3HAE6MDATM7zVLFV8eFCiCRKZX4+mIZeh/A+C2iHn/mGmLI/3wSRHEDxS7WEc+k7yamD4SNQgcjY9ePFx5pFW/FEFaRbDL5a2M/hQYS6MGAwFXZG1xaat+KYK0imAXy2+Z19dfTVRLEYXAMm2Ra9U3RZBWEexi+aG0vlYj+PZI1W8oU5romz+M0Vb0KoK0gl6Xyw4ZqQs08DVRhaGqJQ9cMvzyc634pwjSCnpdLmsZyWsAuiCqMJCGXHZYWK34pwjSCnpdLmtl9PVgrI0qDH48yVIEiWrvTvj1+/0w+4W+ZBZEWTCyhPG/RQxkAezl0v1hAEMANjHzkAZsGhWVoWXP42WXesabK4J4QU3JeELg14ch+Zo/po5nHh/4WcDJAiT/n+tJoTshT8RRt1juQFatXSKwaWDWAVpVnEREpwE41aV4GM03aqDL653/Vov0MLqgy2xsMfQlVdDxgLMGIN821QUI4+OmLQ6vpV895g0Q9W5Sne/veSuRtoo1nEAMX/YIhYkfkzOYK479cqpN9aIwzF7oMFtbDH1xlemjIH7LrjVFrK9LTFt8vlYEaqtJrPu1fc5bhv4jAGva54F/lgm4O2uLU2ppVJsV/cO5qzRZhs6dEjADL6EqBnLP4oWpMant7p3SyyHH0UkEkdA5hNMX1znKqg5MhTy4OsFcpxGEQTfm7PJ5NW+z1JHbThiy4cZgGfp/A/jbcK0Gak0kgEMX2kK+iZ92qaQNgWLfecqtdPJwED0MQO+U6Jj5qlypUjNziUr70ym9HGIcVkb/dzA+GaLJQE0x8Ce9Rzv04G2jdi1DKnFcoPB3nvLtA5gjHP1hBhZ3SnQMrMvZ4rJ68ajUo53S0w3iKAzopjPmHDBGidIhpfJWr2Fb6eQ5ILrZq3wU5dhxVuZGxjbU800lr45ir/nkk0yCppF2OROO2q2SgMuytljn1UQnvTQcx6CJPLiq/IHX0RJhuUIm+T5mkmn7+2q4eYZpi+95cX8o3bNcI03mre2Yq9GtlgxUFdDpmO4GLEP/HICP1QuJGY/kSuJoryFH/eyEx7ia+tFQJdg8ohsFsUJ/3zxQ9XomnN7IH2a6MFcqX92oXa3vn+zvm9erVR8CMOBFPsIyTZFkYkZRRTwj3JHTXBt/LKnR15pNfEbASGIsMbhgx6ueckEVMqkPMvOX4oRRk742TZJxoqgy0E3C2sZmExnJv+P+SCtfa9oVz6k2LSP5s5gclHLVO8x8Tq5U+boroRg07sqkDRPkkBnJU176iMk5Jlcc2+hF1upPnQSN7/UiG3UZAr7uaNq63PCoPOPeEVfXEcSnWhbfN20hs5p7uvJG6kYCy7rhnXgNM/O6TplNuoogPpFjfFAT48xsSXzXywgf6k8tTGjOQwx6vRf5WMgw7gXhFq+PxqMSY9cQZLPRe5ADx/Mb8akdRoRHFxXFIAGOl860MqmLwVzzGKsXfdGVoQfBzi1+FbSx+vWlSOAQZizUe8Q1B2/DX4KMvSsIMpTZ60CNx3b4DSQTXZwrlr/gRS8DVDB0udvX87sVL3bbJkOwCXiYHX6wmkzcvaTOhsep/pX60fdSQj+ZmE4G+GQA8ya12QGHzjVHynI9GcjV8QT5zQDm9Dm6zMhhBoDgDiehDS7ePlr0ojuf0U8nxu1eZDtA5rcyOSMTj2iOVpKfzPSiRo7BTAYTDGI2QLSiQazPJYBV9c6ptIpTRxNkywKkxoR+OwGrWwWqvjxfZ9oVzwmcLUP/FoB3Bedf52smxiOvJMTJhw5jp9/RdjRBLEOXe6fe4Tdo09YjcI7N2mPyLbnrqzAvucxJ0MMEzHItrAQmI/Bd0xZn+g1JxxKk0d4qP4Ekxg+yJfF2rzrzhn4ZAZ/2Kq/kdiHAxFfnipUL/cSjIwkysSv3q34C1UgXM96ZK4lbG7Wr9f1z+2PWTl1/GIRlXuSVzCQEmM83S5Ub/MKk4wgy8a7jnjpb1v3CrZaeX/3OFoMrgTEvRixDl+sQuR5RV2sIvMTknOh1p8NU0x1FELkzlxPVe5rdfNhaP9SQJvqYWSxf6VVvPq3fTk3sKvaqv4vkNlZfFScu+QNeajXmziJIWr+9mW3rrYJWT56B54i0QbM4ut2LjXym52hiTb4b6ah+8YJF6zJ0g2mXz29VT8d0hJVOng+i/2gVkFblCfzFrF35sFc9lqHLt+sXe5VXcv6uRzqCIFvSqYOrxA+437oezHAidpZnS2MPetG+ZcHs/apCyFlkoRd5JbMHAn+GgxXmiHjaKy4dQRAro98MxjleQfBdjvBDsyhk1ShPV8FIvl+m+vQkrISmItDSzuvYE2QorZ+pETw9Xg1yLDHhrFxR/JdXG1ZGvxeMk7zKK7n/R0ADn7fIrnj6wYk1QTb1Y9+EpstsIW+I4IB4vDpbDC4ZgvDiW8HoXcVwfuZFVslMQ+DZHodWLBgpP+MWm1gTZLOhX+EAl7gNOsT2HzdtIbOleLqaOFgldyj/FkwjcrMfEZfY0eTn3sTU72hOWn4CkH/piU9PvsRdiIFv5mzxHrdxxJYgQwPJozRnPDm05jbosNoT+HlCYnCRPbrNq82CoX+agfdNxPk4A08kQL/WKfH4QPGV37nVKx8la07iKCaW2+zlnyRPV1waaE29ir31AIgtQSxD/z4Az/ufwhoRzPzlXKnyj2HZc2tHHkCiBL+ZQavBWOtWPmbt7zRt4arcdiwJErdtGew4K3IjY5HPrDhejTehvQcMeSsS2Zm5FVK6nUViR5DxOhTx29j3I9MWb2ulY8OUzffrh2gJfg+z9h6AXxem7RBsuZpFYkeQiXvyuun3QwDYq4l3m7b4tlfhdsjtqoM+djFAnncGtMPvRjbdzCKxIgivQE9hmy6PagZxfLYRri1+Tw+ZdvnYFpW0RdwydHno7F8B5NrigP9Gm55FYkWQuK09pvTrDtMWkxMO+N/tAWrcNDDrgB5nbB13Sj4v0laZxdH7GkEWK4IUDP0uDvR8eSO4vH/PwDM5W8R+f1XBSL6bQXI2iXUSbgK+kbXF2Y16NDYEmdgK7indZyMQwviewH+XtSsdcSBqi6EvdoDbGFgSBnZB2aAEvzG7vfLUTPpjQxDLSF4X18UiAXdlbbEmqI5uh16ZoV1zHDmjx5YkTHxNrlj5aOwJsmvPVTKPeKbqfNK0xaHtGMRB27wf6Jlr6E/GmCQvJKqJNy589tWReljFYgaxMvpZYMTqEek44ER/MIvlzs2/OzGqCob+v/ElCV1g2uXr4k0QQ5fkOCvoX0S/9Zu2iMUPkB9xW0bqIYCP8UNXmDoY/LOcXfnrWBMkb+gvELBvmMC1aos1bX4n1cloBo+8of+JgH2aaRulNuxgaW5EyPdr067I/8JZ6dSpIL4jSoA28oWIVmeLZZl6qKuu36ZTByeJXZ+5aDdIBFyatcUVMSWI/p8gvLfdIDZtv8XUP03biWjDQkY/jRk/iKh7ddyih027/JZ4EsRI/SE2G+ZaPIser0FV39s47pcjh4/MjlQemxpVpG+xxhPBadW6j+AiNqB2VjVeuWS48mTE/GqLO5ah/whAbN79ENFF2WL5qlgRxM+SaUGPEgf0kcV2+dqg7cRF/2YjdYoDvjMu/jJjfa4kTo8VQaSzBUP/LAOXRhzopneHRjwOX92L1yzCvzftyv6BEUTulQJrJ2rAfAYdBPBB2PVodhiEYTANa8AQgX/uphrQrw9Dcvbv9TtAkOW3InklmE5cWCr/JJLOtdGpuM0iVYePXDJlHdLSGiRvJN9PoOMZWOXmPYXc2UpMv9AIP2zmEL2V3msuaEw+6j28jf1dz/R3TFuoClF10InTLMJMF+VKe65DPBFkghiyzvdhPgzYOzXQTY2IUpifXMZVkiTJ+GDTNxVMzmCuOCZrIKqrBgIxm0XuMG2xR+IKVwTJp1MnEPFnfSLGHnDKRVKFxLlLbfy53kgbMnqPJzh3ELBXFEaj11xLUfA9TB+stC5rpschS+SwaYv5k7FpmiBDmeT7NKZAqzYRsJUTtNrcXi7U60ArkzwXTF8Ls4Pr2SLGadmS+GEUfImyD/l06kIi9lQuO+y4ymUxe9nzeHm33aYIkk/rnyDCZ8JytlF2dCut3xOBRbtl2qJTzmgH2rWyUCknKBbvh4j5zdlS5VdNE2Rzume5Q1roOZ36IPbN1LndkrdaGpyfBtqrDZQTcHnWFp9opw9xsp1P648Q4cio+8zM5+RKla83RZDNRu9BDpytbQmKeYNZqqyse6tlpL4C8Hlt8Q2Ao/HRi4crj7TLftzsWmn930H4ZAz8vtK0xccaEmTLAqQckbyTQXX3ygcdLBFfna1T1veZ/tSCsQQ2gnm/oP2Yqp+ATVlbRDGjfNhQNG0vRrsi7jFtsbohQfJp/UoiXNQ0AgE1lEUts0Wxvpb6JrKfB+IVMX8pW6p8KBDlHazUSusFEBZFOcSpfVtzkR4ttvN9pl1ZVQvUduXJYsdZmRsZ2xDljo6ib5vTyXMcopuj6Nskn84wbfG9GWcQy9B/DODEyATC/F6zVLllqj/5efgrSuh/DNNPBl7O2WJ2mDY7yVbYT0TdYMegm3J2+QOTZabNIBEtafaYaYuaT0AsI/UAwKGl9GTGI7mSkHU11OURgaFM8k0a00fAHInaJAT6k9x5PPnpVd0ZxGrz06F6mNd7alQw9EsZkG/3Q7kY9NWcXZbbbNTVBQhMm0EsQ89HMTk0AVdkbTFt23s+0zNIrMlKU6FcDPpwzi5/MRRjykjbEdiDIDJbHjnO9rZ7VduBmm+uxx/3arwlLJ/VAj0spKNhZw+CDKX1tRqh5iPVKLib0kTf/GGMTvZlywLsXRX6X8LyzyE+bHGx8kRY9pSd9iKwJ0GM1AUa+Jr2ulTfelVLHrhk+OXnprawDP1VAL1h+J1gWrCwVG7P7oIwAlQ29kBgD4JYRvIagC6IKkakIZcdFlYNggyHdU4kIcTrFz6HP0QVI+WXvwjsSZCMvj7KlU7rPcmyDF2maznCX2hqa0voonfhMyiHYUvZaD8CiiAu+6DWOsilCtU8RgioWyyXnVVvHeRSjWoeEwTUIt1lR9VbB7lUo5rHBAH1mNdlR6lzIC4Bi3nzPQiyqy52tRTJmAhPm0WxbKpvYb8odBinLVbn0CM5RIJwavpWk4z+FBhLgzDWos5LTFt8fqqOsLeaqBSjLfZizMSnESSfSV5NcqdlxC5N40MX1UgMbWX0fwaPF7kP6eJrTbsSOXxCCt4XM7KOSA9X074oa1mJ9oKuC/vgbai5G6PWZsW/AXBby3Z9VMCER3NFcVQtlXlDf4KA8IpkqhIHnnt22/xZ+4tqRaaOilzW91pnQWSgNU8UxuXAlNWvL4WGGetce+7N+oI7TFvMC0Bvx6u0Il5rUgN9eNGUndqxPnLbrtNpVYePWjJSebTjR7SPAQ4ZyXdroG/6qDIQVVMLr9ZNHBeHpA2WoW8EEPrpPgIuy9piXSA91KFKLUP/LoAzoh5e0wR5an/MSqV0mTDOjwTV3nBh3GyWxLm1hC1Dl2BL0EO/iPBots6aKHRnYmBw09xeo6fHsRjoi7i7084czZh6tJBOHsFE0+q2hRRk3dSetwGJZRn9Yeb2ZeojOMdm7bGHQsIi1maGMqkPasxfikEQ3zJt8XeT/WyYmzefTp5NRNMyigQd7KiT6H/jyKvP1pw9MqmLwTztnUjQPk3Wz8RX5+oktQvTjzjYsjL6veDoZ3evdZy6IUFkB2w2Uh9ywNeH1RkzLYIn0qHKM+gHhOVPLTsEbNN0sVhtfZ+5F4bS+hs0wm/b2VfN2q61jagpgkgDVqb3OLDz82aNeWkn7+1T6DltoPjK7+rJF9LJLzHRB73o91uGGGdmS6It6yC/YwlKX8HQP87A5UHp91Pv07boOQOourrFmtw4byQPI9CNAS3cv18ui7Mn12aYGryVTp4Hoq/4CUqLuqZVJGpRX8eJW4YuZ/vBGAT2uGmLaSX+mp5BphBF1iYMtQSb1Z86iTS+i4FEpMAm7TizOHp/pHyKiDPtSg3rKXzGF8ySuHiqrCeC7FYyXquQ6GQwVgCY48KxYQI2EOj2RrUJpc7CgG7CgSTHwS5shNV02pOPsAxH2U5hLl7HPfoDAGJRZIiZTsqVyv/jK0H2mFX6e1ZomvZWAAfVKwPtAAXWnA1Lamw6rNfZ2wfQW3aSdwN0XGQHBPMRZqny68j61wbHorrptR4UCV28duEzeDEwggTVB5aR+irA7wtKv096bzdt8Q6fdMVezUSx12m/xhEO7CemLWoma2/pFivogKNVhmHmaDXweYvsinyA0fWXlUltALO8m4jFxcC6nC0uq+VspAlS6O+bx1p1JA4oEzBC0N66yB7dFgd/g/IxTo91d2NQb/0hv480QaSDlpF8HqDXB9WhPuv9rmmLM33WGRt1mweSb3SYHgDjNbFxGpixWnEcCHItQP8UF8AJ9NVsF5ZHsDK98+E460GYljcg0n1X5/Hubp8jT5ChdM9yrQ1lqFvpVGZ8MlcSodUsacVXv2QtQ5fnY97sl76w9DTK1h95guy6zdLlff38sEDzxQ5pq8zi6H2+6Iq4kryR+gWBl0fczVruPWHaYsbjHLEgSD6TvIqYPhq3DmDGO3MlcWvc/Hbjb95I/oTaWCrcja/T2jL+zSyJf5lJRywIsiWdOqFKHKfn6pMwpwtMu3xdSx0ZUWHL0L8F4F0Rda+hW8T85myp8qvYE2T8Niu6+boadgQzn1OrQGRDwQg3KBj6pxmo+e4gwm5Pdu1O0xanNvI1FjPIxDrkYwA+1yigqH6vgdY0s+8sqv5P9ityWW+8gEZ4l1kU32kkGhuCyJeGjlZ9moB9GwUV0e+/Z9oi8kkLZsJu4riDfPCwd0Qxbtatwkv7iUMOfxyVRgKxIYgMJG8kryfQhxoFFcnvmTeYpcrKSPrWhFN5I/kBAt3QRNPoN2licb47iFgRZFN/8siERo9EvwdqeMh8vlmqxG6APXEA9tsrmbocxDWzy8SxLxLAGxbaYlMzvseKIDKgQlq/nQmnNxNchNrE8vZq/LwP0z/E7u34DB1fL8VoPZH4ESSTOpmZ74nQ4G/oSkLjoxcOV2Iz840Tw78Tow3xCbMBgw/P2ZXHm7UZO4LIwKKe43Uy+HFKD9TJxJB94nb2kDKxJEiM1iKlcjUxuOzZVyO7ZT8/0DsAp3pCp84Ye/xYuZw9YkuQ+DzRoo+YdvnaZqfzye1kYSCwdgKDdiYcZ2OPXinUq2HhRr98VJuAdowDPpyBNxGwxI18XNt6mT1iTRBZeq2i8aMRfi+y0bTFMV4GlGXoskbLzQBmT/kFfF6DVmBgMxMKYBQogc3m9nLhNwOY04veOQ6qc7QxnsOkzSH8/yfAxxBI7raN+zsML5C+VCVevqRY+Y1b4VjeYu0OMm/olxHwabdBh9FeI7xjUVHc7taWzBzJqP6S43NIzG2I4bdnfMosic94MRxrgvAK9Fjb9AeoDSUQGoDt+WRhPp38IhH9o5fOVDI1EdiYtcWxBDhe8Ik1QWTAQ5nUao35Li/BByTjVB0e9FJgp2D0vIWhPRiQX12pttU9cLEniOx1y0heB9CHIzECGhzhnMlHy9C/D+DtkYijI5ygG0y7fH4roXQEQZ45ePbrxypCFvsxWwHDB9kiuGfQLL2yw62uiYV5pIqnuo0hSu0ZeEbv0VYdvG3UbsWvjiDIrllElwd35AGeNl7eD0flDX1jBNdSbcSyNdMO0SmLi+W7W9MS0xeF9YJu725fesi0y8d66RDLSP0TwJ7el3ix1+ky8nh2tlS+xo84O2YG2Q2GldbvAeFkP8Bxo4MJb88VxQ/cyMi22wdmHVB2Kr8EMOBWVrWfjgCDbszZ5fP8wqbjCDLxAvFeAhb4BVIjPUS4NVsU72zUrtb3mw39Cge4xIuskpmKAN+f0Csn+1n1q+MIIiErhLvjd4yYBxsd/q81mIcyyTdpTHL20NVgbxEBhs2MU3Ijwtdybx1JEAl1iHUVrzRtIc/Lu74sQ/8mgHe7FlQC0xDQiE5Z5MOifKrijiWIDDSEGhXbq1pycMnwy8+5HbObM6nVTrRecLoNITrtAzyt2dEEkT1oGbp8tyA3//l+1Sob3KyRgpH8KYOOb7a9alcHAcJnzKL4VFD4dDxBJkiyET7v1yLQA1m77KkGRt5I/j2BbgqqU2Ohl/EUSO5K5hHN0Uryk5le1MgxmMlggkHMBoiOBpCqFRMB38ja4uwg4+0KgkyQpASg3y8wiXFatiR+6FbflgXYe0zovyRgsVvZmLffDsb9INwP7rnPzW4D+TAj4eAolmRh3tWHRPeatvh80Jh0DUEmSMJ+AMqM/8qVxFledBUM/V9kRSMvsvGUoQfBzi1mqXJLHP3vKoKMkyStF0EwWugsweBBNwf/d9t6ekA3dQfydm+fFuzHQ5RxLwi3mLb4Xjwcru1l1xFk10ySehDgt3jsuM+Ztvi4F9m8kbqBwB/wIhsjmWFmXtcpuYi7kiATt1tenm5t60nqRy/Y+tLv3Q5YK9O7Eux0dL0QAr7uaNq63PDosFt8otq+awnihSTypF+2WP6yl860DP0OAA2ziXvRHQWZTsxgP/4sIArgttOHZncAM9EvcsXyCi++Whn9LDC+7UU2JjJnuFlryFRD7PBajZ23ASTXY/uAxtdlfQDtJPBOBnYSsJUZt+5dFT+duwOvtAOLrieIBL2pbSlMbzNL5R+57aT7gZ4DDV3utzrcrWxM2jdNjonEdPLE5AkuY3sRwB0a6LawS0gogkz0lNzg6DBfX2cX8LdNW3jaM5XPpC4i5itdDoi4NG+KHD5nbLxTA90UFlEUQSYNRblVfoz4+innSXZWNV65ZLjypNtR+8zcvvRYT1XOHvPcyka9vXyXk7PFjBWmJuqJ3AhgxkKZXmJlxvoKiXOX2vizF/lmZRRBaiA18Yt3CoBRDfRNr79WhUzyKo5h8dGGg6eJWidWpvc4sPPzhrpaaDC+RknQapk4rwU1M4oqggSE7ET+YDl7dBzGjWqLN7Wm8xF3Ymd5tjQWSLqkjus8H3FvSVU+o99KjDNbUhJB4Ua3Vvl08mwiCn1bSR/EvpkAbrcUQQIYhIW0vpYJ6wNQ3VaVDPxJ79EOrZdKp5BOHsFEj7XFySZu+7z4pQjiBbUGMlYmtQHMnrbCB+CObyqZ+apcqXJRLYVP7Y9ZqZQuc5P5viBvNgAivjpbrFzYbPtm2imCNIOSizbtusVw4aLXpiIBHLrQFkO1FOTT+pVEqEkerwa9yBHh9GxR+DZ7K4J46YUZZGJaQ7EhCjOl08n396wgTbu/oZJQGvB9pl1Z5ZcpRRC/kJzQE/YTHJ/dr6vOIZy+uM4vs2XoPwZwYli+NLTD/F6/zp8ogjRE230Dy9CfBTDXvWQ0JRh4CVUxkHsWL0z1MKI5hR8zbXGkH2gqgviBYg0dQSaLCMjlumoJuDtrC/nidNoVQuYYT+E6Gh+92IfKwoognuBvTihvpNYQcCrDWUOg/ZuTimSrS+qd/7Yy+lNgLI2a1wRckbXFpa36pQjSKoJNyG89CK8dG0ueyqA1AORfbxNikWlSr7b4lnl9/dVEVSbDiOJlmbbIteqYIkirCLqUH5rfm0k4vMZx+DgiLAfwVy5VhNp8puqwQ2l9rRbhF6IpTfTNH8ZoK4ApgrSCXouy8qzIAenUcSBeSRgny2CLKn0Vlztmx0AXH1Iqb62leMhIXaCBfSkz4KvjE8qqWvJAL1kvJ/uiCBJEz3jUuWk/zE70jhNGEuWgSX9BZ0GRZ8jlC8BNzDykAZtGRWVo2fN4eaZQLCN5DUAXeAw3cDHSkMsOC6sVQ4ograAXkuzTBvZJInkQgXaRhvE6IprD4F210EFzCBj/BHgOgDIAeQpv4o9fJKa/gPAig18Ek/zc2iwR6oVpZfT1YKwNCQbXZvx4kqUI4hp2JbAbAUUQNRYUAjMgoG6x1PBQCMyAgFqkq+GhEJiJIOoxrxofCoH6CKgXhWp0KAQaIKC2mqghohCYAQG1WVEND4XAjE+ydFneTiYCj9KltrtHqTe63Rd1YKrbR4CKf0YE1JFbNUAUAg0QUEkb1BBRCMyAgEr7o4aHQqABAipxnBoiCoGGt1oq9agaJAqBGREIO/WRSl6tBmTsEFDlD2LXZcrhsBFQBXTCRlzZiyUCqgRbLLtNOR02AqqIZ9iIK3uxRCBOZaD/Dzk1626RxIuiAAAAAElFTkSuQmCC";
  var svg = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTgxMDU5Mzk4NTUxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE1MzUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDMyMGMxMDUuODcgMCAxOTIgODYuMTMgMTkyIDE5MnMtODYuMTMgMTkyLTE5MiAxOTItMTkyLTg2LjEzLTE5Mi0xOTIgODYuMTMtMTkyIDE5Mi0xOTJtMC0yNTZDMjY0LjU4IDY0IDY0IDI2NC41OCA2NCA1MTJzMjAwLjU4IDQ0OCA0NDggNDQ4IDQ0OC0yMDAuNTggNDQ4LTQ0OFM3NTkuNDIgNjQgNTEyIDY0eiIgZmlsbD0iI0QzOTg0MiIgcC1pZD0iMTUzNiI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNjRDMjY0LjU4IDY0IDY0IDI2NC41OCA2NCA1MTJjMCAxMDUuODggMzYuOTQgMjAzLjAyIDk4LjM2IDI3OS42OSAyMy40NC0xMy4wOSAzOS43LTQwLjMxIDM5LjctNzEuNjl2LTY0YzAtOC44IDYuMzgtMTYgMTQuMTctMTZzMTQuMTcgNy4yIDE0LjE3IDE2djEyNC4wNWMwIDM3LjExIDIwLjcyIDcyLjE2IDUyLjU3IDgxLjMyIDQ2Ljc2IDEzLjQ1IDg5LjE0LTI2LjY1IDg5LjE0LTc3LjM4IDAtMjYuNTEgMTkuMDMtNDggNDIuNTEtNDhzNDIuNTEgMjEuNDkgNDIuNTEgNDh2NjAuMDVjMCAzNy4xMSAyMC43MiA3Mi4xNiA1Mi41NyA4MS4zMiA0Ni43NiAxMy40NSA4OS4xNC0yNi42NSA4OS4xNC03Ny4zOHYtMTI4YzAtOC44IDYuMzgtMTYgMTQuMTctMTZzMTQuMTcgNy4yIDE0LjE3IDE2bDEuNDQgMTZjNy4zNiA0MC41MSA0Mi4wNiA3MC4xMyA4MS4xNyA2Mi45MSAzNS4wNi02LjQ3IDU5LjEtNDMuODkgNTkuMS04NC4wMVY2MDhjMC0xNy42NyAxMi42OS0zMiAyOC4zNC0zMnMyOC4zNCAxNC4zMyAyOC4zNCAzMnYxMi4wNWMwIDM3LjExIDIwLjcyIDcyLjE2IDUyLjU3IDgxLjMyIDE0LjI3IDQuMSAyNy45NCAyLjc2IDQwLjMxLTEuODlDOTQ0Ljg3IDY0Mi4zOSA5NjAgNTc5LjAzIDk2MCA1MTJjMC0yNDcuNDItMjAwLjU4LTQ0OC00NDgtNDQ4eiBtMCA2MDhjLTg4LjIyIDAtMTYwLTcxLjc4LTE2MC0xNjBzNzEuNzgtMTYwIDE2MC0xNjAgMTYwIDcxLjc4IDE2MCAxNjAtNzEuNzggMTYwLTE2MCAxNjB6IiBmaWxsPSIjRjZENDk5IiBwLWlkPSIxNTM3Ij48L3BhdGg+PHBhdGggZD0iTTIwOCAzNDRjLTIuMDUgMC00LjA5LTAuNzgtNS42Ni0yLjM0LTMuMTItMy4xMi0zLjEyLTguMTkgMC0xMS4zMWwzMi0zMmMzLjEyLTMuMTIgOC4xOS0zLjEyIDExLjMxIDBzMy4xMiA4LjE5IDAgMTEuMzFsLTMyIDMyQTcuOTU3IDcuOTU3IDAgMCAxIDIwOCAzNDR6IiBmaWxsPSIjQjk5Q0QzIiBwLWlkPSIxNTM4Ij48L3BhdGg+PHBhdGggZD0iTTc1MiAyODBjLTIuOTQgMC01Ljc1LTEuNjItNy4xNi00LjQybC0zMi02NGE3Ljk5MiA3Ljk5MiAwIDAgMSAzLjU5LTEwLjczYzMuODQtMS45NSA4Ljc1LTAuMzggMTAuNzIgMy41OGwzMiA2NGMxLjk3IDMuOTUgMC4zOCA4Ljc1LTMuNTkgMTAuNzMtMS4xMiAwLjU3LTIuMzQgMC44NC0zLjU2IDAuODR6IiBmaWxsPSIjREY3ODY3IiBwLWlkPSIxNTM5Ij48L3BhdGg+PHBhdGggZD0iTTc1MiA0NDBjLTEuMjIgMC0yLjQ0LTAuMjctMy41Ni0wLjg0YTcuOTkyIDcuOTkyIDAgMCAxLTMuNTktMTAuNzNsMzItNjRjMi0zLjk1IDYuODgtNS41MyAxMC43Mi0zLjU4YTcuOTkyIDcuOTkyIDAgMCAxIDMuNTkgMTAuNzNsLTMyIDY0QTguMDAzIDguMDAzIDAgMCAxIDc1MiA0NDB6IiBmaWxsPSIjOTVCRDY1IiBwLWlkPSIxNTQwIj48L3BhdGg+PHBhdGggZD0iTTE0NCA1NjhjLTIuMDUgMC00LjA5LTAuNzgtNS42Ni0yLjM0LTMuMTItMy4xMi0zLjEyLTguMTkgMC0xMS4zMWwzMi0zMmMzLjEyLTMuMTIgOC4xOS0zLjEyIDExLjMxIDBzMy4xMiA4LjE5IDAgMTEuMzFsLTMyIDMyQTcuOTU3IDcuOTU3IDAgMCAxIDE0NCA1Njh6IiBmaWxsPSIjREY3ODY3IiBwLWlkPSIxNTQxIj48L3BhdGg+PHBhdGggZD0iTTQwMCAyMTZjLTEuMiAwLTIuNDItMC4yNy0zLjU4LTAuODRsLTY0LTMyYTguMDA2IDguMDA2IDAgMCAxLTMuNTgtMTAuNzNjMi0zLjkyIDYuOC01LjUzIDEwLjczLTMuNThsNjQgMzJhOC4wMDYgOC4wMDYgMCAwIDEgMy41OCAxMC43M0E4IDggMCAwIDEgNDAwIDIxNnoiIGZpbGw9IiNFRTcxQTAiIHAtaWQ9IjE1NDIiPjwvcGF0aD48cGF0aCBkPSJNNTYwIDMxMmE3Ljk4IDcuOTggMCAwIDEtNS42Ni0yLjM0Yy0zLjEyLTMuMTItMy4xMi04LjE5IDAtMTEuMzFsMzItMzJjMy4xMi0zLjEyIDguMTktMy4xMiAxMS4zMSAwczMuMTIgOC4xOSAwIDExLjMxbC0zMiAzMkE3Ljk0IDcuOTQgMCAwIDEgNTYwIDMxMnoiIGZpbGw9IiNCOTlDRDMiIHAtaWQ9IjE1NDMiPjwvcGF0aD48cGF0aCBkPSJNOTEyIDU2OGE3Ljk4IDcuOTggMCAwIDEtNS42Ni0yLjM0bC0zMi0zMmMtMy4xMi0zLjEyLTMuMTItOC4xOSAwLTExLjMxczguMTktMy4xMiAxMS4zMSAwbDMyIDMyYzMuMTIgMy4xMiAzLjEyIDguMTkgMCAxMS4zMUE3Ljk0IDcuOTQgMCAwIDEgOTEyIDU2OHoiIGZpbGw9IiNFRTcxQTAiIHAtaWQ9IjE1NDQiPjwvcGF0aD48cGF0aCBkPSJNMzA0IDQ3MmMtMi4wNSAwLTQuMDktMC43OC01LjY2LTIuMzRsLTMyLTMyYy0zLjEyLTMuMTItMy4xMi04LjE5IDAtMTEuMzFzOC4xOS0zLjEyIDExLjMxIDBsMzIgMzJjMy4xMiAzLjEyIDMuMTIgOC4xOSAwIDExLjMxQTcuOTU3IDcuOTU3IDAgMCAxIDMwNCA0NzJ6IiBmaWxsPSIjOTVCRDY1IiBwLWlkPSIxNTQ1Ij48L3BhdGg+PC9zdmc+";
  console.log("hello world main.ts:" + x);
  console.log({ png, svg });
  console.log("blueimp-md5", md5__default["default"]("114514"));
})(md5);
 

import { load } from "@l4ph/nsfwts";

// ページ上のすべての画像要素を取得する
const images: NodeListOf<HTMLImageElement> = document.querySelectorAll('img');

// 画像のsrc属性を取得し、load関数の第二引数として使用する
images.forEach(async (img) => {
  try {
    // モデルに画像を渡して推論を行う
    const result = await load(img, "./nsfwjs.onnx");

    // 推論結果をコンソールに出力
    console.log(result);
  } catch (error) {
    console.error("Error loading image:", error);
  }
});

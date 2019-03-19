import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  getHeader(query: string) {
    const url = "https://api.spotify.com/v1/" + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      "Authorization",
      "Bearer BQBvpNgVU74-j-jFxT5wbyihNYGPZN2Y7V_yURUJ6nNe6DZlGJ4Li4BHpdubeHerzHS_JS1N802hW4ImcmDOZ_wAI7LiW3DhhqdVm-LqcOdvkiVus18aujdokmqW_5GO0yYelEhlQWUARSfKphXikO4NMV2gifISMA"
    );
    return this._http.get(url, { headers });
  }
  constructor(private _http: HttpClient) { }

  searchMusic(str: string, type = "artist") {
    const param = "&offset=0" + "&limit=20" + "&type=" + type + "&market=US";
    const query = "search?query=" + str + param;
    return this.getHeader(query);
  }
  getArtist(id: string) {
    const query = `artists/${id}`;
    return this.getArtist(query);
  }
}

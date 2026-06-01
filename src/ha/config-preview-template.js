/*
 * Template used when Home Assistant renders the card in editor preview mode.
 *
 * Preview mode avoids starting the full dashboard runtime while still giving users a clear summary of
 * the card configuration they are editing.
 */

export function getHaConfigPreviewTemplate() {
  return `
      <style>
        :host{
          display:block;
          width:100%;
          max-width:100%;
          min-height:0;
          margin:0 auto;
          padding:12px 0;
          box-sizing:border-box;
          contain:content;
        }
        .ddc-ha-widget-preview{
          position:relative;
          width:min(88%, 430px);
          margin:0 auto;
          overflow:hidden;
          aspect-ratio:16 / 10;
          border-radius:18px;
          color:#f8fbff;
          background:
            linear-gradient(145deg, rgba(18,38,56,.94), rgba(3,12,24,.98)),
            linear-gradient(135deg, #071522 0%, #0a2b40 55%, #05111f 100%);
          border:1px solid rgba(125,220,255,.32);
          box-shadow:
            0 18px 46px rgba(0,0,0,.34),
            0 6px 16px rgba(0,0,0,.18),
            inset 0 1px 0 rgba(255,255,255,.1);
          pointer-events:none;
          isolation:isolate;
        }
        .ddc-ha-widget-preview::before{
          content:"";
          position:absolute;
          inset:0;
          z-index:0;
          opacity:.52;
          background:
            linear-gradient(rgba(80,210,255,.11) 1px, transparent 1px),
            linear-gradient(90deg, rgba(80,210,255,.1) 1px, transparent 1px),
            radial-gradient(300px 180px at 18% 12%, rgba(45,212,255,.22), transparent 68%),
            radial-gradient(240px 160px at 82% 10%, rgba(255,255,255,.09), transparent 70%);
          background-size:34px 34px, 34px 34px, auto, auto;
        }
        .ddc-ha-widget-preview::after{
          content:"";
          position:absolute;
          inset:0;
          z-index:1;
          background:
            linear-gradient(90deg, rgba(4,12,24,.54), transparent 45%, rgba(4,12,24,.4)),
            linear-gradient(180deg, rgba(255,255,255,.07), transparent 26%, rgba(0,0,0,.14));
        }
        .ddc-mini-header,
        .ddc-mini-stage,
        .ddc-mini-footer{
          position:absolute;
          z-index:2;
          box-sizing:border-box;
        }
        .ddc-mini-header{
          top:22px;
          left:24px;
          right:24px;
          display:flex;
          align-items:center;
          gap:10px;
        }
        .ddc-mini-mark{
          width:38px;
          height:38px;
          flex:0 0 38px;
          display:grid;
          place-items:center;
          border-radius:14px;
          color:#f8fbff;
          background:linear-gradient(180deg, #79dcff, #16b7e9);
          box-shadow:0 10px 26px rgba(14,165,233,.34);
        }
        .ddc-mini-mark ha-icon{
          --mdc-icon-size:22px;
        }
        .ddc-mini-title{
          min-width:0;
          display:flex;
          flex-direction:column;
          gap:3px;
        }
        .ddc-mini-title strong{
          display:block;
          color:#f8fbff;
          font-size:16px;
          line-height:1;
          font-weight:860;
          letter-spacing:0;
          white-space:nowrap;
        }
        .ddc-mini-title span{
          display:block;
          color:rgba(248,251,255,.68);
          font-size:11px;
          line-height:1.15;
          font-weight:760;
          white-space:nowrap;
        }
        .ddc-mini-tools{
          margin-left:auto;
          display:flex;
          align-items:center;
          gap:6px;
        }
        .ddc-mini-tool{
          width:30px;
          height:30px;
          display:grid;
          place-items:center;
          border-radius:12px;
          border:1px solid rgba(125,220,255,.28);
          background:rgba(255,255,255,.06);
          color:#e8f9ff;
          box-shadow:inset 0 1px 0 rgba(255,255,255,.08);
        }
        .ddc-mini-tool ha-icon{
          --mdc-icon-size:17px;
        }
        .ddc-mini-stage{
          left:34px;
          right:34px;
          top:82px;
          bottom:50px;
        }
        .ddc-mini-card{
          position:absolute;
          border-radius:15px;
          border:1px solid rgba(125,220,255,.22);
          background:rgba(3,13,25,.82);
          box-shadow:
            0 14px 30px rgba(0,0,0,.22),
            inset 0 1px 0 rgba(255,255,255,.08);
        }
        .ddc-mini-card::before,
        .ddc-mini-card::after{
          content:"";
          position:absolute;
          left:15%;
          right:15%;
          height:9px;
          border-radius:999px;
          background:linear-gradient(90deg, #f8fbff 0 33%, rgba(125,220,255,.42) 33% 54%, rgba(248,251,255,.22) 54%);
        }
        .ddc-mini-card::before{
          top:19%;
        }
        .ddc-mini-card::after{
          left:18%;
          right:30%;
          bottom:18%;
          height:8px;
          background:rgba(125,220,255,.32);
        }
        .ddc-mini-card.large{
          left:0;
          top:14px;
          width:34%;
          height:62px;
        }
        .ddc-mini-card.mid{
          left:37%;
          top:0;
          width:26%;
          height:52px;
        }
        .ddc-mini-card.wide{
          left:28%;
          bottom:0;
          width:34%;
          height:50px;
        }
        .ddc-mini-card.tall{
          right:0;
          top:18px;
          width:28%;
          height:66px;
        }
        .ddc-mini-line{
          position:absolute;
          height:3px;
          border-radius:999px;
          background:linear-gradient(90deg, transparent, rgba(125,220,255,.6), transparent);
          box-shadow:0 0 14px rgba(125,220,255,.22);
          transform-origin:center;
        }
        .ddc-mini-line.one{
          left:28%;
          top:44%;
          width:46%;
          transform:rotate(-9deg);
        }
        .ddc-mini-line.two{
          left:44%;
          top:72%;
          width:40%;
          transform:rotate(15deg);
        }
        .ddc-mini-dot{
          position:absolute;
          width:4px;
          height:4px;
          border-radius:50%;
          background:#7ddcff;
          box-shadow:0 0 10px rgba(125,220,255,.8);
        }
        .ddc-mini-dot.one{
          left:24%;
          bottom:18%;
        }
        .ddc-mini-dot.two{
          right:34%;
          bottom:2%;
        }
        .ddc-mini-footer{
          left:24px;
          right:24px;
          bottom:19px;
          display:flex;
          align-items:center;
          gap:8px;
        }
        .ddc-mini-chip{
          display:inline-flex;
          align-items:center;
          gap:5px;
          height:24px;
          padding:0 8px;
          border-radius:999px;
          border:1px solid rgba(255,255,255,.14);
          background:rgba(255,255,255,.08);
          color:rgba(248,251,255,.74);
          font-size:9.5px;
          font-weight:820;
          white-space:nowrap;
        }
        .ddc-mini-chip ha-icon{
          --mdc-icon-size:13px;
          color:#7ddcff;
        }
        .ddc-mini-ready{
          margin-left:auto;
          color:rgba(248,251,255,.72);
          font-size:10.5px;
          line-height:1;
          font-weight:820;
          white-space:nowrap;
        }
        @media (max-width: 420px){
          :host{
            padding:10px 0;
          }
          .ddc-ha-widget-preview{
            width:min(92%, 390px);
            border-radius:16px;
          }
          .ddc-mini-header{
            top:18px;
            left:20px;
            right:20px;
            gap:10px;
          }
          .ddc-mini-mark{
            width:36px;
            height:36px;
            flex-basis:36px;
            border-radius:12px;
          }
          .ddc-mini-title strong{
            font-size:15px;
          }
          .ddc-mini-title span{
            font-size:10px;
          }
          .ddc-mini-tools{
            gap:6px;
          }
          .ddc-mini-tool{
            width:29px;
            height:29px;
            border-radius:10px;
          }
          .ddc-mini-stage{
            left:30px;
            right:30px;
            top:78px;
            bottom:50px;
          }
          .ddc-mini-footer{
            left:20px;
            right:20px;
            bottom:18px;
            gap:6px;
          }
          .ddc-mini-chip{
            height:24px;
            padding:0 9px;
            font-size:10px;
          }
          .ddc-mini-ready{
            font-size:10px;
          }
        }
        @media (max-width: 340px){
          .ddc-mini-tools .ddc-mini-tool:nth-child(3),
          .ddc-mini-chip:nth-child(3),
          .ddc-mini-ready{
            display:none;
          }
        }
      </style>
      <section class="ddc-ha-widget-preview" aria-label="Drag and Drop Card preview">
        <div class="ddc-mini-header">
          <div class="ddc-mini-mark" aria-hidden="true"><ha-icon icon="mdi:cursor-move"></ha-icon></div>
          <div class="ddc-mini-title">
            <strong>Drag & Drop Card</strong>
            <span>Visual dashboard canvas</span>
          </div>
          <div class="ddc-mini-tools" aria-hidden="true">
            <span class="ddc-mini-tool"><ha-icon icon="mdi:home"></ha-icon></span>
            <span class="ddc-mini-tool"><ha-icon icon="mdi:lightbulb-outline"></ha-icon></span>
            <span class="ddc-mini-tool"><ha-icon icon="mdi:chart-line"></ha-icon></span>
          </div>
        </div>
        <div class="ddc-mini-stage" aria-hidden="true">
          <span class="ddc-mini-line one"></span>
          <span class="ddc-mini-line two"></span>
          <span class="ddc-mini-dot one"></span>
          <span class="ddc-mini-dot two"></span>
          <span class="ddc-mini-card large"></span>
          <span class="ddc-mini-card mid"></span>
          <span class="ddc-mini-card wide"></span>
          <span class="ddc-mini-card tall"></span>
        </div>
        <div class="ddc-mini-footer">
          <span class="ddc-mini-chip"><ha-icon icon="mdi:layers-triple-outline"></ha-icon><span>Layers</span></span>
          <span class="ddc-mini-chip"><ha-icon icon="mdi:vector-polyline"></ha-icon><span>Lines</span></span>
          <span class="ddc-mini-chip"><ha-icon icon="mdi:view-dashboard-outline"></ha-icon><span>Cards</span></span>
          <span class="ddc-mini-ready">Full HD ready</span>
        </div>
      </section>
    `;
}

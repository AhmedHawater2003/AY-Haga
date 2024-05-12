const OrgFulfilledPostData = [
    {
      id: 1,
      title: "Case 1",
      summary: "Summary of the case",
      category: "Medical",
      primaryDetails: {
        name: "Ali",
        age: 25,
        school: "LUMS",
        grade: "A",
        favTeam: "Barcelona",
        location: "Lahore",
      },
      organization: "World Health Organization",
      additionalDetails: "Nothing",
      image:
        "https://media.istockphoto.com/id/1318617341/photo/low-angle-view-group-of-volunteers-busy-working-by-arranging-vegetables-and-clothes-on.jpg?s=612x612&w=0&k=20&c=CJsDJ1nIMKr5NPBQufc5eyjsbSV_3XhqgcQusavGXIk=",
    },
    {
      id: 2,
      title: "Case 2",
      summary: "Summary of the case",
      category: "Blood",
      primaryDetails: {
        name: "Ali",
        age: 25,
        school: "LUMS",
        grade: "A",
        favTeam: "Barcelona",
        location: "Lahore",
      },
      organization: "World Health Organization",
      additionalDetails: "Nothing",
      image:
        "https://nagalandpage.com/wp-content/uploads/2024/05/organ-donation.jpg",
    },
    {
      id: 3,
      title: "Case 3",
      summary: "Summary of the case",
      category: "School",
      primaryDetails: {
        name: "Ali",
        age: 25,
        school: "LUMS",
        grade: "A",
        favTeam: "Barcelona",
        location: "Lahore",
      },
      organization: "World Health Organization",
      additionalDetails: "Nothing",
      image:
        "https://media.istockphoto.com/id/1318617341/photo/low-angle-view-group-of-volunteers-busy-working-by-arranging-vegetables-and-clothes-on.jpg?s=612x612&w=0&k=20&c=CJsDJ1nIMKr5NPBQufc5eyjsbSV_3XhqgcQusavGXIk=",
    },
  
    {
      id: 4,
      title: "Case 1",
      summary: "Summary of the case",
      category: "Medical",
      primaryDetails: {
        name: "Ali",
        age: 25,
        school: "LUMS",
        grade: "A",
        favTeam: "Barcelona",
        location: "Lahore",
      },
      organization: "World Health Organization",
      additionalDetails: "Nothing",
      image:
        "https://media.istockphoto.com/id/1318617341/photo/low-angle-view-group-of-volunteers-busy-working-by-arranging-vegetables-and-clothes-on.jpg?s=612x612&w=0&k=20&c=CJsDJ1nIMKr5NPBQufc5eyjsbSV_3XhqgcQusavGXIk=",
    },
    {
      id: 5,
      title: "Case 2",
      summary: "Summary of the case",
      category: "Blood",
      primaryDetails: {
        name: "Ali",
        age: 25,
        school: "LUMS",
        grade: "A",
        favTeam: "Barcelona",
        location: "Lahore",
      },
      organization: "World Health Organization",
      additionalDetails: "Nothing",
      image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTEhIWFRUXFRcVFxcVGBgYFRcXFxgXGBcYFRUYHSggGBolHRUWITEiJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGi0dHyUtKy0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tKysrLS0tLS0tLS0tLS0tLS0tLi0tLS0tLf/AABEIAMQBAgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBQYBBwj/xABFEAABAwEFBQUDCAkEAQUAAAABAAIRAwQFEiExBkFRYXETIoGRoTKx0QcjQlKTwdLwFBczU2JykqLhFRZD8YIkNGOywv/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACgRAQEAAgEEAgEEAgMAAAAAAAABAhEDEiExQQRRIhMjofBxsQUyYf/aAAwDAQACEQMRAD8A9BY5PNcobXp1rl0RLDkrEowclgoHsSMSydo2qpVKxsrWu7xdSe4j2XYsHswcs9SkX3isFSk+nVe6i+oQaZiA2N0QIg8JyGam+1v0101rS5cLkglclVCiUglcJSZWR0pJQSuEqDi4nXuGEAajVNKDi4V1cUVyEELqECUJUJyzuAOekdVAyhKRCDgXULqAQuoQcQiE7WIMRwz3IGSEkhLhCIaIXC1OwuEKhnChLhCBDXJ1rlEDk61y6IltclhyjtKcaVR5nUayhedTEcLWuLwHglxBGLIiA4E6TpzIT+01+fpDhqGtb3G8CSQevsiOvNX22Vx1q76dSi1hLGkHE1rsXfY5ocHES3unzI3rz11hqUXmjVGGo0yTmMUiQWzuj1XLO9OFx+3bC7r21kgAHWBPVdlUGzN/iu0MeR2wGY3uAA70cc9FeErUss3HO43HtXSVwlcXCrUdJXJXJQoOriEKKEIQVBxCEIBCF1AIhdC6AoOQhdXYQJXUIQC4uohEcQuwuwgTCCEsLhCoahCXCEFTiUyqACI4TrOear3FP2VslbiJbCpDAmmBg4lSKdZukLQ6Asxt3cjq1IVKLMVZmQgwSw6iNHHgtT2o4KL+mHFpkplJZqtY3V28Tu62uY9r2uIcDIO+ea9Q2b2nZaO4+GVNwnJ3HDO/ksP8oF0mhanVGj5usS9pGgf9NvWe948iqeyWggggkEcNZC8XVePJ979Pj+Vxzfa+r9PdKbQQ4ndpn9yaWX2W2m7WKVY9/wCi7IB3I/xdNVp16ccplNx8Xm4c+LLpyCEkolVyLQmhVShUCBaodr7W5tLBSqYKpc2CCBDcXelxBwiJzhTNoL4bZaPaluLvBsTxnPidNy83tdStXcavaYtcjInPhwjTwXPPPpdePj6irw2httjc9rKna0jhILnYy0kAmHbxM5ZrX7PbcWW0NAc8U6mQLX5AnLNp0InxXnm0DwKUSA47uW9ZVpjPROPK5TdTkxmN1H0rK6Csr8nF4PrWJpqOxOY5zMR1IEFs9A6PBaoLbmUEoLjQlwg4lhgwk75/OSTCIUCUJWFGFAlCVhXcKBC7CVC7CAptzErlRsEgaSukLmFUNwhLhCCmt9MNe4A6EhSbFTgBYi5qZq1xJcQ04jJ8vX3LdMW8Rx4XCEonNFEAuGuu7VbQ9MNhRQYKszZ2aTv1ynPDEnxUC3Umim8y6Qxx3a4SfuWKqit9Sz2yg+i6o3Md10juuHsuy5+hIXlFSm+k803iHDI/EHeDxWtt92Mp9nBJLg4OmMzTcaf0Rrkq+97mNX5yj7QEFp357jxXnznU9vxOf9LLV8Kulao3+Wvgtbce3D2ua2uMVOAJHtiMgZ+lzlYJwc0kOBaRqCCCPApbamXiuE3jez7OX6fPjrObe1WfaCzPYHipkdxa6RyMBIdflA/T/tcPuXkVjtJEjmrCneDADiaMs50HSN51XWc3qvm8v/G2flhdz/T0sX1Q+v6H4J6y3nTqHCwlx5A+p3LAULVZQylUrvNNlQkTgcYjkBOc6x5qwvna/wDR6eG76IfTAk13NeaZO/CQB2hG90wNF6Ju+XzMpq6d2xvQOtHYFv7Js94NIcXgGQDOgynqs/ZA5s4YgSQAcieZj3cFQ2q/K1oqdpVGN8asAAjcN8AIfeMDC4ADXMy71PwXLPHddMcrJ2XZLnsJcGzwAHdHCTLiTnvOiy15lhqO7MQ0ZeI1MblOff8AIDQyYENJOYHIblM2O2bdaqsvBFFplx+t/CPvKceFl3V5M5ZJHpXyX2YMsVMH6RdU/qOXoAtlXpQJaCYGg1PSVCuugGgQIAEADcBoFb0mzkurizbdo6Gne/t/ElnaOgPrf2/iTe0lga09oG+0YdHHcfFUpiNP++q522NSRfVNpKABMuyE5YfxLg2ms8TLh1DZ/wDss24DVK7Ma7/u6KdVXTSf7iocT/b+JdbtFQ4n+38Sy1VwbEtkmf8Av3JdloYyAGkAkdczuyzW5jnlNyMXLGXVrTf7iocT/b8VwbRUOLv7fioVS5aYEFpzIM5YgIdIxRAGSbpXNTGUu9rDu+s4ZZcgpZlFlxvhaMv6id58h8Up1+0RqT5D4qit920wJ1kxnH1Wu4cSVHFlZw00Jj7lndXTRjaChxd/b8V3/XqPF3kPisubOzhl0SP0SnwnwCdVNNP/ALjocXf0j4rizX6CzgP6UJumjuyVnw08R1eZ8Bp8fFadhVbdzABlpoOgVg1ejHwwUUUnEGRquELrGqhJtNScj6Dly5BZ/a29KlOy1iHQcEDIfSIZ/wDpaCmzNYX5R7xaKJYNXuDRzwkOceggDxWaqmdtD27mDCQGhwkkEkudiJMAD0VrTrwBB/PRYq6gXOAaCTwGZ8gtzZLjtDmyKZblkX93PdkRI8lz0quvUUK/cfUp03tgYnkh2IiQATk7ospbbO6i8sfGgOR1B0PKea3w+Tui4jtq9RwklwbAJJ3l3HdpoIEJF93NQotAw42gBjQRicA0QJI101WcsNvRwfJy4+3p5+ypBlQ7TaCcuGfj/wBQrO32MNcezxFusOHeHjvVMXcFOPDV3Xf5XyuvjmON8nXWt5aGue5zW6NJJDeg3JHZgnICegTYfz9EvFrG9d3zjjBhmNTlI4J+z3YXCXNeMgQcBII3kmRl5qICnW2p7fZe4RwcR7ilht21WMMgTmc8wRA3a5q32evq00SGUXl2ktd3m5dfZHSFS17U98YnOdExiMnMyczzV3dlSnTbBOe88T8FzzzuM7Tder4vx5zZ/lenGeXp2yG1b31m0LRTaHVAcFSmSWEtaXFr2uzaYa4gyQY3Lch0aLxG7L9FKoyoxpJa6cuG/LgQSF69dN6UbQztKNVr26HCcweDhqDyKzx5ZWfl5X5fFx4ZftXc/vv2TtF/7apyAPk4LGstGUlbO/x/6er/ACO9y81q2kAR4q5eXmic60czx1SHVzrJ81BbXkx48vNHaaqaNrGxF1V8Nl0AkwJgSJJjdkr673u1aWNg/SdH3TCzNy2wtdUwO+q14B4ycJjd7Jjormnh3QeuS+jwYftR4ebL9xcWq8Kgyx03fyEEbxByy13qqp3hUxODnaPnKNxnXqT5rr3tHDwWGvS2WgVKmAns2ENdBAcCQDnvIz3Ln8nHWPZvgzu7fL0C02sPa0Qct5zJ0G4DgoxWYuqtXyJxRl7RnI/wzPor4WnmfFeB6sMur1pIPXzQTyGf53Jo1mx7QG9Dag1Hu4o0VjHAIXO3bxHohBdWVsNCnYCNVmXX9Iw2em6oRq7Ro5/mFVXrtNUmatcNIEBlDx1dpv3ErteXGOuPxs7/AON4hjsivKXbcWhp+bJPJ3enzz8l6RRtYwtc7u90OcN4kadZkK45zJjk4rx3ucvK0CnTzMEgkk/RaNXFeIbQ3ubTWL9GDusHBo39Tqf8Lebd3iTZ6mftYWmOGId0comV5gFLWF/dV/2qmA2lVwDg1jPXLNSrTtxeNEw6oHA6HC2D6aqkspjMp+32qlUplmLvDvNMGJG6eeYWV2urN8oVvc17wym5rBLzhAgdJBOm5KZ8ptc60aR/qH3rGWa3vpsqU2hsVBhcSDijMZEHnvlXGytzh+KtXDhQptL50LiIIDcsxE+MK9/S/wCV5fe1dWpZyHU2MNZpa0AGQzR73OPH2QMvpcFjAwKZeNtNV+IgNywtaNGtEw0cdTnvJKjaaj87l0c7SXU27+qaLOBhOOdK4oF2Szmo9rA5oLjEuMNG+SdyvDso+AO0YHl5bmTgIwsc3CMOLEcfDKCqe7rUKVVlTCHYDMHKco13az4K9/3cQZFCdDnUM6Ux7WGc+zz4z5hFbstWgOL6WYPdJdM4XOj2YmGu8lFt92PoYQ9zTiLwMM/8bsJmQN6mP2vdl8wMs/b/AIHs+r/8k+CVf9vp2h1IUTjI7QuDQ/V7g6BiAJ0O5Maqto1CNDn7l6DsbVyFsoZVaXzdqojSvTgltRjdO0A8y08TOJp2OrTh3ZPEb8Mj78lsvkmANau2faZTcI0Ia5wJ/u9VbZZuL3nZvryvKlWsT6tJ4fTdTcQ4aaRB4GcoXl9VxLloNr7ldZBWq2Z+GjVLRUomYc4uHepHc7Kek8gsZQtY4nhodeHVcshbsq81DvSu80nOY13Zg4H1QW9zLdnO8S7QSmMTnZHuj+4+WnvUmneFJhZTqsBoB7ajgGnEcJBa0OxBsS0ZEHInioSbTrDsRaywVGvNMvaHFofmCQNZ3px2zN4N+k93MPYtNS+UaxO1FQeDfxKW3bawkwXuaebfgSuk5ZPaXiy+mAtN3XpTzLiG/wDiTHgFLsd3U6oxd5rye+XgYyRkM5IjgY36BbV+0N3VNaw8Wv8Awwmq9ksB1rNYdxxYdOsTqplydU8k49emfsV2Gm7G0yQN+F2XjMKxs9nGZIfJMiZInIRloFJZdNn1p21vi9hCkWW53hwItTHAbtfc5c2taMOuhzntbLTi3gyB1CjVaTqbnMcIIJBWusdmwZjM8VC2hsJcO1AzHtc28fD3K2dklUAd+ZQmSTx9ELG1Ye1X3aK5FNkwcm06Yy/pGZ8VOunY6vUcTaGupMAme7icZjCBOXUjz3eiXbddCziKNNreJ1c7q45lR7fetMSMQnl8V1x4ZPLtn8m3tj2UVuuiz0KDxTYAYEuObjBBzcf+k9Qt+KkxzjhaKbXOJ3Q0An3qNbrZja4QIORzM/4VLa2B7OzJc1ufsniZMzIPwW7jfTz3LflT7R312/dYCKTXGJ1cY9p3DfA3KrslkfUMMYXdBPmdy01hsFnZ/wAfaGZ+cM/2xHorinebPZHc4CIHhCTBNs1T2VqPjtHBgH/kfIZeqnN2estMS6Xc3OIHkIVlaahOj46GD6qmttN896Kn80tPm0x7lrpkTaLSs1kdaKbaYMl8ESS3Q558NU3tJehjsBUJDXEPjQkQBnvzxenBW91MxH5uy4OJHdH9ehT9oswZM0+uGCU6TqYanZahbjax5bpiwkjnmEl7jJnVa+lag8xSY90Zd1pIA4Et9/NSXXS5/t045Pw+mpCdJthZ8UoFay17Ms3DDPA5esqFX2ehpAxYt0kYTxGimjaia2Smi5SKlIsJDgZ3cP8AKY1mdd3+VmqYqEyr7ZipBJ3yqLASYW2sl0mnZRUHtNILujsj5SCsZTcbwuq0FGrlmrPZBtKlanVPZ7VmD+EuDgZncco6rOWetIEKYCdRvEEcR0XmxvTdvblOvHSZ8p94zVp0BoxuN38zpjyE/wBSxLhvBh3oeAcN/vVle9mq1Kjqk4pDRmc8gGj3KsqUXjUFejz3eGzXY0bW5ubhwiMwTuzjLxTTaDnPLqkSCcIgRpu3kZzrqpIdxTdQ5ygzdYZqRQspIkOhN1h84fD3LY3bdTDRYcOZaDrxVl7LZ3ZQ0ag+l6lLdVrnV5OcmTOfj0C2Yu4N0aPJRrRdrXatjmMinZdX7ZUWquNHEdI3aaJAvSqPpK0t13lmeo9VRWod4p0430dWU9rGhtBWZOEwSIkTOoOXktRs8bXaGOf+kvpiYEEmd5yxDcR5rCMYTHWF63s1ZwyzU278OI/+Wf3hYyxk7RqZZeVgwgAAmYESdTzQg/nX4oWGTF5X+XAhjXNBynf/AIVBVr5KK62uG+eqj1bWHAwDK97ikV6+EZFIpXgDk7PmoTXYhmozqozhTYvLFbG0qjahxECfZ1zBA96iWu3lznnDk5ziJ1AJJ+9VrLZmR/2rO6rH2hDnA4eG93+EBYKVWo6Gzg3l2g6HeeSvqdHAIlpHiXecJ5xboMuW7oEw4wqG3OOrXnLcmP0ic56pq0PgkgphhnP05rIsGXlUZlMtUsW3EJBVQx26RCU3u5jRVF7ardipMZB7syTpnwVcXpjtCRr96aNWDvz1yj3qBi9rG2o0giHAd0/d0WNq0yDwIyW0qVOf58JWdvez94kDXLLjOXpks1qG7go46vQev5leoXYwdmWOGIOBaeYIghYjY27iXYiNfcPvW/puwiB0WYrHWig+zVOzdpq131m/Hir+4reGuxGTlEDqNeWSpNtrdm1jYLx3nH6vADhPwVZdF65wcjwK48nHrvHp4+TfatNaaRjE3UajiFGqtxMO/LJTqFYOC4yjDgWiQXCRIA1k5nQKcWeu1ObDf5Rlq7Q1zhOjiPIwo9Vwg9CnLwaS4vmQXOMjiTKhuM5Lbgp2ZvPivSropfM0/wCRvuC89umymrVwNiXTE8gXH0BXrNz3Qewp5icADYwua4hs4Q5riMUA8stUt1GvaOaSfvCo1+CARhaG5/nRD6Lm+00jqCE04KilvekIA5/n3rCXxTiq4dPcF6JebdPFYC/P2z/D3BWM0i6qWJwHOB5GF61QbhAAGQAHSMvgvMNmmTWYP4x6L1Fg3aLnn5an/UrCELh6oWBgRZyQXAEtmC76MnQTpOSRUqNYNZW3qVWk91zJ7pPsSSG1RlnhDtMzopNCw09C6k0YzlDTkatSemRXt24vOn2oEZJmzWZ9R2FgneeA5krb7Q3NS7Jpx5F8gtj90wZxPAqBY6DabQGDXfOZ6qyJUSw7PU2d6oe0drAyb8SrkVYbAaG9Ew6rCjVKy14Qt7kl1pkKL2pJTmHjkBqfhxKik1c55DM8PieSYZhDmwCZk5/AZKzsxpmlVxQCG/NzOIuzkg790zyVTRa6S4Nc7RogTl/lRTlC0uI9o88+GSc/SnTkSpNg2dtVUEtp4QHZ4zBzznLcrmzbC1z7VVrejSfUkKbNM5UtDjlJ81FeFuR8nhJPz+7Luade9mkU/k7qD2q2Lo2PQkps0w7hxUepZXVTgZq7dv1bn4AFa227C2sEhuFzdzpgxzadPVXWzmywoCaveeYB+qB9UHUjylZqxDuS7RRphu/efgi9baKTC7wHM7gFpbwsgDjhgNgRGmgn1Xn971+3q5fs2GB/E7eUxhVUyiTL3ZuPez3n4Ktt13Ob3wZOs71oKoiDw929de2VvQiXHeYLYdkRqPgrCrbIEzImOWay97WU03Y2ZfnRaG6sNWz5xmIOenhxXj5OPpr18WfVNHrNQaQ4NYHNILsMaAZuMjcPTiqa9rtLG4qZxA6N+mOnEc1tmuw0QAWCKRa1xwwA6l9JsyROZnUzopVoFOoyD2eKIk4CCQKwzAkRkPQLfX21e7ncJvceX3RZXU6tNx7kS7Mw6QDEDXVew3XYqLKLLSfpMa4lgIAkZktbIBzMn3KJdFx0K7q4e0d1mE4CAQXljicv5deatrquMWYFtG0Vg2ZwVA17QTrHdaR4HfKxn1XxVw6dd4r9oqVoe0fo1cjMSIGKOIfMRyhVmzVnMO/TKpL8RaBUe0QGxBAPedM+gWxfQfxpPP8AKWH0LlmrXfNVtZkU6jKY9vFTxeLZMxuyz5FMbZ6S6T7TcNCqJbkc8w7JZz/aNmbVfjpCq57f+SpLWgZSwNa0zkNTvW2dZ21Wg4QQRIIaWuz3gtIIUanczMQxDSSHF7yR55rOXJ29xrDCe2IsmxtOnVNSi8twOxFh7zcwYDXaiJ3kq5YI14/mEzfe0TaNopUaeDsie/UMkZe0BnzGc8UXpeNGm8gvADicPSeKsu5L5ZzmrrwWanVCh/6lQ/fM80JqsbZ7tWExhA4RwQW8DKi1bOSIacxmD9xTDbUWuDho4QRwIXu24ry22x72ND3EhogDhu3KrdVLdNyefVxJrspBPAeilD1G0FyU0TmctR4qBY7RnkN0Z+9Ty4n8/mE2FCsBoJ5f5UyxWCrWPIZToBySroud1SCBDZzP3Abyt5dl2hrQIgcFLVkUtg2YZrU754aN8t609mu1ga0BoEclMoWWFMbTWGkehQA0GqkspJxrE4AgQ2mlYQulyZe9TYWYTT6QO5AcmL0tzaFJ1R2oyaPrOOTR4lFYnbW8cHzDD335GPot3nx0WSFOBA0ClWxxfUdUcZc46/Dko5K6yMLW+iyoylWbALm4HtG5zcpjmPcFRGW7pby1HxCkSuhJNG1feDWuZqI5yum7KlGytrNzZPfPAEgNMHcSQPLjlJNi7StTpD6Rk8hq4+QJUXaXag1qbrNTY1tIVAQ5sy4NmARpE97wC5cn03hdd0KpewcSCMiAPHRSLuvFxs9SlgaT7QecsMGTu6rPBanZW7RUYGOkCqXEkRMAZRII3eq4dEjt+rWz+Sm11KlGsXHu9oGgboDQT6uVxsoXVrRUFQuLQ1zsJLhBxCOmuipLquitZmltmtENJLoqMDhJje0t4K0p3lb2ZmnRq82vLD5Ob961Mfyl+lx5ZJlNb3/DYOu1h3uHUiPcqC+Ld+j1m0oxAhp1wnMkRlM6KIzaqs39pZazebYeP7XE+ii2q/LDWqB9Wo9jxA74NPIaAh4C3zWXH8Jqrw5YTL8/DT1nBjS4kgNBJjPIcAZTFS1MwNf2uFrohxy10/JTbbzo1WkUq7ZIMOaQ6Dx4Ltdj3Uw1rqdR4iS8d10amBoVi36c8Z9/3+DN83eypQqNqNa+abocQMQOE5jLVeIX3by7s88wz1mD7l77bPYeP4Xe4rxXZ+ajcAAP0s/I+oVY8s7/AKif4f6WfBC17rmdP7Bvk1CdSKxtTOVFLIeWnR3eb1+kEuha8smDdqUi01y9vsjIyCNV6GE6xt1nQSkVbT3SdAB5pmlVcRmOUDU8lorh2TNRrXV8TRMhgyMbpUtFdsndZrVA0AkukmPo6mTy/Oei3lh2Up08nzUcCRLshruaN3VW9z3ayk3DTpho47z1KtRRnVZ20jWSwADIBo4AKwp0QEqmxPBqDjWpwBEpDqibDkpt1RNOqJtz1Nqfq5AHimJlJCda1QcLwBJXmm0G0JtFqcxp+apZNH1nnIuPQZDqV6TaWjCZ4FeF3w11Cq4xkXOHUjX3q4+Uq3tgLXYXZHz9yil6raF503e0S31CsaNIP/Z1abuWLCfJ0LttgoOVlc1h7V+EkgQTI3ZgZ8s/zqq40Hg5sPkplrbgonOC5uUbzI7vUifJS0ivfa+zs9e0zDnxZ6XV+byOjB/csaH9CtRtwW0WULODnSacYB/5KkOfPTIeCyYrt3j0XC3d26RJY0uho1JAHUmAvStnrHhqNaNGsgeEBeeXKXGszsWtL8QwggRO6Vs6d522i7E+xmYglgcWxl9Uu4cVi1uY2zs3LAnQshZ9t2aPpOad+/0VtZNprK/SpB4HXyEpMolxs9LkqPa7LWFRslhpOaCWub3gYMwZgyY9V2lbKbvZe09CJ8k/K0yrbRcVlf7VBk8Q3CfNsFR37PMH7OtXpx9Wq4j+l8hXMpJKCicy1MOFltDt2GrTA10GKmRKyY2dtNk+cJaWNzJY7cTGhAXoVWix2rQeoVBtpVDLIQMgXNEcpxH3J2N12nb2QJ1gIWJZb3gAcBCFjSsj/qdWMOLLoFY3Qy21y1lBhdiLg3utDSWMc9wxuhshrXGJ3KiXsXyf7ZWCzXeyjXtZD4qTTcyq7s3F9SAwMZggteHYiS4lxEgABdto8/sd62+kQWUzIaHAmiCQ0gkOEt0Iac+RVm7bm9qYJcS0DUuoNAGcZy3LMgdV6b+se7mBoFuc4hxBeWWgucyK5BeTTGc1GEtaA1pMNEBQNt71pWu6K9opPc9go0aRc5lVoc/9IsznYXvaA8y10wScj1UHn7flQvQf8zPsqf4Ur9ad6fv2fZUvwrFIQbb9at6/v2fZUvwo/Wtev79n2VL8KxKEG1/Wrev79v2VL8K4flSvT9+37Kn+FYtCDZ/rRvT9+37Kn+Fc/When79v2VP8KxqEG0Hyo3p+/Z9lS/Cun5U70/ft+ypfhWKQg2FX5Tbzdka7fs6f4VVWzaq1VWubUe1wc7Ge4ycXEGMlSIQSTbn8fQIFvqfW9AoyFd00vKe1trDAztAQMhLWk+JiT4rg2qtWNr8YlpDgMDcMgyO7Ea5qkQs6gk2u3VKr3VHuxOe4uceJJkpo1ncU2hUTbvvSrRe2pTcA5pkGAc+h6q8/WDeH71v2bPgsshBpa23Vtd7T6bv5qVM+9qhV9pK79cH2bPgqdClxl8rLYsRfdcey/D/KIHkFOsu1tubkyq7waPcB71QKyuCO1ztAs/dMVC0uzyGGBpIJz5JqFtq5p7d3kIHaydM6TJJyy9nmPMJz/e96ZjFpr8y3Lr3cl2q5uFrRerCO0ZPzTxABacRyzDYJjeesooUKeIYb0phz8EnsiADIEOcRkBkRuyOm+o4dtL04n7Fv4eYVbee1trrtDatQEAzGBozgjcOas7JVbhJN6hpccRHZOLpz3+Ay48szkCEE4XxWH0h5D4IUBCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCD/2Q==",
    },
    {
      id: 6,
      title: "Case 3",
      summary: "Summary of the case",
      category: "School",
      primaryDetails: {
        name: "Ali",
        age: 25,
        school: "LUMS",
        grade: "A",
        favTeam: "Barcelona",
        location: "Lahore",
      },
      organization: "World Health Organization",
      additionalDetails: "Nothing",
      image:
        "https://media.istockphoto.com/id/1318617341/photo/low-angle-view-group-of-volunteers-busy-working-by-arranging-vegetables-and-clothes-on.jpg?s=612x612&w=0&k=20&c=CJsDJ1nIMKr5NPBQufc5eyjsbSV_3XhqgcQusavGXIk=",
    },
    {
      id: 7,
      title: "Case 1",
      summary: "Summary of the case",
      category: "Medical",
      primaryDetails: {
        name: "Ali",
        age: 25,
        school: "LUMS",
        grade: "A",
        favTeam: "Barcelona",
        location: "Lahore",
      },
      organization: "World Health Organization",
      additionalDetails: "Nothing",
      image:
        "https://media.istockphoto.com/id/1318617341/photo/low-angle-view-group-of-volunteers-busy-working-by-arranging-vegetables-and-clothes-on.jpg?s=612x612&w=0&k=20&c=CJsDJ1nIMKr5NPBQufc5eyjsbSV_3XhqgcQusavGXIk=",
    },
  ];
  


export default OrgFulfilledPostData;